import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  ArrowRight, 
  Play, 
  UploadCloud, 
  Link as LinkIcon, 
  Globe2, 
  Mic2, 
  Zap, 
  VolumeX, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  CheckCircle2,
  Settings,
  Languages
} from 'lucide-react';

const faqs = [
  {
    q: "Does Grady's AI dubbing tool offer the most natural lip sync capabilities?",
    a: "Yes. Grady is built with advanced facial synchronization technology, ensuring lip movements match perfectly with voiceovers. This creates a natural, human-like dubbing experience that works seamlessly across different content formats, from marketing videos to training materials."
  },
  {
    q: "What does Grady's AI dubbing tool do?",
    a: "Grady's voice dubber replaces original audio with AI-generated multilingual voiceovers while preserving tone, style, and lip sync. It allows creators to instantly produce polished, localized videos without complex editing or costly dubbing teams."
  },
  {
    q: "Can Grady handle multiple languages effectively?",
    a: "Grady aligns voice tracks with facial movements using AI-driven animation and timing models. This ensures the dubbed speech matches lip motions naturally, helping viewers focus on the message rather than noticing distracting sync issues."
  },
  {
    q: "Is the voice dubbing human-sounding or robotic?",
    a: "Grady's AI voices sound lifelike, expressive, and tailored for professional use. Unlike robotic text-to-speech tools, it delivers warm and natural audio, making videos feel authentic for learning, marketing, or storytelling."
  },
  {
    q: "Can I choose different voices or accents when dubbing?",
    a: "Yes. Grady provides a wide library of voices across genders, tones, and regional accents. This flexibility helps you match your video's branding, audience expectations, and cultural context for maximum impact."
  },
  {
    q: "Do I need video editing skills to use Grady AI dubbing?",
    a: "No editing skills are required. Simply upload your video, choose a language and voice, and Grady handles everything automatically. The platform's intuitive design makes dubbing accessible even for beginners."
  },
  {
    q: "Will Grady make language dubbing easy for film and TV?",
    a: "Grady makes language dubbing easier for film and TV. It offers smooth voice adaptation in over 175 languages and dialects. This helps with global distribution while keeping the original feel and emotional impact."
  }
];

const tools = [
  "Free AI Video Generator", "Video Translator", "Text to Video AI", "Audio to Video AI", "AI Lip Sync",
  "Faceswap AI", "AI Voice Generator", "AI UGC Ads", "Url to Video", "Script to Video",
  "AI Reel Generator", "AI Avatar Generator", "Image to Video AI", "Voice Cloning", "YouTube Video Translator",
  "Video Avatar", "AI YouTube Video Maker", "AI TikTok Video Generator", "AI Caption Generator", "Add Text to Video",
  "AI Subtitle Generator", "Video Script Generator", "Text to Speech Avatar", "Add Photo to Video", "AI Video Compressor"
];

