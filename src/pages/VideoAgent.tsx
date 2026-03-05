import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  ArrowRight, 
  Play, 
  ChevronDown, 
  Globe, 
  Youtube, 
  Instagram, 
  Twitter, 
  Linkedin,
  Sparkles,
  LayoutTemplate,
  Edit3,
  BookOpen,
  Palette,
  MessageSquare,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function VideoAgent() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#00b8ff]/30">
      <Navbar />
      
      <main className="pt-32 pb-0">
        {/* Hero Section */}
        <section className="px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 mb-24 relative">
          {/* Background Blobs */}
          <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#00b8ff]/20 to-[#d8b4e2]/30 blur-[100px]" />
            <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#00b8ff]/10 to-transparent blur-[80px]" />
          </div>

          <div className="flex-1 max-w-2xl z-10">
            <div className="text-sm text-gray-500 mb-6 flex items-center gap-2 font-medium">
              <Link to="/" className="hover:text-gray-900">Home</Link>
              <span>›</span>
              <span className="text-[#00b8ff]">AI Agent</span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Transform any<br/>
              idea into a<br/>
              <span className="text-[#00b8ff]">compelling video</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl"
            >
              Turn ideas into production-grade video with full creative control at every step.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-4 max-w-md"
            >
              <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-full p-1 pl-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700 border-r border-gray-200 pr-4">
                  <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold">G</div>
                  Sign in as Net
                </div>
                <input type="email" placeholder="Enter your email..." className="flex-1 outline-none text-sm bg-transparent" />
              </div>
              <button className="w-full bg-[#00b8ff] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#00a3e0] transition-colors">
                Get Started for Free
              </button>
              <p className="text-xs text-center text-gray-400">
                By continuing you agree to <a href="#" className="underline">Grady's terms</a>
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 w-full max-w-xl relative z-10"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00b8ff] to-purple-500 flex items-center justify-center shrink-0 mt-1">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Enter your prompt and we will generate a video for you</h3>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-4 mb-4 border border-gray-100">
                <textarea 
                  className="w-full h-32 bg-transparent resize-none outline-none text-gray-700 placeholder:text-gray-400"
                  placeholder="Explain video for our new project management software..."
                ></textarea>
                <div className="text-right text-xs text-gray-400 mt-2">0/2000 characters</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium transition-colors">
                    60s <ChevronDown className="w-3 h-3" />
                  </button>
                  <button className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium transition-colors">
                    Landscape <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
                <button className="bg-[#00b8ff] text-white px-5 py-2 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-[#00a3e0] transition-colors">
                  Generate video <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { label: "Videos generated", value: "108,380,344" },
                { label: "Avatars generated", value: "82,948,193" },
                { label: "Videos translated", value: "15,086,247" }
              ].map((stat, i) => (
                <div key={i} className="bg-[#111] text-white p-8 rounded-3xl text-center shadow-xl">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center mb-8">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">The world's leading companies trust Grady</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Workday_logo.svg" alt="Workday" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg" alt="Ford" className="h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Trivago_logo.svg" alt="Trivago" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/JPMorgan_Chase_logo.svg" alt="JPMorgan" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Autodesk_Logo.svg" alt="Autodesk" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Miro_logo.svg" alt="Miro" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg" alt="Intel" className="h-8" />
            </div>
          </div>
        </section>

        {/* All-in-one Video Maker Section */}
        <section className="py-32 bg-white px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 border border-gray-100 mb-6">
                <Sparkles className="w-5 h-5 text-gray-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl mx-auto leading-tight">
                Tell any story with the all-in-one AI video maker
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Give your team the full power of Grady with privacy, governance, and security built in. Scale your workspace easily with flexible seats, credits, and admin controls.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-24">
              {[
                { icon: <LayoutTemplate className="w-4 h-4" />, label: "Blueprint Creation", active: true },
                { icon: <Edit3 className="w-4 h-4" />, label: "Editability", active: false },
                { icon: <BookOpen className="w-4 h-4" />, label: "Storytelling", active: false },
                { icon: <Palette className="w-4 h-4" />, label: "Brand", active: false },
                { icon: <MessageSquare className="w-4 h-4" />, label: "Conversational", active: false }
              ].map((tab, i) => (
                <button 
                  key={i} 
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                    tab.active 
                      ? 'bg-gray-900 text-white shadow-lg' 
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>

            {/* Feature Blocks */}
            <div className="space-y-32">
              {/* Blueprint Creation */}
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 max-w-xl">
                  <div className="flex items-center gap-2 text-[#00b8ff] font-bold mb-4">
                    <LayoutTemplate className="w-5 h-5" /> Blueprint Creation
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">See Your Video Before It's Made</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Create complete videos from a script using text to video AI. Our AI video generator handles editing end-to-end and produces high-quality 1080p or 4K videos with voiceovers, visuals, and AI avatars so you can create explainers, sales, onboarding, or YouTube content faster in multiple voices, languages, and styles.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {['Preview before you render', 'Scene-by-scene creative breakdown', 'Refine through conversation'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-[#00b8ff]" /> {item}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-[#00b8ff] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#00a3e0] transition-colors">
                    Get Started For Free <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 w-full">
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 relative aspect-[4/3]">
                    <img src="https://picsum.photos/seed/blueprint/800/600" alt="Blueprint Creation" className="w-full h-full object-cover" />
                    {/* Floating UI Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl w-64 border border-white/50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-bold text-sm">Chat</div>
                          <div className="text-xs text-gray-500">Chat and plan your video.</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#00b8ff]/10 rounded-full flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-[#00b8ff]" />
                        </div>
                        <div>
                          <div className="font-bold text-sm">Generate</div>
                          <div className="text-xs text-gray-500">Auto-generate your video.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Editability */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                <div className="flex-1 max-w-xl">
                  <div className="flex items-center gap-2 text-[#00b8ff] font-bold mb-4">
                    <Edit3 className="w-5 h-5" /> Editability
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">Edit Everything After Rendering</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Every motion element is editable after generation—text position, color, timing, layout. Make changes directly in AI Studio without regenerating the entire video. Small tweaks take seconds, not hours.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {['Edit without re-rendering', 'Changes in seconds', 'Click any element to modify'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-[#00b8ff]" /> {item}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-[#00b8ff] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#00a3e0] transition-colors">
                    Get Started For Free <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 w-full">
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 relative aspect-[4/3]">
                    <img src="https://picsum.photos/seed/editability/800/600" alt="Editability" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Storytelling */}
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 max-w-xl">
                  <div className="flex items-center gap-2 text-[#00b8ff] font-bold mb-4">
                    <BookOpen className="w-5 h-5" /> Storytelling
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">Motion Graphics + A-Roll + B-Roll in One Video</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Video Agent doesn't just generate talking heads. It produces motion graphics, visual overlays, explanatory animations, and B-roll footage as part of a cohesive narrative. Every element works together to tell your story.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {['AI-generated presenter footage', 'Built-in motion graphics', 'Contextual B-roll included'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-[#00b8ff]" /> {item}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-[#00b8ff] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#00a3e0] transition-colors">
                    Get Started For Free <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 w-full">
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-[#e8f8ff] relative aspect-[4/3] p-8 flex items-center justify-center">
                     <img src="https://picsum.photos/seed/story/600/500" alt="Storytelling UI" className="rounded-2xl shadow-lg w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Brand */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                <div className="flex-1 max-w-xl">
                  <div className="flex items-center gap-2 text-[#00b8ff] font-bold mb-4">
                    <Palette className="w-5 h-5" /> Brand
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">Your Brand, Automatically Applied</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Define your visual identity once and Video Agent maintains it across every motion graphic, text overlay, and color choice. Consistent typography, on-brand color systems, and unified styling—without manual enforcement.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {['Set colors once', 'Typography applied everywhere', 'Consistent visual style'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-[#00b8ff]" /> {item}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-[#00b8ff] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#00a3e0] transition-colors">
                    Get Started For Free <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 w-full">
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-[#f0fdf4] relative aspect-[4/3] p-8 flex items-center justify-center">
                    <img src="https://picsum.photos/seed/brand/600/500" alt="Brand Kit UI" className="rounded-2xl shadow-lg w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Conversational */}
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 max-w-xl">
                  <div className="flex items-center gap-2 text-[#00b8ff] font-bold mb-4">
                    <MessageSquare className="w-5 h-5" /> Conversational
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">Direct Your Video Like a Creative Partner</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Create reaction videos, reviews, and talking avatars that look and sound natural. We help you produce authentic-feeling UGC that connects quickly with viewers, without relying on real video shoots, with optional AI face swap for fast personalization at scale. Ideal for creators, brands, and marketers who need relatable content at scale.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {['Plain English feedback', 'Rapid iteration', 'Pinpoint specific changes'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-[#00b8ff]" /> {item}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-[#00b8ff] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#00a3e0] transition-colors">
                    Get Started For Free <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 w-full">
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-[#fffbeb] relative aspect-[4/3] p-8 flex items-center justify-center">
                    <img src="https://picsum.photos/seed/conversational/600/500" alt="Conversational UI" className="rounded-2xl shadow-lg w-full h-full object-cover" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Meet Video Agent Section */}
        <section className="py-24 bg-gray-50 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Meet Grady's<br/>
                <span className="text-[#00b8ff]">Video Agent</span>
              </h2>
              <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                <p className="text-lg text-gray-600 max-w-xl">
                  Not a tool. Not a copilot. It's a creative agent doing the work for you.
                </p>
                <div className="flex gap-4">
                  <button className="w-12 h-12 rounded-full bg-[#00b8ff] text-white flex items-center justify-center hover:bg-[#00a3e0] transition-colors rotate-180">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-[#00b8ff] text-white flex items-center justify-center hover:bg-[#00a3e0] transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
              {[
                {
                  title: "The script is written",
                  desc: "Your idea is turned into a clear, compelling story structured for impact.",
                  content: (
                    <div className="bg-[#00b8ff] text-white p-6 rounded-2xl text-sm leading-relaxed shadow-inner">
                      In a bustling city, a young artist named Mia discovers an old, dusty camera in her grandmother's attic. Intrigued, she decides to document her daily life through a series of TikTok videos. Each clip showcases her vibrant neighborhood, quirky cafes, and the colorful street art that adorns the walls. As she shares her journey, she invites viewers...
                    </div>
                  )
                },
                {
                  title: "Images are selected",
                  desc: "Every scene is paired with visuals chosen to match tone and message.",
                  content: (
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                      <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider text-center">Screen 1</div>
                      <img src="https://picsum.photos/seed/scene1/400/300" alt="Scene 1" className="w-full h-48 object-cover rounded-xl" />
                    </div>
                  )
                },
                {
                  title: "Voiceover is added",
                  desc: "The script is brought to life with natural, emotion-aware narration.",
                  content: (
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xs">M</div>
                        <div className="flex-1">
                          <div className="text-xs font-bold">Mia</div>
                          <div className="h-4 bg-gray-100 rounded-full mt-1 overflow-hidden flex items-center px-1">
                            <div className="h-1 w-full bg-gradient-to-r from-[#00b8ff] to-purple-400 rounded-full opacity-50" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)' }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3 ml-8">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">G</div>
                        <div className="flex-1">
                          <div className="text-xs font-bold">Grandmother</div>
                          <div className="h-4 bg-gray-100 rounded-full mt-1 overflow-hidden flex items-center px-1">
                            <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-50" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  title: "Edits and transitions",
                  desc: "Pacing, cuts, and effects are designed to feel polished and dynamic.",
                  content: (
                    <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100 relative">
                      <img src="https://picsum.photos/seed/edit/400/500" alt="Edit" className="w-full h-64 object-cover rounded-xl" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                        <Play className="w-5 h-5 text-gray-900 ml-1" />
                      </div>
                    </div>
                  )
                }
              ].map((step, i) => (
                <div key={i} className="min-w-[320px] md:min-w-[400px] bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 snap-start flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm mb-8">{step.desc}</p>
                  <div className="mt-auto bg-gray-50 rounded-3xl p-6 border border-gray-100 flex-1 flex flex-col justify-center">
                    {step.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-24 bg-white px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Partner With Grady</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">From the community</h2>
                <p className="text-lg text-gray-600">Discover new ideas, and make any video your own by swapping the script, avatar, and visuals.</p>
              </div>
              <button className="bg-[#00b8ff] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#00a3e0] transition-colors shrink-0">
                Get Started For Free <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[...Array(18)].map((_, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden relative group cursor-pointer ${i === 11 ? 'col-span-2 row-span-2' : ''}`}>
                  <img src={`https://picsum.photos/seed/comm${i}/400/${i % 2 === 0 ? '600' : '400'}`} alt={`Community ${i}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                      <Play className="w-5 h-5 text-gray-900 ml-1" />
                    </div>
                  </div>
                  {i === 11 && (
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="font-bold text-xl mb-1">Home</div>
                      <div className="text-sm opacity-80">Grow something new today</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ethical AI Section */}
        <section className="py-24 bg-gray-50 px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ethical AI video maker, built<br/>to protect your data
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-[#00b8ff] mb-8 shadow-sm">
              <ShieldCheck className="w-4 h-4" /> Fast, secure and ethical by design
            </div>
            <p className="text-gray-600 leading-relaxed mb-16 max-w-3xl mx-auto">
              We believe ethical AI means putting user safety and data protection first. We embed privacy, transparency, and accountability into our technology and policies, ensuring your data is safeguarded at every step. That's why our infrastructure is certified to meet global security and compliance standards. By designing AI that respects user rights and prevents misuse, we make visual storytelling accessible, secure, and ethical for all.
            </p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { icon: "🛡️", label: "GDPR" },
                { icon: "🔒", label: "SOC 2 TYPE II" },
                { icon: "👁️", label: "CCPA" },
                { icon: "⚖️", label: "AI ACT" },
                { icon: "🌐", label: "DPF" }
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-white rounded-full border border-gray-200 flex items-center justify-center text-2xl shadow-sm">
                    {badge.icon}
                  </div>
                  <span className="text-xs font-bold text-gray-900">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3 sticky top-32">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Have questions?<br/>We have answers.
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              {[
                {
                  q: "What is an AI avatar?",
                  a: "An AI avatar is a hyper-realistic digital representation of a human created using artificial intelligence. These avatars are capable of delivering human-like speech, facial expressions, and gestures, making them ideal for scalable video creation, virtual communication, and digital content. At Grady, our AI avatars are built with consented data from real actors and talent. We ensure ethical AI practices by compensating actors for each video generated with their likeness, combining cutting-edge generative AI with responsible content creation."
                },
                {
                  q: "What is an AI avatar generator?",
                  a: "An AI avatar generator is a powerful tool that transforms text into lifelike video content using digital avatars. With Grady, you can instantly create studio-quality videos without the need for cameras, actors, or editing software."
                },
                {
                  q: "Is there a free AI avatar generator?",
                  a: "Yes, Grady offers a free version for generating AI avatars, adding voice, and creating short videos. Premium plans unlock advanced features like HD and 4K rendering, customization, and commercial use."
                },
                {
                  q: "Can I create a custom avatar of myself or a teammate?",
                  a: "Absolutely. Grady makes it easy to create your own personalized AI avatar. Simply record a short calibration video using our guided process, and our AI will generate a lifelike digital version of you (or your team member) that speaks just like you."
                },
                {
                  q: "Which is the best AI avatar generator in 2025?",
                  a: "Grady is the best AI avatar generator because it's super easy to use and creates realistic talking avatars fast. You can turn text, images, or audio into videos in minutes. It supports over 40 languages, so it's great for marketing, training, or just making content that stands out."
                },
                {
                  q: "How do I create an AI avatar video with Grady?",
                  a: "Getting started with Grady is fast and simple: Sign up for a free Grady account, choose a stock avatar or create your own custom avatar, write your script—our AI avatars will voice it with perfect lip-sync, customize your video with visuals, and export or publish your video."
                },
                {
                  q: "Do Grady AI avatars support multiple languages?",
                  a: "Yes, Grady avatars speak over 175 languages and dialects, making them ideal for global communication, training, and customer engagement."
                },
                {
                  q: "How realistic are Grady's AI avatars?",
                  a: "Grady's AI avatars are designed to be highly realistic, incorporating human-like expressions, gestures, and voice intonation to create engaging and lifelike videos."
                },
                {
                  q: "Can Grady avatars show emotions and gestures?",
                  a: "Yes, Grady avatars do more than speak. They also use natural facial expressions and gestures that match your script's tone. This makes communication more engaging and helps your videos feel more authentic and human."
                },
                {
                  q: "What customization options are available for Grady avatars?",
                  a: "Grady offers extensive customization. With features like Look Packs, you can quickly switch between polished, playful, or quirky styles to fit your brand. You can also adjust outfits, tones, and voices so your avatar reflects exactly the personality you want to project."
                },
                {
                  q: "Does Grady offer pre-made or industry-specific avatars?",
                  a: "Yes. You can choose from over 100 ready-to-use stock avatars designed for business, education, marketing, and more. There are also industry-specific avatars tailored for healthcare, sales, and corporate training, giving you a professional option right away."
                },
                {
                  q: "How does Grady save time compared to traditional video production?",
                  a: "With Grady, you can skip cameras, studios, and editing. Simply type your script, select an avatar, and generate your video in minutes. This allows teams to scale video creation quickly and cost-effectively for ads, training, and content marketing."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-3">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-32 px-8 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00b8ff]/20 via-[#d8b4e2]/20 to-[#f8e8fa]/50 -z-10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-white/40 backdrop-blur-[100px] -z-10" />
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Start creating<br/>videos with AI
            </h2>
            <p className="text-xl text-gray-700 mb-10">
              See how businesses like yours scale content creation and drive growth with the most innovative AI video.
            </p>
            <button className="bg-[#00b8ff] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#00a3e0] transition-colors shadow-lg shadow-[#00b8ff]/30">
              Book a meeting
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-16 px-8">
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
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-gray-500">Pricing</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-gray-500">Products</h4>
            <ul className="space-y-3 text-sm text-gray-400">
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
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-gray-500">Industry</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Agencies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">E-Learning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Localization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sales Outreach</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-gray-500">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-400">
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
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-gray-500">Enterprise</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">For Enterprise</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
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
}
