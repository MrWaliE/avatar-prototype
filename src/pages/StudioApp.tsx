import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Play, Image as ImageIcon, Mic, Search, LayoutDashboard } from 'lucide-react';
import clsx from 'clsx';
import VideoGenerator from '../tools/VideoGenerator';
import ImageEditor from '../tools/ImageEditor';
import VoiceApp from '../tools/VoiceApp';
import SearchGrounding from '../tools/SearchGrounding';

export default function StudioApp() {
  const location = useLocation();

  const links = [
    { name: 'Video Generation', path: '/app/video', icon: Play },
    { name: 'Image Editor', path: '/app/image', icon: ImageIcon },
    { name: 'Voice App', path: '/app/voice', icon: Mic },
    { name: 'Search Grounding', path: '/app/search', icon: Search },
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 bg-white flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b border-gray-200">
          <div className="flex -space-x-1">
            <div className="w-4 h-4 rounded-full bg-indigo-500 mix-blend-multiply" />
            <div className="w-4 h-4 rounded-full bg-cyan-400 mix-blend-multiply" />
            <div className="w-4 h-4 rounded-full bg-purple-400 mix-blend-multiply" />
          </div>
          <span className="text-xl font-bold tracking-tight">Grady Studio</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-[#00b8ff]/10 text-[#00b8ff]" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Icon className="w-5 h-5" />
                {link.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<div className="p-12 text-center text-gray-500">Select a tool from the sidebar to begin.</div>} />
          <Route path="/video" element={<VideoGenerator />} />
          <Route path="/image" element={<ImageEditor />} />
          <Route path="/voice" element={<VoiceApp />} />
          <Route path="/search" element={<SearchGrounding />} />
        </Routes>
      </main>
    </div>
  );
}

