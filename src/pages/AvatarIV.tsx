import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Play, Upload, ArrowRight, Wand2, Plus, ChevronDown, CheckCircle2, Star, Youtube, Instagram, Twitter, Mic, Globe } from 'lucide-react';

export default function AvatarIV() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#c8a2c8]/30">
      <Navbar />
      
      <main className="pt-32 pb-0">
        {/* Hero Section */}
        <section className="px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 mb-24">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl z-10">
            <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
              <Link to="/" className="hover:text-gray-900">Home</Link>
              <span>›</span>
              <Link to="/platform/ai-avatar-generator" className="hover:text-gray-900">AI Avatars</Link>
              <span>›</span>
              <span className="text-[#d8b4e2]">Avatar IV</span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              <span className="text-[#d8b4e2]">Avatar IV</span> — AI<br/>
              Avatars That<br/>
              Look Real
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl"
            >
              Turn any photo into a lifelike talking video. Avatar IV delivers natural lip sync, expressive gestures, and multilingual voice; no cameras or actors needed. Ready for ads, training, and social media.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-4 max-w-md"
            >
              <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-full p-1 pl-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700 border-r border-gray-200 pr-4">
                  <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center text-xs">G</div>
                  Sign in as Net
                </div>
                <input type="email" placeholder="Enter your email..." className="flex-1 outline-none text-sm bg-transparent" />
              </div>
              <button className="w-full bg-[#e8c4f2] text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#d8b4e2] transition-colors">
                Get Started for Free
              </button>
              <p className="text-xs text-center text-gray-400">
                By continuing you agree to <a href="#" className="underline">Grady's terms</a>
              </p>
            </motion.div>
          </div>

          {/* Right Content - Interactive Widget */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 w-full max-w-xl relative"
          >
            <div className="absolute -inset-10 bg-gradient-to-tr from-[#00b8ff]/10 via-[#e8c4f2]/20 to-transparent rounded-[3rem] blur-3xl -z-10" />
            
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Pick an avatar</h3>
              <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
                <button className="w-20 h-20 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-1 text-gray-500 hover:border-[#d8b4e2] hover:text-[#d8b4e2] transition-colors flex-shrink-0">
                  <Upload className="w-5 h-5" />
                  <span className="text-[10px] font-medium text-center leading-tight">Upload your<br/>photo</span>
                </button>
                <img src="https://picsum.photos/seed/av1/100/100" className="w-20 h-20 rounded-2xl object-cover ring-2 ring-[#d8b4e2] ring-offset-2 cursor-pointer flex-shrink-0" alt="Avatar 1" />
                <img src="https://picsum.photos/seed/av2/100/100" className="w-20 h-20 rounded-2xl object-cover cursor-pointer hover:ring-2 ring-gray-200 ring-offset-2 transition-all flex-shrink-0" alt="Avatar 2" />
                <img src="https://picsum.photos/seed/av3/100/100" className="w-20 h-20 rounded-2xl object-cover cursor-pointer hover:ring-2 ring-gray-200 ring-offset-2 transition-all flex-shrink-0" alt="Avatar 3" />
                <img src="https://picsum.photos/seed/av4/100/100" className="w-20 h-20 rounded-2xl object-cover cursor-pointer hover:ring-2 ring-gray-200 ring-offset-2 transition-all flex-shrink-0" alt="Avatar 4" />
              </div>

              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Type your script</h3>
                <button className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-100">
                  Type in any language <span className="text-lg leading-none">🇬🇧</span> <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              
              <div className="relative mb-6">
                <textarea 
                  className="w-full h-32 bg-gray-50 border border-gray-200 rounded-2xl p-4 text-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-[#d8b4e2]/50"
                  placeholder="Enter your script - your avatar will speak it naturally..."
                  defaultValue="Enter your script - your avatar will speak it naturally..."
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-400">
                  0/2000 characters
                </div>
              </div>

              <div className="flex justify-end">
                <button className="bg-[#60d0e4] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#4bc0d4] transition-colors">
                  Generate video <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Power Section */}
        <section className="py-24 bg-white text-center px-8">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience the power of<br/>
              <span className="text-[#d8b4e2]">Avatar IV in action</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              See how creators, brands, and teams are using Grady's AI talking avatar creator to transform ideas into scroll-stopping, multilingual videos. Each showcase features avatars, voices, and lip sync with no cameras needed.
            </p>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-gray-800 transition-colors">
              Get started for free <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 rounded-full bg-[#f8e8fa] text-[#c882d8] font-semibold text-sm">Avatar IV - Intro</button>
            <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 font-semibold text-sm hover:bg-gray-200">Digital clone</button>
            <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 font-semibold text-sm hover:bg-gray-200">Anime style</button>
            <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 font-semibold text-sm hover:bg-gray-200">Talking animal</button>
          </div>

          <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl relative group">
            <img src="https://picsum.photos/seed/anime-cockpit/1200/600" alt="Anime Style Avatar" className="w-full aspect-video object-cover" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-gray-900 ml-1" />
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Section */}
        <section className="py-24 bg-gray-50 px-8">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-[#f8e8fa] text-[#c882d8] rounded-full text-xs font-bold tracking-wider uppercase mb-6">
              Features of Avatar IV
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
              Innovation built into every <span className="text-[#d8b4e2]">realistic<br/>avatar creator</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Avatar IV gives you more than a simple talking face. With advanced AI lip sync video capabilities, expressive hand gestures, and flexible styling options, you can create avatars that feel both natural and engaging. Whether you want a hyper-realistic digital twin or a stylized character, Avatar IV provides the tools to build the most authentic connection with your audience.
            </p>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-gray-800 transition-colors">
              Get started for free <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="max-w-6xl mx-auto relative">
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {/* Left Column */}
              <div className="flex flex-col justify-center gap-6">
                <div className="bg-[#e8c4f2]/30 p-8 rounded-3xl flex-1 flex flex-col">
                  <div className="w-10 h-10 bg-[#d8b4e2] rounded-full flex items-center justify-center mb-4 text-white shrink-0">
                    <Wand2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Voice-synced motion that feels natural</h3>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">Your talking avatar from the photo does more than just talk; it reacts and conveys emotions based on your script. Experience natural timing, tone, and movement for an engaging delivery that feels real.</p>
                </div>
                <div className="bg-[#e8c4f2]/30 p-8 rounded-3xl flex-1 flex flex-col">
                  <div className="w-10 h-10 bg-[#d8b4e2] rounded-full flex items-center justify-center mb-4 text-white shrink-0">
                    <Wand2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Realistic hand gestures for better communication</h3>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">Enhance your realistic avatar creator with expressive hand movements that align perfectly with your avatar's speech. Hand gestures are ideal for emphasis, subtlety, and effective visual storytelling.</p>
                </div>
              </div>

              {/* Center Image */}
              <div className="h-full min-h-[500px] rounded-[2.5rem] overflow-hidden relative shadow-xl">
                <img src="https://picsum.photos/seed/woman-center/600/800" alt="Realistic Avatar" className="absolute inset-0 w-full h-full object-cover" />
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-center gap-6">
                <div className="bg-[#e8c4f2]/30 p-8 rounded-3xl flex-1 flex flex-col">
                  <div className="w-10 h-10 bg-[#d8b4e2] rounded-full flex items-center justify-center mb-4 text-white shrink-0">
                    <Wand2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Stylized or lifelike options for every creative need</h3>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">Select from hyper-realistic clones or stylized characters. Our AI avatar maker supports human, anime, and animal avatars in both portrait and full-body formats.</p>
                </div>
                <div className="bg-[#e8c4f2]/30 p-8 rounded-3xl flex-1 flex flex-col">
                  <div className="w-10 h-10 bg-[#d8b4e2] rounded-full flex items-center justify-center mb-4 text-white shrink-0">
                    <Wand2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Voice-synced emotion</h3>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">With Avatar IV, avatars don't just talk — they act. The enhanced model responds to tone and emotion, providing lifelike expressions along with synchronized gestures for a truly human-like performance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Path Section (Dark) */}
        <section className="py-24 bg-[#1a1a1a] text-white px-8 rounded-t-[3rem] -mt-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div>
                <div className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-bold tracking-wider uppercase mb-6">
                  All models
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  The path to <span className="text-[#d8b4e2]">Avatar IV</span>
                </h2>
              </div>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors">
                Get started for free <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 z-0" />
              
              {[
                {
                  icon: "3",
                  title: "Avatar 3 →",
                  desc: "The world's first lifelike lip sync model",
                  date: "September 2024",
                  color: "bg-[#ffb07a]"
                },
                {
                  icon: "3.5",
                  title: "Avatar 3 with motion →",
                  desc: "The same breakthrough model now with motion",
                  date: "November 2024",
                  color: "bg-[#60d0e4]"
                },
                {
                  icon: "IV",
                  title: "Avatar IV →",
                  desc: "Turn any photo into a lifelike talking video",
                  date: "May 2025",
                  color: "bg-[#d8b4e2]"
                },
                {
                  icon: "IV",
                  title: "Avatar IV Digital Twin →",
                  desc: "Same Avatar IV model, now for video avatar clones",
                  date: "August 2025",
                  color: "bg-[#00b8ff]"
                }
              ].map((step, i) => (
                <div key={i} className="bg-[#222] border border-white/5 rounded-3xl p-8 text-center relative z-10 hover:bg-[#2a2a2a] transition-colors">
                  <div className={`w-12 h-12 ${step.color} text-gray-900 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-6 shadow-lg`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{step.desc}</p>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{step.date}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Examples Section */}
        <section className="py-24 bg-gray-50 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <div className="inline-block px-4 py-1.5 bg-[#f8e8fa] text-[#c882d8] rounded-full text-xs font-bold tracking-wider uppercase mb-6">
                  User examples
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  See what you can create<br/>with Avatar IV
                </h2>
                <p className="text-lg text-gray-600">
                  Explore real examples of videos made with our AI talking avatar creator. Users around the world are transforming simple photos and scripts into engaging, lifelike animations with natural lip sync and realistic body movements. From cinematic scenes to expressive full body avatar creator projects, these showcases highlight the power of AI to generate professional-quality content without cameras or actors.
                </p>
              </div>
              <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-gray-800 transition-colors shrink-0">
                Get started for free <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  img: "https://picsum.photos/seed/ex1/600/400",
                  user: "@stevenmacgregor03",
                  desc: "Demonstrates how Avatar IV performs from multiple camera angles while keeping lip sync precise and emotion in motion. A perfect example of how our AI lip sync video feature creates natural delivery across perspectives."
                },
                {
                  img: "https://picsum.photos/seed/ex2/600/400",
                  user: "@mincho",
                  desc: "Shows complete vocal expression created from just one photo and audio. Powered entirely by AI, this avatar achieves seamless lip sync without the need for actors, making it ideal for training, marketing, and storytelling."
                },
                {
                  img: "https://picsum.photos/seed/ex3/600/400",
                  user: "@maxescu",
                  desc: "Illustrates lifelike emotions and an AI-generated voice layered with original music, all created from a single image. This demonstrates how a realistic avatar creator can bring static photos to life in new ways."
                },
                {
                  img: "https://picsum.photos/seed/ex4/600/400",
                  user: "@jeff_synthesized",
                  desc: "Features an AI bear presenting the news — no real actors, only one image and a script."
                },
                {
                  img: "https://picsum.photos/seed/ex5/600/400",
                  user: "@visiblemaker",
                  desc: "Creates an AI short film driven by memes, showcasing talking animals, cinematic cuts, and full voice sync."
                },
                {
                  img: "https://picsum.photos/seed/ex6/600/400",
                  user: "@SarahAnnabels",
                  desc: "Even hand-drawn portraits come to life — powered by Avatar IV's stylized generation."
                }
              ].map((ex, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer flex flex-col h-full">
                  <div className="relative aspect-video overflow-hidden shrink-0">
                    <img src={ex.img} alt={ex.user} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                        <Play className="w-5 h-5 text-gray-900 ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h4 className="font-bold text-lg mb-3">{ex.user}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{ex.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 bg-white px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                One photo, <span className="text-[#d8b4e2]">endless possibilities</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Avatar IV is designed to fit seamlessly into your workflow, whether you're creating for social media, business, or education.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Marketing & Sales",
                  desc: "Create personalized video messages for prospects that feel human and build trust instantly.",
                  icon: <Star className="w-6 h-6" />,
                  color: "bg-purple-50 text-purple-600"
                },
                {
                  title: "Training & Onboarding",
                  desc: "Turn static manuals into engaging video tutorials with a friendly, consistent AI instructor.",
                  icon: <Play className="w-6 h-6" />,
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  title: "Social Media Content",
                  desc: "Produce high-quality shorts and reels without needing to be on camera yourself.",
                  icon: <Instagram className="w-6 h-6" />,
                  color: "bg-pink-50 text-pink-600"
                },
                {
                  title: "Global Communication",
                  desc: "Translate your message into 175+ languages with an avatar that speaks them all naturally.",
                  icon: <Globe className="w-6 h-6" />,
                  color: "bg-green-50 text-green-600"
                }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[2.5rem] bg-gray-50 border border-transparent hover:border-[#d8b4e2] transition-all group">
                  <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs Section */}
        <section className="py-24 bg-gray-900 text-white px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-[#d8b4e2]/20 rounded-[3rem] blur-3xl" />
                <div className="bg-[#222] rounded-[2.5rem] p-8 border border-white/5 relative z-10">
                  <div className="space-y-6">
                    {[
                      { label: "Resolution", value: "Up to 4K Ultra HD" },
                      { label: "Frame Rate", value: "60 FPS for smooth motion" },
                      { label: "Languages", value: "175+ with native accents" },
                      { label: "Processing", value: "Real-time cloud rendering" },
                      { label: "Lip Sync", value: "Sub-pixel precision" }
                    ].map((spec, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0">
                        <span className="text-gray-400 text-sm">{spec.label}</span>
                        <span className="font-bold text-[#d8b4e2]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Wand2 className="w-5 h-5 text-[#d8b4e2]" />
                      <span className="text-sm font-bold">AI Performance Score</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#d8b4e2] to-[#60d0e4] w-[98%]" />
                    </div>
                    <div className="mt-2 text-[10px] text-gray-500 text-right uppercase tracking-widest">98% Accuracy</div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-bold tracking-wider uppercase mb-6">
                  Technical Excellence
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  The most advanced<br/>
                  <span className="text-[#d8b4e2]">AI architecture</span> yet
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  Avatar IV is built on a proprietary neural network that processes facial geometry and vocal patterns simultaneously. This ensures that every blink, nod, and gesture is perfectly timed with the spoken word.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Neural Lip-Sync Engine v4.0</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Dynamic Gesture Mapping</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Multi-Angle Geometry Reconstruction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Start Creating Steps (Dark) */}
        <section className="py-24 bg-[#1a1a1a] text-white px-8 rounded-[3rem] mx-4 md:mx-8 my-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Start creating with just<br/>
                  <span className="text-[#d8b4e2]">one photo</span>
                </h2>
                <p className="text-lg text-gray-400">
                  Creating a lifelike talking avatar with Avatar IV takes just a few steps. Our AI talking avatar creator is designed to make the process seamless, whether you want a simple portrait animation or a full body avatar creator experience. By combining photo input, natural voice sync, and expressive motion, you can generate professional-quality videos in minutes without cameras, studios, or long production cycles.
                </p>
              </div>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors shrink-0">
                Get started for free <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-32">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-white/10 rounded text-xs font-bold tracking-wider mb-6">STEP 1</div>
                  <h3 className="text-3xl font-bold mb-4">Upload a photo to begin</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Choose a clear image of yourself or your subject, whether it's a portrait, half-body, or full-body photo. The better the image quality, the more natural and realistic the avatar will look once generated.
                  </p>
                </div>
                <div className="flex-1 relative">
                  <div className="bg-[#2a2a2a] rounded-[2.5rem] p-4 aspect-square max-w-md mx-auto relative">
                    <img src="https://picsum.photos/seed/step1/500/500" alt="Upload" className="w-full h-full object-cover rounded-[2rem]" />
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold shadow-xl flex items-center gap-2 whitespace-nowrap">
                      Upload Photo
                      <div className="w-8 h-8 bg-[#d8b4e2] rounded-full flex items-center justify-center text-white ml-2">
                        <Upload className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-white/10 rounded text-xs font-bold tracking-wider mb-6">STEP 2</div>
                  <h3 className="text-3xl font-bold mb-4">Add a script or upload audio</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Type your script directly into the editor or upload an audio file. You can also record your own voice. Our AI lip sync generator synchronizes your text or audio with facial movements and gestures, ensuring your avatar speaks naturally.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-3xl p-6 text-gray-900 shadow-2xl max-w-md mx-auto transform -rotate-2">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">AI</div>
                      <div className="text-sm font-medium">Script Editor</div>
                    </div>
                    <p className="text-sm text-gray-600 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                      I recently went on a mountain hike and turned out some incredible gear. The weather was wet and muddy, but I was amazed at how everything held up! My boots stayed dry while I splashed through puddles, making the experience so much more enjoyable. No more soggy socks to dampen my adventures!
                    </p>
                    <div className="flex justify-end">
                      <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-2 w-48 space-y-1">
                        <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg flex items-center justify-between">Audio <ChevronDown className="w-4 h-4" /></button>
                        <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg flex items-center justify-between">Record Audio <Mic className="w-4 h-4" /></button>
                        <button className="w-full text-left px-3 py-2 text-sm bg-[#e8c4f2]/30 text-[#c882d8] rounded-lg font-medium">Generate Video</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-white/10 rounded text-xs font-bold tracking-wider mb-6">STEP 3</div>
                  <h3 className="text-3xl font-bold mb-4">Generate your avatar video</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    With just one click, Avatar IV transforms your photo into a dynamic talking avatar. The video will instantly showcase lip sync, expressions, and gestures that bring your avatar to life. Export in high resolution and share it on your favorite platforms.
                  </p>
                </div>
                <div className="flex-1 relative">
                  <div className="w-64 h-64 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#d8b4e2] to-[#60d0e4] rounded-full blur-2xl opacity-50" />
                    <img src="https://picsum.photos/seed/step3/400/400" alt="Generated Avatar" className="w-full h-full object-cover rounded-full relative z-10 border-4 border-[#2a2a2a]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-24">
              <button className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Youtube className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="py-24 bg-white px-8">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Explore the advanced features of<br/>
              <span className="text-[#d8b4e2]">Avatar IV</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Avatar IV is more than just an upgrade. It redefines what's possible with AI avatars. From sharper visuals to lifelike gestures, it delivers an unmatched level of realism and flexibility for creators, businesses, and storytellers alike.
            </p>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-3">Avatars go beyond simple lip sync</h3>
                <p className="text-gray-600 leading-relaxed">Avatar IV doesn't just replicate speech; it understands tone, rhythm, and emotion. The model generates natural facial expressions and synchronized gestures that mirror human communication, creating conversations that feel authentic and emotionally engaging.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Natural hand gestures enhance interactions</h3>
                <p className="text-gray-600 leading-relaxed">With Avatar IV, avatars move with purpose. Hand gestures are intelligently matched to the voice track, giving every video depth and nuance. Whether explaining, presenting, or storytelling, your avatars will feel expressive and dynamic.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Creativity goes beyond human limitations</h3>
                <p className="text-gray-600 leading-relaxed">Avatar IV unlocks new creative possibilities. Transform a sketch, a cartoon, or even an animal into a talking, expressive avatar. From lifelike humans to anime characters and fantasy creatures, you can design any persona and bring it to life with high-performance realism.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">No longer limited to front-facing photos</h3>
                <p className="text-gray-600 leading-relaxed">Unlike earlier models, Avatar IV can generate avatars from tilted heads, profiles, and angled poses. This flexibility ensures accurate and natural renders, even with complex input photos, giving you full creative freedom to use varied source material.</p>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden relative shadow-2xl">
                <img src="https://picsum.photos/seed/advanced/800/1000" alt="Advanced Features" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gray-50 px-8">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3 sticky top-32">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Have questions?<br/>We have answers
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              {[
                {
                  q: "What is Avatar IV?",
                  a: "Avatar IV is Grady's advanced AI avatar engine that creates lifelike talking avatars from a single photo, featuring voice sync, facial expressions, and hand gestures. You can start exploring the potential of Grady for free by signing up here."
                },
                {
                  q: "How does Grady create a talking avatar from a photo?",
                  a: "Grady uses an AI engine to animate static photos with voice sync, facial expressions, and gestures, needing only a script and an image."
                },
                {
                  q: "Can Grady avatars support different styles?",
                  a: "Yes, Grady avatars support various styles such as hyper-realistic, anime, and animals, providing flexibility in avatar design."
                },
                {
                  q: "Is it necessary to have a camera for using Avatar IV?",
                  a: "No, you do not need a camera; Avatar IV generates a video using just a photo and a script."
                },
                {
                  q: "How does AI video localization work in Grady?",
                  a: "Grady localizes videos by adapting content to different languages and cultures while ensuring natural speech and perfect lip-sync."
                }
              ].map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-8">
                  <h3 className="text-xl font-bold mb-4">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-32 px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#60d0e4]/20 via-[#d8b4e2]/20 to-[#f8e8fa]/50 -z-10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-white/40 backdrop-blur-[100px] -z-10" />
          
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Start creating<br/>videos with AI
            </h2>
            <p className="text-xl text-gray-700 mb-10">
              See how businesses like yours scale content creation and drive growth with the most innovative AI video.
            </p>
            <button className="bg-[#60d0e4] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4bc0d4] transition-colors shadow-lg shadow-[#60d0e4]/30">
              Get started for free
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
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
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-400">Pricing</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-400">Products</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Video Avatar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Talking Photo AI</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-400">Industry</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Agencies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">E-Learning</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-gray-400">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customers Stories</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" /> English
          </div>
          <p>© {new Date().getFullYear()} Grady Clone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