export default function AIDubbing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-rose-500/30">
      <Navbar />
      
      <main className="pt-32 pb-0">
        {/* Hero Section - Rose/Orange Theme */}
        <section className="px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-rose-500/20 to-orange-500/10 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-fuchsia-500/20 to-rose-500/10 blur-[100px]" />
          </div>

          <div className="flex-1 text-left z-10">
            <div className="text-sm text-stone-500 mb-6 flex items-center gap-2 font-medium">
              <Link to="/" className="hover:text-stone-900">Home</Link>
              <span>›</span>
              <span className="text-stone-400">AI Translator</span>
              <span>›</span>
              <span className="text-rose-600">Voice Dubbing</span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              AI Video Dubbing<br/>
              in <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500">175+ Languages</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-stone-600 mb-10 leading-relaxed max-w-xl"
            >
              Don't just dub your content—truly localize it. Our AI Video Translator clones your natural speaking voice and perfectly resyncs your lip movements to the new language. Instantly adapt training materials, marketing ads, and YouTube content for 175+ languages without re-filming.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <div className="flex items-center gap-3 px-6 py-4 rounded-full border border-stone-200 bg-white shadow-sm cursor-pointer hover:bg-stone-50 transition-colors">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                <span className="text-sm font-medium text-stone-700">Sign in with Google</span>
              </div>
              <Link to="/app" className="bg-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-700 transition-colors shadow-lg shadow-rose-500/25 flex items-center justify-center gap-2">
                Get Started for Free
              </Link>
            </motion.div>
            <p className="text-xs text-stone-400">By continuing you agree to Grady's terms</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 w-full relative z-10"
          >
            {/* Translation Box UI */}
            <div className="bg-white rounded-[2rem] shadow-2xl border border-stone-200/50 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-rose-100 to-transparent rounded-bl-full opacity-50 pointer-events-none"></div>
              
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Languages className="w-6 h-6 text-rose-600" /> Translate video
              </h3>
              
              <div className="border-2 border-dashed border-stone-200 rounded-2xl bg-stone-50 p-12 text-center mb-6 hover:border-rose-300 hover:bg-rose-50/50 transition-colors cursor-pointer group">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-8 h-8 text-rose-500" />
                </div>
                <p className="text-stone-600 font-medium">Upload or drag and drop file here</p>
                <p className="text-stone-400 text-sm mt-2">MP4, MOV, WEBM up to 500MB</p>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-stone-500 mb-2">Or paste a YouTube link:</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LinkIcon className="w-5 h-5 text-stone-400" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="https://www.youtube.com/watch?v=..." 
                    className="block w-full pl-10 pr-3 py-3 border border-stone-200 rounded-xl bg-stone-50 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-shadow outline-none text-sm"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-stone-500">Translate to:</span>
                  <div className="flex items-center gap-2 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 cursor-pointer hover:bg-stone-200 transition-colors">
                    <span className="text-lg">🇺🇸</span>
                    <span className="text-sm font-medium">English</span>
                    <ChevronDown className="w-4 h-4 text-stone-500" />
                  </div>
                </div>
                <button className="bg-rose-600 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-rose-700 transition-colors flex items-center gap-2 shadow-md shadow-rose-500/20">
                  Translate video <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section - Dark Mode */}
        <section className="py-16 bg-stone-900 text-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { label: "Videos generated", value: "108,394,266" },
                { label: "Avatars generated", value: "82,949,161" },
                { label: "Videos translated", value: "15,090,763" }
              ].map((stat, i) => (
                <div key={i} className="bg-stone-800/50 border border-stone-700 rounded-3xl p-8 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white relative z-10">{stat.value}</div>
                  <div className="text-sm text-stone-400 font-medium relative z-10">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center mb-8">
              <p className="text-xs text-stone-500 font-medium uppercase tracking-widest">The world's leading companies trust Grady</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Workday_logo.svg" alt="Workday" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-logo.svg" alt="Coursera" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Miro_logo.svg" alt="Miro" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg" alt="Intel" className="h-8" />
            </div>
          </div>
        </section>

        {/* Why you should use Grady's AI dubbing tool - Grid Layout */}
        <section className="py-32 bg-stone-50 px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight sticky top-32">
                Why you should use Grady's <span className="text-rose-600">AI dubbing tool</span>
              </h2>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Zap className="w-6 h-6 text-orange-600" />,
                  bg: "bg-orange-50",
                  border: "border-orange-100",
                  title: "Fast, simple, and cost-effective",
                  desc: "Need AI dubbing to create voiceovers and translate videos? Traditional dubbing requires studios, actors, and editors, making it costly and slow. With Grady, upload your video, choose from 175+ languages and dialects, and let AI generate professional dubs in minutes."
                },
                {
                  icon: <Mic2 className="w-6 h-6 text-rose-600" />,
                  bg: "bg-rose-50",
                  border: "border-rose-100",
                  title: "Preserve your unique voice",
                  desc: "Generic text-to-speech flattens personality. Grady's AI voice cloning captures your tone, style, and nuances, delivering audio that feels authentically you. Whether for marketing, training, or storytelling, your brand's voice stays consistent across every language."
                },
                {
                  icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />,
                  bg: "bg-emerald-50",
                  border: "border-emerald-100",
                  title: "Seamless lip-sync accuracy",
                  desc: "Nothing breaks immersion like off-beat dubbing. Grady's AI aligns voiceovers precisely to speakers' lip movements with advanced timing models. The result is smooth, natural synchronization that keeps viewers engaged."
                },
                {
                  icon: <Globe2 className="w-6 h-6 text-fuchsia-600" />,
                  bg: "bg-fuchsia-50",
                  border: "border-fuchsia-100",
                  title: "Scale your global reach",
                  desc: "Voice dubbing expands discoverability, watch time, and engagement. Grady automates high-volume localization so enterprises and creators can quickly translate entire libraries, attract international audiences, and accelerate growth."
                }
              ].map((feature, i) => (
                <div key={i} className={`${feature.bg} ${feature.border} border rounded-3xl p-8 hover:shadow-lg transition-shadow`}>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-stone-900">{feature.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video and Audio Dubbing - Split Layout with Overlap */}
        <section className="py-32 bg-white px-8 border-y border-stone-200 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                Video and Audio<br/>Dubbing
              </h2>
              <div className="space-y-6 text-lg text-stone-600">
                <p>
                  Grady offers two dubbing engines: <strong className="text-stone-900">Speed</strong> and <strong className="text-stone-900">Precision</strong>. If you want context-aware translation with highly natural lip-sync and better gender detection, use the <strong className="text-stone-900">Precision</strong> model. If you want fast translations at scale, use the <strong className="text-stone-900">Speed</strong> engine.
                </p>
                <p>
                  You can also use audio dubbing to translate only the audio of a video—quickly and without applying lip-sync—for example, if there's no face in your video.
                </p>
              </div>
              <button className="mt-10 bg-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-700 transition-colors shadow-lg shadow-rose-500/25 flex items-center gap-2">
                Get started for free <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-rose-100 rounded-[3rem] transform rotate-3 scale-105"></div>
              <div className="bg-stone-900 rounded-[2.5rem] p-4 relative shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
                
                <div className="flex gap-4 relative z-10">
                  <div className="w-1/2 rounded-2xl overflow-hidden aspect-[3/4] relative border border-white/10">
                    <img src="https://picsum.photos/seed/dubbing1/400/533" alt="Speaker 1" className="w-full h-full object-cover" />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🇨🇳</span>
                        <span className="text-sm font-bold text-stone-900">Chinese</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2 opacity-50">
                        <span className="text-lg">🇪🇸</span>
                        <span className="text-sm font-medium text-stone-900">Spanish</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2 opacity-50">
                        <span className="text-lg">🇩🇪</span>
                        <span className="text-sm font-medium text-stone-900">German</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2 opacity-50">
                        <span className="text-lg">🇫🇷</span>
                        <span className="text-sm font-medium text-stone-900">French</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2 opacity-50">
                        <span className="text-lg">🇯🇵</span>
                        <span className="text-sm font-medium text-stone-900">Japanese</span>
                      </div>
                      <div className="flex items-center gap-2 text-rose-600 font-bold text-sm mt-2 pt-2 border-t border-stone-200">
                        <Globe2 className="w-4 h-4" /> 170+
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 rounded-2xl overflow-hidden aspect-[3/4] relative border border-white/10 mt-8">
                    <img src="https://picsum.photos/seed/dubbing2/400/533" alt="Speaker 2" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex items-end p-6">
                      <div className="flex items-center gap-2 text-white">
                        <VolumeX className="w-5 h-5" />
                        <span className="font-medium">Audio only mode</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Clean Accordion */}
        <section className="py-32 bg-stone-50 px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight sticky top-32">
                Have questions?<br/>We have answers
              </h2>
            </div>
            
            <div className="lg:w-2/3 space-y-4">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden transition-all duration-300 hover:border-rose-200 hover:shadow-md"
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-bold text-lg text-stone-900 pr-8">{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === i ? 'bg-rose-100 text-rose-600' : 'bg-stone-100 text-stone-400'}`}>
                      {openFaq === i ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-8 pb-6 text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore More Tools - Grid */}
        <section className="py-32 bg-white px-8 border-t border-stone-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Explore more <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">AI powered</span> tools
              </h2>
              <p className="text-stone-500">Bring any photo to life with hyper-realistic voice and movement using Avatar IV.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {tools.map((tool, i) => (
                <Link 
                  key={i} 
                  to={`/platform/${tool.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center justify-between p-4 rounded-xl border border-stone-200 hover:border-rose-300 hover:bg-rose-50/50 hover:shadow-sm transition-all group"
                >
                  <span className="font-semibold text-stone-800 text-sm">{tool}</span>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-rose-600 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA - Rose Gradient Theme */}
        <section className="py-32 px-8 relative overflow-hidden text-center bg-stone-900">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-rose-500/30 via-fuchsia-500/30 to-orange-500/30 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Start creating<br/>videos with AI
            </h2>
            <p className="text-xl text-rose-100 mb-10">
              See how businesses like yours scale content creation and drive growth with the most innovative AI video platform.
            </p>
            <button className="bg-rose-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-600 transition-colors shadow-lg shadow-rose-500/20">
              Book a meeting
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex -space-x-1">
                <div className="w-5 h-5 rounded-full bg-rose-500 mix-blend-screen" />
                <div className="w-5 h-5 rounded-full bg-orange-400 mix-blend-screen" />
                <div className="w-5 h-5 rounded-full bg-fuchsia-400 mix-blend-screen" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Grady</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-stone-500">Pricing</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-stone-500">Products</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><Link to="/platform/video-avatar" className="hover:text-white transition-colors">Video Avatar</Link></li>
              <li><Link to="/platform/photo-avatar" className="hover:text-white transition-colors">Talking Photo AI</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              <li><Link to="/platform/video-translator" className="hover:text-white transition-colors">Video Translator</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Localization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LiveAvatar</a></li>
              <li><Link to="/platform/ai-avatar-generator" className="hover:text-white transition-colors">AI Avatar Generator</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Voice Cloning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Podcast Generator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Text to Video</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Image to Video</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Audio to Video</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lip Sync AI</a></li>
              <li><Link to="/studio" className="hover:text-white transition-colors">AI Studio</Link></li>
              <li><Link to="/platform/ai-dubbing" className="hover:text-white transition-colors">AI Dubbing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-stone-500">Industry</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors">Agencies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">E-Learning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Localization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sales Outreach</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-stone-500">Resources</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customers Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How-To Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Glossary</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-stone-500">Enterprise</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors">For Enterprise</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-400">
          <div className="flex items-center gap-2">
            <Globe2 className="w-4 h-4" /> English
          </div>
          <p>© 2025 Grady • Terms of Service</p>
          <div className="flex gap-4">
            <Twitter className="w-4 h-4" />
            <Youtube className="w-4 h-4" />
            <Linkedin className="w-4 h-4" />
            <Instagram className="w-4 h-4" />
          </div>
        </div>
      </footer>
    </div>
  );
}
