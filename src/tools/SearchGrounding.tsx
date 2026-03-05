import { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Search, Loader2, Globe, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function SearchGrounding() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [sources, setSources] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setError(null);
    setResult(null);
    setSources([]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: query,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      setResult(response.text || 'No response generated.');
      
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (chunks) {
        const extractedSources = chunks
          .filter((chunk: any) => chunk.web?.uri && chunk.web?.title)
          .map((chunk: any) => chunk.web);
        setSources(extractedSources);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred during search.');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="p-12 max-w-4xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight mb-4 text-gray-900">Use Google Search data</h1>
        <p className="text-xl text-gray-500">Get up-to-date and accurate information powered by Gemini 3 Flash Preview with Search Grounding.</p>
      </div>

      <div className="space-y-8">
        {/* Search Input */}
        <form onSubmit={handleSearch} className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-6 w-6 text-gray-400" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about recent events, news, or facts..."
            className="block w-full pl-12 pr-32 py-5 bg-white border border-gray-200 rounded-2xl text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00b8ff]/50 shadow-sm"
          />
          <div className="absolute inset-y-0 right-2 flex items-center">
            <button
              type="submit"
              disabled={!query.trim() || isSearching}
              className="bg-[#00b8ff] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#00a0e0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg shadow-[#00b8ff]/20"
            >
              {isSearching ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                'Search'
              )}
            </button>
          </div>
        </form>

        {error && (
          <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* Results */}
        {result && (
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="p-8 prose prose-gray max-w-none">
              <div className="markdown-body">
                <ReactMarkdown>{result}</ReactMarkdown>
              </div>
            </div>
            
            {sources.length > 0 && (
              <div className="bg-gray-50 p-6 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-4 text-gray-700 font-medium">
                  <Globe className="w-5 h-5 text-[#00b8ff]" />
                  <h3>Sources</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {sources.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-sm transition-all group"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#00b8ff]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-[#00b8ff]">{idx + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate group-hover:text-[#00b8ff] transition-colors">
                          {source.title}
                        </p>
                        <p className="text-xs text-gray-500 truncate mt-1">
                          {new URL(source.uri).hostname}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#00b8ff] shrink-0 mt-1" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
