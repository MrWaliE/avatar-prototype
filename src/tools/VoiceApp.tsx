import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { Mic, MicOff, Loader2, Volume2 } from 'lucide-react';

export default function VoiceApp() {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<{ role: 'user' | 'model'; text: string }[]>([]);
  
  const sessionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const playbackQueueRef = useRef<Float32Array[]>([]);
  const isPlayingRef = useRef(false);
  const nextPlayTimeRef = useRef(0);

  const connect = async () => {
    setIsConnecting(true);
    setError(null);
    setTranscript([]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      // Initialize Audio Context
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({
        sampleRate: 16000, // Live API expects 16kHz
      });

      // Request Microphone Access
      mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      const source = audioContextRef.current.createMediaStreamSource(mediaStreamRef.current);
      
      // Create ScriptProcessor for capturing audio
      processorRef.current = audioContextRef.current.createScriptProcessor(4096, 1, 1);
      
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Zephyr" } },
          },
          systemInstruction: "You are a helpful, conversational AI assistant. Keep your responses concise and natural.",
          inputAudioTranscription: {},
          outputAudioTranscription: {},
        },
        callbacks: {
          onopen: () => {
            setIsConnected(true);
            setIsConnecting(false);
            
            // Start processing audio
            processorRef.current!.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              // Convert Float32Array to Int16Array
              const pcm16 = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) {
                pcm16[i] = Math.max(-32768, Math.min(32767, inputData[i] * 32768));
              }
              
              // Convert to Base64
              const buffer = new ArrayBuffer(pcm16.length * 2);
              const view = new DataView(buffer);
              for (let i = 0; i < pcm16.length; i++) {
                view.setInt16(i * 2, pcm16[i], true); // little-endian
              }
              
              const base64Data = btoa(
                new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
              );

              sessionPromise.then((session) => {
                session.sendRealtimeInput({
                  media: { data: base64Data, mimeType: 'audio/pcm;rate=16000' }
                });
              });
            };

            source.connect(processorRef.current!);
            processorRef.current!.connect(audioContextRef.current!.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            // Handle Audio Output
            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio) {
              playAudioChunk(base64Audio);
            }
            
            // Handle Interruption
            if (message.serverContent?.interrupted) {
              playbackQueueRef.current = [];
              isPlayingRef.current = false;
              nextPlayTimeRef.current = audioContextRef.current?.currentTime || 0;
            }

            // Handle Transcriptions
            if (message.serverContent?.modelTurn?.parts[0]?.text) {
               setTranscript(prev => [...prev, { role: 'model', text: message.serverContent!.modelTurn!.parts[0].text! }]);
            }
          },
          onclose: () => {
            disconnect();
          },
          onerror: (err) => {
            console.error("Live API Error:", err);
            setError("Connection error occurred.");
            disconnect();
          }
        }
      });

      sessionRef.current = await sessionPromise;

    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to connect to Live API.');
      disconnect();
    }
  };

  const playAudioChunk = (base64Audio: string) => {
    if (!audioContextRef.current) return;
    
    // Decode base64 PCM16 to Float32
    const binaryString = atob(base64Audio);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    const int16Array = new Int16Array(bytes.buffer);
    const float32Array = new Float32Array(int16Array.length);
    for (let i = 0; i < int16Array.length; i++) {
        float32Array[i] = int16Array[i] / 32768.0;
    }

    const audioBuffer = audioContextRef.current.createBuffer(1, float32Array.length, 24000); // Output is 24kHz
    audioBuffer.getChannelData(0).set(float32Array);

    const source = audioContextRef.current.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContextRef.current.destination);

    const currentTime = audioContextRef.current.currentTime;
    if (nextPlayTimeRef.current < currentTime) {
        nextPlayTimeRef.current = currentTime;
    }
    
    source.start(nextPlayTimeRef.current);
    nextPlayTimeRef.current += audioBuffer.duration;
  };

  const disconnect = () => {
    if (sessionRef.current) {
      try { sessionRef.current.close(); } catch (e) {}
      sessionRef.current = null;
    }
    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    setIsConnected(false);
    setIsConnecting(false);
    playbackQueueRef.current = [];
    nextPlayTimeRef.current = 0;
  };

  useEffect(() => {
    return () => {
      disconnect();
    };
  }, []);

  return (
    <div className="p-12 max-w-4xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-semibold tracking-tight mb-4 text-gray-900">Conversational Voice App</h1>
        <p className="text-xl text-gray-500">Have a real-time voice conversation with Gemini 2.5 Native Audio.</p>
      </div>

      <div className="flex flex-col items-center justify-center space-y-12">
        {/* Main Interaction Area */}
        <div className="relative">
          <div className={`absolute inset-0 rounded-full blur-3xl opacity-20 transition-all duration-1000 ${isConnected ? 'bg-emerald-500 scale-150' : 'bg-transparent'}`} />
          
          <button
            onClick={isConnected ? disconnect : connect}
            disabled={isConnecting}
            className={`relative w-48 h-48 rounded-full flex flex-col items-center justify-center border-4 transition-all duration-300 shadow-2xl ${
              isConnected 
                ? 'bg-white border-emerald-500 hover:border-red-500 group shadow-emerald-500/20' 
                : 'bg-emerald-500 border-emerald-400 hover:bg-emerald-600 hover:scale-105 shadow-emerald-500/30'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isConnecting ? (
              <Loader2 className="w-12 h-12 text-white animate-spin" />
            ) : isConnected ? (
              <>
                <Volume2 className="w-12 h-12 text-emerald-500 group-hover:hidden animate-pulse" />
                <MicOff className="w-12 h-12 text-red-500 hidden group-hover:block" />
                <span className="mt-4 font-medium text-gray-500 group-hover:text-red-500">End Call</span>
              </>
            ) : (
              <>
                <Mic className="w-16 h-16 text-white mb-2" />
                <span className="font-medium text-emerald-50 text-lg">Start Conversation</span>
              </>
            )}
          </button>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm max-w-md text-center">
            {error}
          </div>
        )}

        {/* Status Text */}
        <div className="text-center h-8">
          {isConnecting && <p className="text-emerald-600 font-medium animate-pulse">Connecting to Live API...</p>}
          {isConnected && <p className="text-emerald-600 font-medium">Connected. Start speaking!</p>}
        </div>

        {/* Transcripts (Optional visual feedback) */}
        {transcript.length > 0 && (
          <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl p-6 max-h-64 overflow-y-auto space-y-4 shadow-sm">
            {transcript.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${msg.role === 'user' ? 'bg-emerald-500 text-white shadow-sm' : 'bg-gray-100 text-gray-800 border border-gray-200'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
