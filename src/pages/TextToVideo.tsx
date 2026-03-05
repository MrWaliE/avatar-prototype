import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Wand2, 
  Video, 
  Globe, 
  Zap, 
  CheckCircle2, 
  Play, 
  ArrowRight, 
  Sparkles,
  Layers,
  Clock,
  DollarSign,
  MessageSquare,
  Users,
  MonitorPlay,
  ShoppingCart,
  GraduationCap,
  Mail,
  ChevronDown,
  ChevronUp,
  Twitter,
  Youtube,
  Linkedin,
  Instagram
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const TextToVideo = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-cyan-200 selection:text-cyan-900">
      <Navbar />
      {/* Navigation spacer */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-300/20 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered Video Generation</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Turn Text into <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  Stunning Video
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                Type your ideas. Click generate. Get a share-ready video from text faster than you think. No camera, video editing software, or production skills needed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow max-w-md">
                  <input 
                    type="email" 
                    placeholder="Enter your email..." 
                    className="w-full pl-4 pr-32 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent shadow-sm"
                  />
                  <button className="absolute right-2 top-2 bottom-2 bg-slate-900 hover:bg-slate-800 text-white px-6 rounded-lg font-medium transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-4">
                By continuing you agree to our Terms of Service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Editor UI Mockup */}
              <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800">
                <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-xs text-slate-400 font-mono">prompt_editor.sh</div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Enter your prompt to generate a video
                    </label>
                    <div className="relative">
                      <textarea 
                        className="w-full h-32 bg-slate-800 border border-slate-700 rounded-xl p-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none font-mono text-sm"
                        placeholder="Explain video for our new project management software. Start with a professional avatar introducing the main dashboard..."
                        defaultValue="Explain video for our new project management software. Start with a professional avatar introducing the main dashboard..."
                      ></textarea>
                      <div className="absolute bottom-3 right-3 text-xs text-slate-500">
                        124/500 characters
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex space-x-3">
                      <select className="bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                        <option>60s</option>
                        <option>30s</option>
                        <option>15s</option>
                      </select>
                      <select className="bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                        <option>Landscape</option>
                        <option>Portrait</option>
                        <option>Square</option>
                      </select>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 shadow-lg shadow-cyan-500/25">
                      <Wand2 className="w-4 h-4" />
                      <span>Generate</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-1/4 bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center space-x-3"
              >
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Rendering...</p>
                  <p className="text-[10px] text-slate-500">Processing scene 1</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { number: "108M+", label: "Videos generated" },
              { number: "82M+", label: "Avatars generated" },
              { number: "15M+", label: "Videos translated" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</h3>
                <p className="text-slate-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-6">Trusted by millions worldwide to bring their stories to life</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
              {/* Placeholder for logos */}
              <div className="h-8 w-24 bg-slate-300 rounded"></div>
              <div className="h-8 w-32 bg-slate-300 rounded"></div>
              <div className="h-8 w-20 bg-slate-300 rounded"></div>
              <div className="h-8 w-28 bg-slate-300 rounded"></div>
              <div className="h-8 w-24 bg-slate-300 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Scale Production Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Scale Professional Video Production, <br/>
              <span className="text-cyan-600">No Camera Required</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Turn text into engaging video content at speed. Simply input your script, select a lifelike avatar (or your own digital twin), and generate studio-quality AI voiceovers in multiple languages.
            </p>
            <Link to="/app" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-colors">
              Get started for free <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Visual Workflow */}
          <div className="relative max-w-4xl mx-auto mb-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 w-full md:w-1/3 text-center relative z-10">
                <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-slate-800">"Explain video for our new project management software."</p>
              </div>
              
              <div className="hidden md:block flex-grow h-0.5 bg-gradient-to-r from-cyan-200 to-blue-200 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-cyan-400 rounded-full flex items-center justify-center z-10">
                  <ArrowRight className="w-4 h-4 text-cyan-600" />
                </div>
              </div>

              <div className="flex gap-4 w-full md:w-1/2 justify-center relative z-10">
                <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md border border-slate-200">
                  <img src="https://picsum.photos/seed/avatar1/200/200" alt="Avatar 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md border border-slate-200 transform translate-y-4">
                  <img src="https://picsum.photos/seed/avatar2/200/200" alt="Avatar 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="w-24 h-24 rounded-xl overflow-hidden shadow-md border border-slate-200">
                  <img src="https://picsum.photos/seed/avatar3/200/200" alt="Avatar 3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Globe className="w-6 h-6" />, title: "Accessibility", desc: "Create full videos from a single prompt. No video editing experience required. Simply paste your idea or topic." },
              { icon: <Zap className="w-6 h-6" />, title: "Efficiency", desc: "Automate Scene Creation & B-Roll. Transform blog posts, PDFs, or URLs into engaging text to video narratives instantly." },
              { icon: <Layers className="w-6 h-6" />, title: "Variety", desc: "AI-Curated Visuals & Dynamic Storytelling. Move beyond static video templates. The Video Agent curates stock footage." },
              { icon: <DollarSign className="w-6 h-6" />, title: "Cost-effectiveness", desc: "Your Always-On Production Assistant. Produce high-volume social media shorts and marketing assets at a fraction of the cost." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices (Dark Section) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-900/20 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-6">Best Practices for Converting Text to Video</h2>
              <p className="text-lg text-slate-400">
                To get the most out of Grady, combine the speed of the Video Agent with the precision of AI Studio. Use the AI to generate your "first draft" (scenes, B-roll, and script), then refine the output for a professional finish.
              </p>
            </div>
            <Link to="/app" className="inline-flex items-center justify-center px-6 py-3 border border-cyan-500 text-base font-medium rounded-xl text-cyan-400 hover:bg-cyan-950 transition-colors whitespace-nowrap">
              Get started for free <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Steps List */}
            <div className="lg:col-span-4 space-y-4">
              {[
                { title: "Leverage the Video Agent", desc: "Skip the blank page. Use the Video Agent to instantly turn a simple prompt or URL into a complete draft with an auto-generated script and B-roll, getting you 80% of the way there.", active: true },
                { title: "Cast your Avatar & Voice", desc: "Choose a stock avatar or use your own Digital Twin to establish a connection. Pair them with a realistic voice from the library or upload your own audio for a truly authentic delivery.", active: false },
                { title: "Refine in AI Studio", desc: "Drop your draft into the AI Studio timeline to make precise edits. Swap out B-roll for your own brand assets, adjust script pacing, and ensure the final video perfectly matches your vision.", active: false },
                { title: "Localize for Global Impact", desc: "Scale your reach instantly with Video Translation. Automatically dub your final video into 175+ languages while perfectly preserving your avatar's original voice tone and lip-sync.", active: false }
              ].map((step, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all cursor-pointer ${step.active ? 'bg-slate-800 border-cyan-500/50' : 'bg-transparent border-slate-800 hover:bg-slate-800/50'}`}>
                  <h3 className={`text-lg font-bold mb-2 ${step.active ? 'text-white' : 'text-slate-300'}`}>{step.title}</h3>
                  <p className={`text-sm ${step.active ? 'text-slate-300' : 'text-slate-500'}`}>{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Visual Display */}
            <div className="lg:col-span-8">
              <div className="bg-slate-800 rounded-2xl border border-slate-700 p-2 h-[500px] relative overflow-hidden flex items-center justify-center">
                {/* Mockup of the editor */}
                <div className="w-full h-full bg-slate-900 rounded-xl overflow-hidden flex flex-col">
                  {/* Top bar */}
                  <div className="h-12 border-b border-slate-800 flex items-center px-4 justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    </div>
                    <div className="text-xs text-slate-500 font-mono">Q3 Result Overview</div>
                    <div className="w-16"></div>
                  </div>
                  {/* Main content area */}
                  <div className="flex-grow flex p-6 gap-6">
                    {/* Sidebar */}
                    <div className="w-48 flex flex-col gap-4">
                      <div className="h-24 bg-slate-800 rounded-lg border border-slate-700 p-3">
                        <div className="w-full h-2 bg-slate-700 rounded mb-2"></div>
                        <div className="w-3/4 h-2 bg-slate-700 rounded"></div>
                      </div>
                      <div className="h-24 bg-slate-800 rounded-lg border border-cyan-500/50 p-3 relative">
                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-500"></div>
                        <div className="w-full h-2 bg-slate-600 rounded mb-2"></div>
                        <div className="w-1/2 h-2 bg-slate-600 rounded"></div>
                      </div>
                      <div className="h-24 bg-slate-800 rounded-lg border border-slate-700 p-3">
                        <div className="w-full h-2 bg-slate-700 rounded mb-2"></div>
                        <div className="w-5/6 h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                    {/* Canvas */}
                    <div className="flex-grow bg-slate-950 rounded-lg border border-slate-800 relative flex items-center justify-center overflow-hidden">
                      <img src="https://picsum.photos/seed/presentation/800/600" alt="Presentation" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center">
                          <h3 className="text-2xl font-bold text-white mb-2">Q3 Result Overview</h3>
                          <p className="text-cyan-200">Financial Highlights</p>
                        </div>
                      </div>
                      {/* Avatar overlay */}
                      <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full border-4 border-slate-900 overflow-hidden shadow-2xl">
                        <img src="https://picsum.photos/seed/speaker/200/200" alt="Speaker" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Turn Text Scripts into Production-Ready Professional Videos Instantly</h2>
            <p className="text-lg text-slate-600">
              Grady's AI video generator from text automates the production process, turning your script into high-quality videos with consistent avatars, voiceovers, and visuals. No camera or crew required.
            </p>
          </div>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="absolute inset-0 bg-cyan-100 rounded-3xl transform -rotate-3 scale-105 -z-10"></div>
                <img src="https://picsum.photos/seed/voice/800/600" alt="AI Voice" className="rounded-3xl shadow-xl w-full object-cover aspect-video" referrerPolicy="no-referrer" />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-sm">175+ Languages</span>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold mb-4">Ultra-Realistic AI Voice & Translation</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Generate voiceovers that capture emotional nuance, or clone your own voice for authentic narration. Automatically translate and dub content into 175+ languages to reach global markets without re-recording.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Consistent Content at Scale</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Maintain brand consistency across hundreds of videos. Save custom avatars and ready-made templates to generate daily social media content, training modules, or personalized outreach messages in minutes, not days.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-blue-100 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
                <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-xl relative overflow-hidden">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                      <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400" alt="Template 1" className="h-24 w-full object-cover bg-slate-100 rounded-lg mb-3" />
                      <div className="h-4 w-2/3 bg-slate-200 rounded"></div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                      <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=400" alt="Template 2" className="h-24 w-full object-cover bg-slate-100 rounded-lg mb-3" />
                      <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                      <img src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&q=80&w=400" alt="Template 3" className="h-24 w-full object-cover bg-slate-100 rounded-lg mb-3" />
                      <div className="h-4 w-1/2 bg-slate-200 rounded"></div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                      <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=400" alt="Template 4" className="h-24 w-full object-cover bg-slate-100 rounded-lg mb-3" />
                      <div className="h-4 w-4/5 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Brand Templates
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="absolute inset-0 bg-indigo-100 rounded-3xl transform -rotate-2 scale-105 -z-10"></div>
                <img src="https://picsum.photos/seed/broll/800/600" alt="B-Roll" className="rounded-3xl shadow-xl w-full object-cover aspect-video" referrerPolicy="no-referrer" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-indigo-600 ml-1" />
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold mb-4">Generate B-Roll & Visuals</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Stop searching for stock footage. The AI analyzes your text to automatically generate or select relevant B-roll, images, and graphics to enrich your narrative, speeding up your workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Used by 100,000+ teams who value quality, simplicity, and speed</h2>
            <p className="text-lg text-slate-600">
              See how businesses like yours scale content creation and drive growth with the most innovative Text to Video AI platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <MonitorPlay className="w-6 h-6" />, title: "Marketing & Ads", desc: "Create viral short clips for YouTube, TikTok, and Instagram campaigns. Turn product descriptions into video ads and generate dozens of personalized variations from a single script." },
              { icon: <Users className="w-6 h-6" />, title: "Training & Onboarding", desc: "Paste your script or internal guide, choose a professional avatar, and create engaging training videos. Update content easily across every department without re-recording." },
              { icon: <Video className="w-6 h-6" />, title: "YouTube & Social Media Creators", desc: "Convert text to video for tutorials, explainers, and social media content. Export in the right format for every platform, use voice cloning to keep your signature sound." },
              { icon: <ShoppingCart className="w-6 h-6" />, title: "E-Commerce", desc: "Transform static product descriptions into dynamic video shorts. Generate videos optimized for Instagram Reels and TikTok Shop. No video editing experience needed." },
              { icon: <GraduationCap className="w-6 h-6" />, title: "Educators & Course Creators", desc: "Build engaging courses and turn text-heavy lesson plans into video. Select an avatar, create polished explainer content for any LMS platform, and scale creation without stepping in front of a camera." },
              { icon: <Mail className="w-6 h-6" />, title: "Sales & Personalized Outreach", desc: "Clone your voice and avatar, input your prospect's details, and generate high-quality outreach clips at scale. A single prompt can produce dozens of customizable videos." }
            ].map((useCase, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-cyan-300 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-slate-100 text-slate-700 group-hover:bg-cyan-100 group-hover:text-cyan-600 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{useCase.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Create Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">How to Create a Video from Text with Grady</h2>
            <p className="text-lg text-slate-600">
              Use your words to bring your text to life and let the AI text to video generator turn your content into a stunning, professional result.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-100 -z-10"></div>
            
            {[
              { step: "Step 1", title: "Input Your Script", desc: "Start by entering your text or uploading a document. The AI organizes your ideas into scenes." },
              { step: "Step 2", title: "Choose an AI Avatar & Voice", desc: "Select from diverse, lifelike avatars or create your own Digital Twin. Pick a voice that matches your tone." },
              { step: "Step 3", title: "Customize Visuals & Style", desc: "Add images, templates, subtitles, or background music. Animate overlays with each scene." },
              { step: "Step 4", title: "Generate & Share Your Video", desc: "Export your mp4 and share it instantly across your website, social platforms, or learning systems." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-6 mx-auto md:mx-0 ${i === 0 ? 'bg-cyan-500 text-white ring-4 ring-cyan-100' : 'bg-slate-100 text-slate-500'}`}>
                  {i + 1}
                </div>
                <div className={`p-6 rounded-2xl ${i === 0 ? 'bg-cyan-50 border border-cyan-100' : 'bg-transparent'}`}>
                  <div className="text-xs font-bold text-cyan-600 uppercase tracking-wider mb-2">{item.step}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Large Video Placeholder */}
          <div className="bg-slate-900 rounded-3xl aspect-video relative overflow-hidden shadow-2xl border border-slate-800 flex items-center justify-center group cursor-pointer">
            <img src="https://picsum.photos/seed/tutorial/1200/675" alt="Tutorial" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" referrerPolicy="no-referrer" />
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform z-10">
              <Play className="w-8 h-8 text-white ml-2" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 sticky top-24">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions (FAQs)</h2>
              <p className="text-slate-600 mb-8">Everything you need to know about our Text to Video AI generator.</p>
              <div className="hidden md:block w-24 h-1 bg-cyan-500 rounded-full"></div>
            </div>
            
            <div className="md:col-span-8 space-y-4">
              {[
                { q: "What is the Text to Video tool?", a: "It is an AI video generator and text to video ai tool that allows users to create videos from text using AI technology. It's powered by generative AI and advanced ai models that deliver professional results." },
                { q: "Do I need editing skills?", a: "No, the platform is built so anyone can create videos. The AI handles timing, pacing, visuals, and rendering. If you prefer more control, you can edit scenes manually in AI Studio." },
                { q: "Can I use my own voice or avatar?", a: "Yes. You can upload your voice for AI voice cloning or create a custom avatar for a branded or personal presence." },
                { q: "How long does video generation take?", a: "Most videos are ready in a few minutes depending on length and customization." },
                { q: "Can I make videos in multiple languages?", a: "Yes. You can generate content in over 175 languages and translate existing videos instantly." },
                { q: "Are videos suitable for commercial use?", a: "Yes. You can use your videos for marketing, training, social media, advertising, and client projects." }
              ].map((faq, i) => (
                <div 
                  key={i} 
                  className={`border rounded-2xl overflow-hidden transition-colors ${activeFaq === i ? 'bg-white border-cyan-200 shadow-sm' : 'bg-transparent border-slate-200 hover:border-slate-300'}`}
                >
                  <button 
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(i)}
                  >
                    <span className={`font-medium pr-8 ${activeFaq === i ? 'text-cyan-700' : 'text-slate-900'}`}>{faq.q}</span>
                    {activeFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {activeFaq === i && (
                    <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold mb-6">
            Start creating <br/>
            with <span className="text-cyan-600">Grady</span>
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Transform your ideas into professional videos with AI.
          </p>
          <Link to="/app" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/25 transition-all hover:scale-105">
            Get started for free <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex -space-x-1">
                <div className="w-5 h-5 rounded-full bg-indigo-500 mix-blend-screen" />
                <div className="w-5 h-5 rounded-full bg-cyan-400 mix-blend-screen" />
                <div className="w-5 h-5 rounded-full bg-purple-400 mix-blend-screen" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Grady</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-slate-500">Pricing</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-slate-500">Products</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Video Avatar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Talking Photo AI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Video Translator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Localization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LiveAvatar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Video Generator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Avatar Generator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Voice Cloning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Podcast Generator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Text to Video</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Image to Video</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Audio to Video</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lip Sync AI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Studio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Dubbing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-slate-500">Industry</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Agencies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">E-Learning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Localization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sales Outreach</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-slate-500">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-400">
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
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-slate-500">Enterprise</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">For Enterprise</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" /> English
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
};

export default TextToVideo;
