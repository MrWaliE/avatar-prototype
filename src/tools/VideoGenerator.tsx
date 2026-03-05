import { useState, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Upload, Play, Loader2, Image as ImageIcon } from 'lucide-react';
import ApiKeyGate from '../components/ApiKeyGate';

export default function VideoGenerator() {
  return (
    <ApiKeyGate>
      <VideoGeneratorContent />
    </ApiKeyGate>
  );
}

function VideoGeneratorContent() {
  const [image, setImage] = useState<{ data: string; mimeType: string } | null>(null);
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      const base64Data = result.split(',')[1];
      setImage({
        data: base64Data,
        mimeType: file.type,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleGenerate = async () => {
    if (!image) {
      setError('Please upload an image first.');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setVideoUrl(null);

    try {
      // Create a new instance right before the API call
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt || 'Animate this image',
        image: {
          imageBytes: image.data,
          mimeType: image.mimeType,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: aspectRatio,
        },
      });

      while (!operation.done) {
        await new Promise((resolve) => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        // Fetch the video with the API key
        const response = await fetch(downloadLink, {
          method: 'GET',
          headers: {
            'x-goog-api-key': process.env.GEMINI_API_KEY || '',
          },
        });
        
        if (!response.ok) throw new Error('Failed to fetch video');
        
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
      } else {
        throw new Error('No video generated');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred during video generation.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-12 max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight mb-4 text-gray-900">Animate images with Veo</h1>
        <p className="text-xl text-gray-500">Upload a photo and bring it to life with Veo 3.1 Fast Generate Preview.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Reference Image</label>
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center cursor-pointer hover:border-[#00b8ff]/50 hover:bg-[#00b8ff]/5 transition-all group bg-white"
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                accept="image/*" 
                className="hidden" 
              />
              {image ? (
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <img 
                    src={`data:${image.mimeType};base64,${image.data}`} 
                    alt="Uploaded reference" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-medium">Change Image</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="w-8 h-8 text-gray-400 group-hover:text-[#00b8ff]" />
                  </div>
                  <p className="text-gray-700 font-medium mb-1">Click to upload image</p>
                  <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                </div>
              )}
            </div>
          </div>

          {/* Prompt */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Animation Prompt (Optional)</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe how you want the image to animate..."
              className="w-full bg-white border border-gray-200 rounded-xl p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00b8ff]/50 resize-none h-32 shadow-sm"
            />
          </div>

          {/* Settings */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-3">Aspect Ratio</label>
              <div className="flex bg-gray-100 rounded-xl p-1 border border-gray-200">
                <button
                  onClick={() => setAspectRatio('16:9')}
                  className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${aspectRatio === '16:9' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  16:9 (Landscape)
                </button>
                <button
                  onClick={() => setAspectRatio('9:16')}
                  className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${aspectRatio === '9:16' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  9:16 (Portrait)
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={!image || isGenerating}
            className="w-full bg-[#00b8ff] text-white py-4 rounded-xl font-medium hover:bg-[#00a0e0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-[#00b8ff]/20"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating Video (This may take a few minutes)...
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                Generate Video
              </>
            )}
          </button>

          {error && (
            <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
              {error}
            </div>
          )}
        </div>

        {/* Output */}
        <div className="bg-white border border-gray-200 rounded-2xl flex flex-col overflow-hidden shadow-sm">
          <div className="p-4 border-b border-gray-100 flex items-center gap-2 bg-gray-50">
            <ImageIcon className="w-5 h-5 text-gray-400" />
            <span className="font-medium text-gray-700">Generated Video</span>
          </div>
          <div className="flex-1 p-8 flex items-center justify-center relative bg-gray-50/50">
            {videoUrl ? (
              <video 
                src={videoUrl} 
                controls 
                autoPlay 
                loop 
                className={`rounded-xl max-h-full shadow-lg ${aspectRatio === '16:9' ? 'w-full aspect-video' : 'h-full aspect-[9/16]'}`}
              />
            ) : isGenerating ? (
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-[#00b8ff]/20 border-t-[#00b8ff] rounded-full animate-spin mx-auto mb-6" />
                <p className="text-gray-700 font-medium">Veo is animating your image...</p>
                <p className="text-sm text-gray-500 mt-2">This usually takes 1-3 minutes.</p>
              </div>
            ) : (
              <div className="text-center text-gray-400">
                <Play className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p>Your generated video will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
