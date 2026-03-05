import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  ArrowRight, 
  Play, 
  MessageSquare, 
  Tags, 
  Users, 
  Mic2, 
  Waves, 
  HandMetal, 
  Eye,
  Type,
  Palette,
  Film,
  CheckCircle2,
  Globe,
  Twitter,
  Youtube,
  Linkedin,
  Instagram
} from 'lucide-react';

export default function Studio() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/30">
      <Navbar />
      
      <main className="pt-32 pb-0">
        {/* Hero Section - Centered Layout instead of Left/Right */}
        <section className="px-8 max-w-7xl mx-auto flex flex-col items-center text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-gradient-to-b from-indigo-500/20 to-violet-500/10 blur-[120px]" />
          </div>

          <div className="text-sm text-slate-500 mb-6 flex items-center gap-2 font-medium">
            <Link to="/" className="hover:text-slate-900">Home</Link>
            <span>›</span>
            <span className="text-indigo-600">AI Studio</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8 max-w-4xl"
          >
            Every Word. Every Gesture.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
              Your Way.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl"
          >
            The text-based editor makes using the AI video generator as easy as writing a document. Control tone, delivery, gestures, and emotion in one seamless platform.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link to="/app" className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2">
              Get Started For Free <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              <Play className="w-5 h-5" /> Watch Demo
            </button>
          </motion.div>

          {/* Massive UI Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full max-w-6xl relative z-10"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200/50 bg-white p-2">
              <div className="rounded-[2rem] overflow-hidden bg-slate-100 aspect-[16/9] relative">
                <img src="https://picsum.photos/seed/studiohero/1200/675" alt="Studio Interface" className="w-full h-full object-cover" />
                {/* Floating UI Elements to make it look like an app */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl w-64 border border-white/50">
                  <div className="h-2 w-20 bg-slate-200 rounded-full mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-indigo-100 rounded-full"></div>
                    <div className="h-2 w-4/5 bg-indigo-100 rounded-full"></div>
                    <div className="h-2 w-5/6 bg-indigo-100 rounded-full"></div>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/10 flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"><Mic2 className="w-5 h-5 text-white" /></div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"><HandMetal className="w-5 h-5 text-white" /></div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center"><Play className="w-5 h-5 text-white ml-1" /></div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section - Dark Gradient Theme */}
        <section className="py-20 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-indigo-900/50 to-transparent pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { label: "Videos generated", value: "108,389,268" },
                { label: "Avatars generated", value: "82,948,811" },
                { label: "Videos translated", value: "15,086,865" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 text-white p-10 rounded-3xl text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">{stat.value}</div>
                  <div className="text-sm text-indigo-200 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center mb-8">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">Trusted by millions worldwide to bring their stories to life</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale invert">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Workday_logo.svg" alt="Workday" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-logo.svg" alt="Coursera" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Miro_logo.svg" alt="Miro" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg" alt="Intel" className="h-8" />
            </div>
          </div>
        </section>

        {/* Collaboration Section - Grid Layout */}
        <section className="py-32 bg-white px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
              {[
                {
                  icon: <MessageSquare className="w-6 h-6 text-indigo-600" />,
                  title: "Comments",
                  desc: "Add comments directly within the platform to collaborate smoothly with your team, ensuring feedback is captured and incorporated in real-time."
                },
                {
                  icon: <Tags className="w-6 h-6 text-violet-600" />,
                  title: "Tagging",
                  desc: "Tag users in AI videos, making collaboration easy and ensuring team members are aligned and notified about critical updates and feedback."
                },
                {
                  icon: <Users className="w-6 h-6 text-fuchsia-600" />,
                  title: "Multi-User Editing",
                  desc: "Multi-user editing allows teams to work together, share ideas, make adjustments, and refine AI videos collectively."
                }
              ].map((feature, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Big Video Placeholder */}
            <div className="rounded-[3rem] overflow-hidden bg-gradient-to-br from-indigo-500 to-violet-600 aspect-[21/9] relative shadow-2xl flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-500">
                <Play className="w-10 h-10 text-white ml-2" />
              </div>
            </div>
          </div>
        </section>

        {/* Creative Control - Bento Grid Layout instead of Tabs */}
        <section className="py-32 bg-slate-50 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                The only AI video maker that<br/>gives full creative control
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Give your team the full power of Grady with privacy, governance, and security built in. Scale your workspace easily with flexible seats, credits, and admin controls.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Voice Director */}
              <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-200/60 flex flex-col justify-between group hover:shadow-xl transition-shadow duration-500">
                <div>
                  <div className="flex items-center gap-2 text-indigo-600 font-bold mb-4">
                    <Mic2 className="w-5 h-5" /> Voice Director
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Create instantly with studio-quality results</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Get detailed with how your scripts are delivered. With AI voice cloning technology, you can control the emphasis and intonation of individual words and phrases, allowing you to craft a distinctive and impactful vocal performance.
                  </p>
                  <button className="text-indigo-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all mb-8">
                    Try Grady For Business <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] relative">
                  <img src="https://picsum.photos/seed/voicedir/600/450" alt="Voice Director" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

              {/* Voice Mirroring */}
              <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-200/60 flex flex-col justify-between group hover:shadow-xl transition-shadow duration-500">
                <div>
                  <div className="flex items-center gap-2 text-violet-600 font-bold mb-4">
                    <Waves className="w-5 h-5" /> Voice Mirroring
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Bring authenticity to your AI-generated video</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    With voice mirroring (speech-to-speech), upload a recording of yourself to control your digital twin's pacing, emotion, and tone, ensuring it sounds natural and aligned with your personality.
                  </p>
                  <button className="text-violet-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all mb-8">
                    Try Grady For Business <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] relative">
                  <img src="https://picsum.photos/seed/voicemirror/600/450" alt="Voice Mirroring" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

              {/* Gesture Control */}
              <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-200/60 flex flex-col md:flex-row gap-10 col-span-1 md:col-span-2 group hover:shadow-xl transition-shadow duration-500">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-fuchsia-600 font-bold mb-4">
                    <HandMetal className="w-5 h-5" /> Gesture Control
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Map natural movements to the script</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Make avatars feel more human with our AI video maker. Emotionless, lifeless avatars don't cut it anymore. With Gesture Control, map natural movements to the script—from hand gestures to facial expressions—ensuring that your AI-generated videos feel dynamic and engaging.
                  </p>
                  <button className="text-fuchsia-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Try Grady For Business <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden bg-slate-100 relative min-h-[300px]">
                  <img src="https://picsum.photos/seed/gesture/800/600" alt="Gesture Control" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

              {/* Realistic Previews */}
              <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-200/60 flex flex-col md:flex-row-reverse gap-10 col-span-1 md:col-span-2 group hover:shadow-xl transition-shadow duration-500">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold mb-4">
                    <Eye className="w-5 h-5" /> Realistic Previews
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Have confidence before submitting</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    One of the biggest pain points in AI video creation is not knowing how the final video will look until it's generated. Realistic previews solve this by showing avatar movement within the preview, letting you tweak before rendering.
                  </p>
                  <button className="text-emerald-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Try Grady For Business <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden bg-slate-100 relative min-h-[300px]">
                  <img src="https://picsum.photos/seed/preview/800/600" alt="Realistic Previews" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All of your video needs - Masonry/Alternating Layout */}
        <section className="py-32 bg-white px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                All of your video needs in<br/>one place
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
                With this AI video generator, you have everything you need to create engaging, professional training videos quickly and easily.
              </p>
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/25">
                Get Started For Free
              </button>
            </div>

            <div className="space-y-12">
              {/* Auto Captions */}
              <div className="bg-slate-50 rounded-[3rem] p-12 flex flex-col lg:flex-row items-center gap-16 border border-slate-100">
                <div className="flex-1 relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                    <img src="https://picsum.photos/seed/captions/800/600" alt="Auto Captions" className="w-full h-full object-cover" />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white px-6 py-3 rounded-xl font-medium text-lg whitespace-nowrap border border-white/20">
                      <span className="text-yellow-400">Automatically</span> add styled captions
                    </div>
                  </div>
                </div>
                <div className="flex-1 max-w-xl">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-6">
                    <Type className="w-4 h-4" /> AI Training Videos
                  </div>
                  <h3 className="text-4xl font-bold mb-6">Auto Captions</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    Automatically add styled captions with customizable fonts, sizes, and colors to enhance engagement. Captions are pulled directly from your script in AI Studio, giving you full command over timing and text accuracy.
                  </p>
                  <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
                    Generate deepfake video
                  </button>
                </div>
              </div>

              {/* Brand Kit */}
              <div className="bg-slate-50 rounded-[3rem] p-12 flex flex-col lg:flex-row-reverse items-center gap-16 border border-slate-100">
                <div className="flex-1 relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-gradient-to-br from-violet-100 to-fuchsia-100 p-8 flex items-center justify-center">
                    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                          <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                        </div>
                        <div>
                          <div className="font-bold text-lg">Brand Kit</div>
                          <div className="text-sm text-slate-500">Logos & Colors</div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-600"></div>
                        <div className="w-10 h-10 rounded-full bg-violet-500"></div>
                        <div className="w-10 h-10 rounded-full bg-fuchsia-500"></div>
                        <div className="w-10 h-10 rounded-full bg-slate-900"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 max-w-xl">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-bold mb-6">
                    <Palette className="w-4 h-4" /> AI Training Videos
                  </div>
                  <h3 className="text-4xl font-bold mb-6">Brand Kit</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    Upload your brand's essential elements like logos, colors, fonts, images, and videos. Maintain consistency across your projects by enabling account users to apply your branding to AI videos easily.
                  </p>
                  <button className="bg-violet-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-700 transition-colors">
                    Generate deepfake video
                  </button>
                </div>
              </div>

              {/* B-Roll Elements */}
              <div className="bg-slate-50 rounded-[3rem] p-12 flex flex-col lg:flex-row items-center gap-16 border border-slate-100">
                <div className="flex-1 relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative grid grid-cols-2 gap-2 p-2 bg-white">
                    <img src="https://picsum.photos/seed/broll1/400/300" alt="B-Roll 1" className="w-full h-full object-cover rounded-2xl" />
                    <img src="https://picsum.photos/seed/broll2/400/300" alt="B-Roll 2" className="w-full h-full object-cover rounded-2xl" />
                    <img src="https://picsum.photos/seed/broll3/400/300" alt="B-Roll 3" className="w-full h-full object-cover rounded-2xl col-span-2" />
                  </div>
                </div>
                <div className="flex-1 max-w-xl">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-100 text-fuchsia-700 rounded-full text-sm font-bold mb-6">
                    <Film className="w-4 h-4" /> AI Training Videos
                  </div>
                  <h3 className="text-4xl font-bold mb-6">B-Roll Elements</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    Inject a premium feel to your videos with built-in b-roll elements. Create high-quality videos from start to finish without jumping between different tools. The new editor includes features like scene transitions, stock images from Getty, background music, and more.
                  </p>
                  <button className="bg-fuchsia-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-fuchsia-700 transition-colors">
                    Generate deepfake video
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Clean List Layout */}
        <section className="py-32 bg-slate-50 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">AI Studio FAQs</h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "What features does AI Studio offer for video creation?",
                  a: "AI Studio offers features like avatar movement, gesture control, and natural voice customization for an intuitive, powerful video creation experience. Explore these features and more to see how AI Studio can transform your video projects."
                },
                {
                  q: "How can I ensure my AI-generated video sounds like me?",
                  a: "With Voice Mirroring, you can upload a recording to match your digital twin's pacing, emotion, and tone to your own."
                },
                {
                  q: "What is Gesture Control in AI Studio?",
                  a: "Gesture Control allows you to map natural movements, such as hand gestures and facial expressions, to your script for more expressive videos."
                },
                {
                  q: "How does AI Studio facilitate team collaboration?",
                  a: "AI Studio enables team collaboration with features like comments, tagging, and multi-user editing for seamless communication and feedback. Discover how these team collaboration tools in digital media can enhance productivity and creativity."
                },
                {
                  q: "Can I customize captions in my videos?",
                  a: "Yes, you can add auto captions with customizable fonts, sizes, and colors directly from your script in AI Studio, providing flexibility and creativity in your video projects."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60">
                  <h3 className="text-xl font-bold mb-4 text-slate-900">{faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA - Glowing Gradient Theme */}
        <section className="py-32 px-8 relative overflow-hidden text-center bg-slate-900">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/30 via-violet-500/30 to-fuchsia-500/30 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Start creating<br/>videos with AI
            </h2>
            <p className="text-xl text-indigo-100 mb-10">
              See how businesses like yours scale content creation and drive growth with the most innovative AI video.
            </p>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 transition-colors shadow-lg shadow-white/10">
              Get started for free
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
}
