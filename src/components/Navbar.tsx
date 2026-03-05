import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menus = {
    Platform: (
      <div className="flex gap-12 p-8">
        <div className="flex-1">
          <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-6">Products</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <MenuLink to="/platform/video-avatar" title="Video Avatar" desc="Record yourself once and reuse it as your digital twin" />
            <MenuLink to="/platform/live-avatar" title="Live Avatar" desc="Add avatars that can respond in real time" />
            <MenuLink to="/platform/photo-avatar" title="Photo Avatar" desc="Bring any picture to life with voice and motion" />
            <MenuLink to="/platform/ai-avatar-generator" title="AI avatar generator" desc="Build a custom avatar that looks and sounds like you" />
            <MenuLink to="/platform/avatar-iv" title="Avatar IV" desc="Create lifelike avatars from a single photo" />
            <MenuLink to="/platform/ai-dubbing" title="AI Dubbing" desc="Replace voices and languages with natural lip sync" />
            <MenuLink to="/platform/video-translator" title="Video Translator" desc="AI video translation with perfectly synced voice" />
            <MenuLink to="/platform/text-to-video" title="Text to Video" desc="Turn scripts into ready-to-share videos" />
            <MenuLink to="/platform/video-agent" title="Video Agent" desc="Generate professional videos from simple prompts with script, visuals, and voice." />
            <MenuLink to="/platform/image-to-video" title="Image to Video" desc="Drop in a photo, watch it turn into a video" />
            <MenuLink to="/studio" title="AI Studio" desc="Edit and customize videos with avatars, voices, and simple tools." />
          </div>
        </div>
        <div className="w-64 border-l border-gray-100 pl-8">
          <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-6">Features</h3>
          <div className="space-y-6">
            <MenuLink to="/features/face-swap" title="Face Swap" desc="Learn more about Face swap" />
            <MenuLink to="/features/lip-sync" title="Lip Sync" desc="Learn more about Lip sync" />
            <MenuLink to="/features/api" title="API" desc="Learn more about API" />
          </div>
        </div>
      </div>
    ),
    "Use cases": (
      <div className="flex gap-12 p-8">
        <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-8">
          <MenuLink to="/use-cases/video-ads" title="Video ads" desc="Make ads that grab attention instantly" />
          <MenuLink to="/use-cases/product-explainers" title="Product explainers" desc="Present your product clearly with AI avatars" />
          <MenuLink to="/use-cases/social-media" title="Social media" desc="Post short, scroll-stopping videos in minutes" />
          <MenuLink to="/use-cases/how-to-videos" title="How-to videos" desc="Turn tutorials into simple, watchable clips" />
          <MenuLink to="/use-cases/learning-courses" title="Learning courses" desc="Build training videos fast without a film crew" />
        </div>
        <div className="w-80">
          <Link to="/use-cases" className="block rounded-2xl overflow-hidden relative group cursor-pointer">
            <img src="https://picsum.photos/seed/usecase/400/300" alt="Use cases" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white font-medium flex items-center gap-1">
              Explore all use cases <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    ),
    Learning: (
      <div className="flex gap-12 p-8">
        <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-8">
          <MenuLink to="/learning/academy" title="Grady Academy" desc="Learn skills through our structured videos" />
          <MenuLink to="/learning/guides" title="Guides, e-books & more" desc="Expert-written guides to level up your AI video strategy" />
          <MenuLink to="/learning/help-center" title="Help center" desc="Get quick answers and support" />
          <MenuLink to="/learning/playbooks" title="Playbooks" desc="Actionable guides with workflows to create videos faster" />
          <MenuLink to="/learning/docs" title="Docs" desc="Technical reference for developers" />
          <MenuLink to="/learning/blogs" title="Blogs" desc="Explore insights, news, and best practices for AI video" />
        </div>
      </div>
    ),
    Company: (
      <div className="flex gap-12 p-8">
        <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-8">
          <MenuLink to="/company/about" title="About us" desc="Discover Grady's story, mission, and team" />
          <MenuLink to="/company/trust-safety" title="Trust & Safety" desc="Learn how we keep AI video safe, secure, and ethical" />
          <MenuLink to="/company/careers" title="Careers" desc="Join Grady and help transform the way people create video" />
          <MenuLink to="/company/research" title="AI research" desc="Explore breakthroughs driving the future of AI video" />
          <MenuLink to="/company/why-we-build" title="Why we build" desc="We build Grady for camera-shy voices everywhere" />
        </div>
        <div className="w-80">
          <Link to="/company/about" className="block rounded-2xl overflow-hidden relative group cursor-pointer">
            <img src="https://picsum.photos/seed/company/400/300" alt="Company" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white font-medium flex items-center gap-1">
              Free your story <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    )
  };

  return (
    <div className="fixed top-4 left-4 right-4 z-50 flex justify-center">
      <nav 
        className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-7xl shadow-sm relative"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex -space-x-1">
              <div className="w-4 h-4 rounded-full bg-indigo-500 mix-blend-multiply" />
              <div className="w-4 h-4 rounded-full bg-cyan-400 mix-blend-multiply" />
              <div className="w-4 h-4 rounded-full bg-purple-400 mix-blend-multiply" />
            </div>
            <span className="text-xl font-bold tracking-tight">Grady</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {['Platform', 'Business', 'Use cases', 'Learning', 'Pricing', 'Company'].map((item) => (
              item === 'Pricing' || item === 'Business' ? (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item}
                </Link>
              ) : (
                <button
                  key={item}
                  onMouseEnter={() => setActiveMenu(menus[item as keyof typeof menus] ? item : null)}
                  className={clsx(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    activeMenu === item ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  {item}
                </button>
              )
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900">
            <Globe className="w-4 h-4" />
            EN
          </button>
          <Link to="/app" className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
            Sign in <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {activeMenu && menus[activeMenu as keyof typeof menus] && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 pt-4"
            >
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                {menus[activeMenu as keyof typeof menus]}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}

function MenuLink({ to, title, desc }: { to: string, title: string, desc: string }) {
  return (
    <Link to={to} className="block group">
      <h4 className="text-gray-900 font-medium mb-1 group-hover:text-[#00b8ff] transition-colors">{title}</h4>
      <p className="text-sm text-gray-500 leading-snug">{desc}</p>
    </Link>
  );
}
