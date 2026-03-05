import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#00b8ff]/30">
      <Navbar />
      <Hero />
    </div>
  );
}

function Hero() {
  return (
    <main className="pt-40 pb-20 px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-screen">
      {/* Left Content */}
      <div className="flex-1 max-w-2xl z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-[80px] font-bold tracking-tight leading-[1.1] mb-6 text-[#00b8ff]"
        >
          AI Video Generator
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl"
        >
          Fast, simple, and incredibly powerful. Start with a text, image, or audio clip. Then, our AI video generator creates the entire video for you, complete with voiceovers, translations, and styles that match your brand.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 max-w-md"
        >
          <div className="flex items-center gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
              <div className="w-6 h-6 bg-orange-800 text-white rounded-full flex items-center justify-center text-xs">N</div>
              <div className="flex flex-col items-start leading-tight">
                <span>Sign in as Net</span>
                <span className="text-xs text-gray-500 font-normal">netfishions@gmail.com</span>
              </div>
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5 ml-auto" alt="Google" />
            </button>
            <span className="text-sm text-gray-400 font-medium">Or</span>
            <input 
              type="email" 
              placeholder="Enter your email..." 
              className="flex-1 bg-gray-100 border-transparent rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-gray-300 focus:ring-2 focus:ring-[#00b8ff]/20 outline-none transition-all"
            />
          </div>
          
          <Link to="/app" className="block w-full bg-[#00b8ff] text-white text-center py-4 rounded-xl font-semibold text-lg hover:bg-[#00a0e0] transition-colors shadow-lg shadow-[#00b8ff]/20">
            Get Started for Free
          </Link>
          
          <p className="text-xs text-center text-gray-400">
            By continuing you agree to <a href="#" className="underline hover:text-gray-600">Grady's terms</a>
          </p>
        </motion.div>
      </div>

      {/* Right Content - 3D Cube Approximation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex-1 relative w-full max-w-lg aspect-square"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200/40 via-purple-200/40 to-emerald-200/40 rounded-[3rem] transform rotate-12 blur-3xl" />
        
        <div className="relative w-full h-full transform -rotate-12 transition-transform duration-700 hover:rotate-0">
          {/* Top face */}
          <div className="absolute top-0 right-0 w-[70%] h-[60%] rounded-3xl overflow-hidden border-4 border-white shadow-2xl z-20 transform translate-x-4 -translate-y-4">
            <img src="https://picsum.photos/seed/avatar1/600/400" alt="Avatar 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          {/* Bottom left face */}
          <div className="absolute bottom-0 left-0 w-[65%] h-[55%] rounded-3xl overflow-hidden border-4 border-white shadow-2xl z-30 transform -translate-x-4 translate-y-4">
            <img src="https://picsum.photos/seed/avatar2/500/500" alt="Avatar 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          {/* Back face */}
          <div className="absolute top-1/4 left-0 w-[50%] h-[50%] rounded-3xl overflow-hidden border-4 border-white shadow-xl z-10 transform -translate-x-8">
            <img src="https://picsum.photos/seed/avatar3/400/400" alt="Avatar 3" className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.div>
    </main>
  );
}

