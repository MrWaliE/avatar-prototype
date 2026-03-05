import { useState, useEffect } from 'react';
import { Key } from 'lucide-react';

export default function ApiKeyGate({ children }: { children: React.ReactNode }) {
  const [hasKey, setHasKey] = useState<boolean | null>(null);

  useEffect(() => {
    const checkKey = async () => {
      // @ts-ignore
      if (window.aistudio && window.aistudio.hasSelectedApiKey) {
        // @ts-ignore
        const result = await window.aistudio.hasSelectedApiKey();
        setHasKey(result);
      } else {
        // Fallback for local dev if window.aistudio is not available
        setHasKey(!!process.env.GEMINI_API_KEY);
      }
    };
    checkKey();
  }, []);

  const handleSelectKey = async () => {
    // @ts-ignore
    if (window.aistudio && window.aistudio.openSelectKey) {
      // @ts-ignore
      await window.aistudio.openSelectKey();
      // Assume success to mitigate race condition
      setHasKey(true);
    }
  };

  if (hasKey === null) {
    return <div className="p-8 text-center text-gray-400">Checking API key status...</div>;
  }

  if (!hasKey) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
        <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6">
          <Key className="w-8 h-8 text-indigo-400" />
        </div>
        <h2 className="text-2xl font-semibold text-white mb-4">API Key Required</h2>
        <p className="text-gray-400 max-w-md mb-8">
          This feature uses advanced models (Veo or Gemini 3.1 Flash Image) which require a paid Google Cloud API key.
        </p>
        <button
          onClick={handleSelectKey}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors"
        >
          Select API Key
        </button>
        <p className="mt-6 text-sm text-gray-500">
          <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="underline hover:text-gray-300">
            Learn more about billing
          </a>
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
