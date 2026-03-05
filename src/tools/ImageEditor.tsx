import { useState, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Upload, ImageIcon, Loader2, Wand2 } from 'lucide-react';

export default function ImageEditor() {
  const [image, setImage] = useState<{ data: string; mimeType: string } | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [editedImageUrl, setEditedImageUrl] = useState<string | null>(null);
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
      setEditedImageUrl(null); // Reset on new upload
    };
    reader.readAsDataURL(file);
  };

  const handleEdit = async () => {
    if (!image || !prompt) {
      setError('Please upload an image and provide an edit prompt.');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setEditedImageUrl(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              inlineData: {
                data: image.data,
                mimeType: image.mimeType,
              },
            },
            {
              text: prompt,
            },
          ],
        },
      });

      let foundImage = false;
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          const imageUrl = `data:${part.inlineData.mimeType || 'image/png'};base64,${base64EncodeString}`;
          setEditedImageUrl(imageUrl);
          foundImage = true;
          break;
        }
      }

      if (!foundImage) {
        throw new Error('No image was returned by the model.');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred during image editing.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-12 max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight mb-4 text-gray-900">Nano banana powered app</h1>
        <p className="text-xl text-gray-500">Edit images with text prompts using Gemini 2.5 Flash Image. Try "Add a retro filter" or "Remove the background".</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Original Image</label>
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center cursor-pointer hover:border-purple-500/50 hover:bg-purple-500/5 transition-all group bg-white"
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                accept="image/*" 
                className="hidden" 
              />
              {image ? (
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <img 
                    src={`data:${image.mimeType};base64,${image.data}`} 
                    alt="Original" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-medium">Change Image</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="w-8 h-8 text-gray-400 group-hover:text-purple-500" />
                  </div>
                  <p className="text-gray-700 font-medium mb-1">Click to upload image</p>
                  <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                </div>
              )}
            </div>
          </div>

          {/* Prompt */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Edit Prompt</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., Make it look like a watercolor painting..."
              className="w-full bg-white border border-gray-200 rounded-xl p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-none h-32 shadow-sm"
            />
          </div>

          <button
            onClick={handleEdit}
            disabled={!image || !prompt || isGenerating}
            className="w-full bg-purple-600 text-white py-4 rounded-xl font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Applying Magic...
              </>
            ) : (
              <>
                <Wand2 className="w-5 h-5" />
                Edit Image
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
            <span className="font-medium text-gray-700">Edited Result</span>
          </div>
          <div className="flex-1 p-8 flex items-center justify-center relative bg-gray-50/50">
            {editedImageUrl ? (
              <img 
                src={editedImageUrl} 
                alt="Edited" 
                className="rounded-xl w-full h-full object-contain shadow-lg"
              />
            ) : isGenerating ? (
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin mx-auto mb-6" />
                <p className="text-gray-700 font-medium">Applying edits...</p>
              </div>
            ) : (
              <div className="text-center text-gray-400">
                <ImageIcon className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p>Your edited image will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
