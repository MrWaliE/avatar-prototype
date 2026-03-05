import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Play, Image as ImageIcon, Upload, Wand2, ArrowRight, Globe, Mic, MonitorPlay, Code, Users, Zap, CheckCircle2, Star } from 'lucide-react';

export default function PhotoAvatar() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#00b8ff]/30">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-[80vh]">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-[#00b8ff] text-sm font-semibold mb-6"
            >
              <ImageIcon className="w-4 h-4" />
              <span>AI Photo Avatar</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Bring any <span className="text-[#00b8ff]">photo</span> to life with AI
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl"
            >
              Upload a single portrait photo and type your script. Our AI will animate the face with perfect lip-sync and natural expressions to create engaging talking photos.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link to="/app" className="w-full sm:w-auto bg-[#00b8ff] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#00a0e0] transition-colors shadow-lg shadow-[#00b8ff]/20 flex items-center justify-center gap-2">
                Create Photo Avatar
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>
          </div>

          {/* Right Content - Video Player Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex-1 w-full max-w-xl relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#00b8ff]/20 to-purple-500/20 rounded-[2.5rem] blur-2xl -z-10" />
            <div className="bg-white rounded-3xl p-2 shadow-2xl border border-gray-100 relative overflow-hidden group">
              <img 
                src="https://picsum.photos/seed/photo-avatar-demo/800/1000" 
                alt="AI Photo Avatar Demo" 
                className="w-full aspect-[4/5] object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors cursor-pointer">
                <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-[#00b8ff] ml-1" />
                </div>
              </div>
              
              {/* Floating UI Elements */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg flex items-center gap-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <div className="w-10 h-10 bg-[#00b8ff]/10 rounded-full flex items-center justify-center">
                  <ImageIcon className="w-5 h-5 text-[#00b8ff]" />
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00b8ff] w-1/3 rounded-full" />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-600">0:08 / 0:15</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* How it works section */}
        <section className="py-24 bg-gray-50 mt-12">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">Create your custom AI photo avatar in three simple steps.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Upload className="w-8 h-8" />,
                  title: "1. Upload Photo",
                  desc: "Upload a clear, front-facing portrait photo. No video recording required."
                },
                {
                  icon: <Mic className="w-8 h-8" />,
                  title: "2. Add Audio",
                  desc: "Type your script or upload an audio file. Choose from 120+ AI voices or clone your own."
                },
                {
                  icon: <Wand2 className="w-8 h-8" />,
                  title: "3. Generate",
                  desc: "Our AI animates the photo with perfect lip-sync and natural head movements."
                }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
                >
                  <div className="w-16 h-16 bg-blue-50 text-[#00b8ff] rounded-2xl flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful features for photo avatars</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">Everything you need to create stunning talking photos for any use case.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: "120+ Languages",
                  desc: "Make your photo speak to a global audience with over 120 languages and accents."
                },
                {
                  icon: <Mic className="w-6 h-6" />,
                  title: "Voice Cloning",
                  desc: "Upload a short audio sample to clone your exact voice and pair it with your photo."
                },
                {
                  icon: <MonitorPlay className="w-6 h-6" />,
                  title: "High Resolution",
                  desc: "Generate crystal-clear talking photos in high resolution for any platform."
                },
                {
                  icon: <Code className="w-6 h-6" />,
                  title: "API Access",
                  desc: "Integrate photo avatar generation directly into your own apps with our API."
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Historical Figures",
                  desc: "Bring historical figures or fictional characters to life from a single image."
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Fast Generation",
                  desc: "Get your talking photos rendered in seconds. Perfect for quick content creation."
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-gray-100 hover:border-[#00b8ff]/30 hover:shadow-lg hover:shadow-[#00b8ff]/5 transition-all group"
                >
                  <div className="w-12 h-12 bg-gray-50 text-gray-900 group-hover:bg-[#00b8ff] group-hover:text-white rounded-xl flex items-center justify-center mb-6 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Endless <span className="text-[#00b8ff]">possibilities</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  From engaging social media content to interactive educational materials, photo avatars offer a unique way to connect.
                </p>
                
                <div className="space-y-6">
                  {[
                    "Social Media Content Creation",
                    "Interactive E-Learning Modules",
                    "Virtual Customer Assistants",
                    "Entertainment & Storytelling"
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#00b8ff]/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-[#00b8ff]" />
                      </div>
                      <span className="text-lg font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#00b8ff]/20 to-purple-500/20 rounded-[2.5rem] blur-2xl -z-10" />
                <div className="bg-gray-800 border border-gray-700 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-8">
                    <img src="https://picsum.photos/seed/user2/100/100" alt="User" className="w-16 h-16 rounded-full object-cover border-2 border-gray-600" referrerPolicy="no-referrer" />
                    <div>
                      <h4 className="text-xl font-bold">David Chen</h4>
                      <p className="text-[#00b8ff]">Content Creator</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg italic leading-relaxed">
                    "Photo avatars have completely changed my content strategy. I can create engaging videos just by uploading a picture and typing a script. It's incredibly fast and the results are surprisingly realistic."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-[#00b8ff]/5 to-transparent -z-10 blur-3xl" />
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to animate your photos?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of creators who are bringing their images to life with AI photo avatars.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/app" className="w-full sm:w-auto bg-[#00b8ff] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#00a0e0] transition-colors shadow-lg shadow-[#00b8ff]/20">
                Start Creating for Free
              </Link>
              <button className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#00b8ff] rounded-lg flex items-center justify-center">
              <Wand2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">Grady Clone</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Grady Clone. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-[#00b8ff] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#00b8ff] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#00b8ff] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
