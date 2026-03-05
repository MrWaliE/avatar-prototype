import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Sparkles, 
  Mic2, 
  Video, 
  Image as ImageIcon, 
  Users, 
  Zap, 
  Globe, 
  Twitter, 
  Youtube, 
  Linkedin, 
  Instagram,
  ChevronDown,
  ChevronUp,
  Volume2,
  Wand2,
  Layers,
  Camera
} from 'lucide-react';

const faqs = [
  {
    q: "What is an AI avatar?",
    a: "An AI avatar is a highly realistic digital representation of a human created using artificial intelligence. These avatars are capable of delivering human-like speech, facial expressions, and gestures, making them ideal for a variety of video communications and digital content. At Grady, our AI avatars are built with consented data from real actors and talent. We ensure ethical AI practices by compensating actors for each video generated with their likeness, combining cutting-edge generative AI with responsible content creation."
  },
  {
    q: "What is an AI avatar generator?",
    a: "An AI avatar generator is a powerful tool that transforms text into lifelike video content using digital avatars. With Grady, you can instantly create studio-quality videos without the need for cameras, actors, or editing software."
  },
  {
    q: "Is there a free AI avatar generator?",
    a: "Yes, Grady offers a free tier that lets you test our AI avatars, add voice, and create short videos. Premium plans unlock advanced features like HD and 4K rendering, customization, and commercial use."
  },
  {
    q: "Can I create a custom avatar of myself or a teammate?",
    a: "Absolutely. Grady makes it easy to create your own personalized AI avatar. Simply record a short calibration video using our guided process, and our AI will generate a lifelike digital version of you (or your team member) that speaks just like you. Create your digital twin now at Grady."
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
    q: "Do Grady AI Avatars support multiple languages?",
    a: "Yes, Grady avatars speak over 175 languages and dialects, making them ideal for global communication, training, and customer engagement."
  },
  {
    q: "How realistic are Grady's AI avatars?",
    a: "Grady's AI avatars are designed to be highly realistic, incorporating human-like expressions, gestures, and voice integration to create engaging and lifelike videos. Experience realism like never before with Grady."
  },
  {
    q: "Can Grady avatars show emotions and gestures?",
    a: "Yes. Grady avatars do more than speak. They also use natural facial expressions and gestures that match your script's tone. This makes communication more engaging and helps your videos feel more authentic and human."
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
];

export default function AIAvatarGenerator() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500/30">
      <Navbar />
      
      <main className="pt-32 pb-0">
        {/* Hero Section - Emerald Dark Theme */}
        <section className="px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/10 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-cyan-500/20 to-emerald-500/10 blur-[100px]" />
          </div>

          <div className="flex-1 text-left z-10">
            <div className="text-sm text-slate-500 mb-6 flex items-center gap-2 font-medium">
              <Link to="/" className="hover:text-slate-900">Home</Link>
              <span>›</span>
              <span className="text-emerald-600">AI Avatars</span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8"
            >
              AI avatar<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                generator
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl"
            >
              Create your own AI avatar in minutes with Grady's easy-to-use platform. Whether you need a business presenter, influencer-style talking avatar, or a custom character, our free AI avatar generator gives you the power to design, edit, and animate avatars with studio quality. No design skills required. Just type, upload, and generate. It's that easy.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link to="/app" className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2">
                Get Started For Free <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-3 px-6 py-4 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm cursor-pointer hover:bg-white transition-colors">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                <span className="text-sm font-medium text-slate-700">Sign in with Google</span>
              </div>
            </motion.div>
            <p className="text-xs text-slate-400">By continuing you agree to Grady's terms</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 w-full relative z-10"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200/50 bg-white p-4">
              <div className="rounded-[2rem] overflow-hidden bg-slate-100 aspect-[4/3] relative">
                <img src="https://picsum.photos/seed/avatarhero/800/600" alt="Avatar Generator Interface" className="w-full h-full object-cover" />
                {/* Floating UI Elements */}
                <div className="absolute top-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex gap-3 overflow-x-auto hide-scrollbar">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`w-14 h-14 rounded-full overflow-hidden border-2 flex-shrink-0 ${i === 2 ? 'border-emerald-500' : 'border-transparent'}`}>
                      <img src={`https://picsum.photos/seed/face${i}/100/100`} alt="Face" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Type your script</span>
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">English (US)</span>
                  </div>
                  <div className="h-16 w-full bg-slate-50 rounded-xl border border-slate-100 p-3 text-sm text-slate-400">
                    Enter your script - your avatar will speak it naturally...
                  </div>
                  <div className="mt-3 flex justify-end">
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                      Generate video <Play className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section - Clean Minimal */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              {[
                { label: "Videos generated", value: "108,389,803" },
                { label: "Avatars generated", value: "82,948,846" },
                { label: "Videos translated", value: "15,086,899" }
              ].map((stat, i) => (
                <div key={i} className="text-center py-4">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-slate-900 tracking-tight">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center mb-8">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">Trusted by millions worldwide to bring their stories to life</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Workday_logo.svg" alt="Workday" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-logo.svg" alt="Coursera" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Miro_logo.svg" alt="Miro" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg" alt="Intel" className="h-8" />
            </div>
          </div>
        </section>

        {/* Why Grady is leading - Dark Cards Layout */}
        <section className="py-32 bg-slate-900 text-white px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Why Grady is the leading<br/>
                <span className="text-emerald-400">AI avatar generator</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
                Powered by advanced facial animation and voice sync technology, Grady delivers the best AI avatar generator available today. Our lifelike avatars match expressions, gestures, and speech in real time.
              </p>
              <button className="bg-emerald-500 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">
                Get started for free
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "CG Stock Avatar", img: "https://picsum.photos/seed/cgavatar/400/500" },
                { title: "GAvatar 1.0 Model", img: "https://picsum.photos/seed/gavatar/400/500" },
                { title: "Digital Twin", img: "https://picsum.photos/seed/digitaltwin/400/500" }
              ].map((item, i) => (
                <div key={i} className="group relative rounded-3xl overflow-hidden aspect-[3/4] border border-white/10 bg-white/5">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium inline-block">
                      {item.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Build your own custom AI avatars - Split Layout */}
        <section className="py-32 bg-slate-50 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  Build your own custom <span className="text-emerald-600">AI avatars</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Create custom AI avatars that are uniquely tailored to your brand, from lifelike Avatar IV models to photo avatars generated from a single image or video avatars built from your own recording. Each custom avatar can be styled with different looks, outfits, and backgrounds, giving you a consistent and scalable way to represent your creative needs.
                </p>
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/25">
                  Get started for free
                </button>
              </div>
              <div className="flex-1 w-full">
                <div className="grid grid-cols-2 gap-4">
                  {/* Avatar IV */}
                  <div className="col-span-2 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow group flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold flex items-center gap-2"><Wand2 className="w-5 h-5 text-emerald-600" /> Avatar IV</h3>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                      </div>
                      <p className="text-sm text-slate-500 mb-6">Transform a single image into a full video with natural voice sync, expressive face dynamics, and authentic hand gestures.</p>
                      <button className="w-full py-2 bg-emerald-50 text-emerald-700 rounded-xl font-medium text-sm group-hover:bg-emerald-100 transition-colors">Try Avatar IV</button>
                    </div>
                    <div className="flex-1 rounded-2xl overflow-hidden bg-slate-100 aspect-video relative w-full">
                      <img src="https://picsum.photos/seed/avatariv/400/225" alt="Avatar IV" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Photo Avatar */}
                  <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow group">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold flex items-center gap-2"><ImageIcon className="w-4 h-4 text-teal-600" /> Photo Avatar</h3>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 transition-colors" />
                    </div>
                    <p className="text-sm text-slate-500 mb-4">Generate unlimited AI photo avatars of yourself from a single image and text-based instructions.</p>
                    <div className="rounded-xl overflow-hidden bg-slate-100 aspect-square relative">
                      <img src="https://picsum.photos/seed/photoavatar/300/300" alt="Photo Avatar" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Video Avatar */}
                  <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow group">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold flex items-center gap-2"><Video className="w-4 h-4 text-cyan-600" /> Video Avatar</h3>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 transition-colors" />
                    </div>
                    <p className="text-sm text-slate-500 mb-4">Film yourself to generate a lifelike avatar that looks and sounds like you so you never have to be in front of a camera again.</p>
                    <div className="rounded-xl overflow-hidden bg-slate-100 aspect-square relative">
                      <img src="https://picsum.photos/seed/videoavatar/300/300" alt="Video Avatar" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stock Avatars - Masonry Grid */}
        <section className="py-32 bg-white px-8 border-t border-slate-200">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Choose from <span className="text-emerald-600">1,000+</span> stock AI avatar models
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                From professional presenters to influencer-style avatars and multicultural models, Grady offers a full range of AI-generated stock avatars. Easily adapt them for business meetings, product tutorials, or ads, or customer service videos. Our avatars help you connect with audiences anywhere, in any language.
              </p>
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/25 flex items-center gap-2">
                Get started for free <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 w-full">
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <div key={i} className={`rounded-2xl overflow-hidden bg-slate-100 ${i % 3 === 0 ? 'aspect-square' : 'aspect-[3/4]'} hover:scale-105 transition-transform duration-300 shadow-md`}>
                    <img src={`https://picsum.photos/seed/stock${i}/300/400`} alt={`Stock Avatar ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to create an AI avatar digital twin - Vertical Timeline */}
        <section className="py-32 bg-slate-50 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                How to create an AI avatar <span className="text-emerald-600">digital twin</span>
              </h2>
              <p className="text-lg text-slate-600">
                Turn yourself into a fully animated AI avatar with Grady's digital twin technology. Capture your likeness once and use it to generate videos on demand so you never have to get in front of a camera again.
              </p>
            </div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-200 before:to-transparent">
              {[
                {
                  step: "Step 1",
                  title: "Upload Photo",
                  desc: "Upload a clear photo of yourself to the Grady platform.",
                  img: "https://picsum.photos/seed/step1/600/400"
                },
                {
                  step: "Step 2",
                  title: "Training Model",
                  desc: "Train your personal AI avatar model to capture your unique look.",
                  img: "https://picsum.photos/seed/step2/600/400"
                },
                {
                  step: "Step 3",
                  title: "Customize",
                  desc: "Customize your avatar's style, clothing, and background.",
                  img: "https://picsum.photos/seed/step3/600/400"
                },
                {
                  step: "Step 4",
                  title: "Add Voice",
                  desc: "Select a voice or use voice cloning to capture your own.",
                  img: "https://picsum.photos/seed/step4/600/400"
                }
              ].map((item, i) => (
                <div key={i} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                  <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-slate-50 bg-emerald-100 text-emerald-600 font-bold text-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                    {i + 1}
                  </div>
                  <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-shadow">
                    <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-2">{item.step}</div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-slate-600 mb-6">{item.desc}</p>
                    <div className="rounded-2xl overflow-hidden bg-slate-100 aspect-video relative">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-24 bg-emerald-900 text-white px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="text-emerald-400 mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.41 14.596C16.891 13.267 17.132 12.182 17.132 11.341C17.132 10.5 16.972 9.818 16.651 9.295C16.33 8.773 15.849 8.511 15.208 8.511C14.887 8.511 14.566 8.591 14.245 8.75C13.925 8.91 13.684 9.15 13.524 9.471C13.363 9.792 13.283 10.193 13.283 10.674C13.283 11.316 13.444 11.958 13.764 12.6C14.085 13.242 14.566 13.884 15.208 14.526L13.283 19.982H14.017ZM6.017 21L8.41 14.596C8.891 13.267 9.132 12.182 9.132 11.341C9.132 10.5 8.972 9.818 8.651 9.295C8.33 8.773 7.849 8.511 7.208 8.511C6.887 8.511 6.566 8.591 6.245 8.75C5.925 8.91 5.684 9.15 5.524 9.471C5.363 9.792 5.283 10.193 5.283 10.674C5.283 11.316 5.444 11.958 5.764 12.6C6.085 13.242 6.566 13.884 7.208 14.526L5.283 19.982H6.017Z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Ogilvy turns feelings into songs with AI magic
              </h2>
              <p className="text-emerald-100 text-lg mb-8">
                Ogilvy and Milka launched "Let Smells Sing It For You," an AI-powered campaign where Gen Z can turn their emotions into custom rap songs and videos by scanning a Milka bar.
              </p>
              <div className="font-bold">Steve Soave</div>
              <div className="text-emerald-300 text-sm">Learning Media Designer, Ogilvy</div>
            </div>
            <div className="flex-1 w-full">
              <div className="rounded-3xl overflow-hidden aspect-video border border-white/20 shadow-2xl relative group cursor-pointer">
                <img src="https://picsum.photos/seed/ogilvy/800/450" alt="Ogilvy Case Study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Grady is the best - 3 Cards */}
        <section className="py-32 bg-white px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  Why Grady is the best<br/>AI avatar generator
                </h2>
                <p className="text-lg text-slate-600">
                  Grady combines speed, quality, and flexibility in one all-in-one platform. Generate avatars from text prompts, convert photos into avatars, or choose from our stock library.
                </p>
              </div>
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/25 whitespace-nowrap">
                Get started for free
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8 text-emerald-600" />,
                  title: "Fastest generation",
                  desc: "Create video in just minutes, delivering high-quality results faster than traditional video production."
                },
                {
                  icon: <CheckCircle2 className="w-8 h-8 text-teal-600" />,
                  title: "Easy to use",
                  desc: "Effortless video creation with an intuitive interface that anyone can use without any editing or technical skills required."
                },
                {
                  icon: <Layers className="w-8 h-8 text-cyan-600" />,
                  title: "All-in-one editor",
                  desc: "Make video creation as easy as writing a document with a text-based editor, all the way from first draft to final video."
                }
              ].map((feature, i) => (
                <div key={i} className="bg-slate-50 rounded-3xl p-10 border border-slate-200 hover:shadow-xl transition-shadow group">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Voice and Sound - Glassmorphism Dark Section */}
        <section className="py-32 bg-slate-900 text-white px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-l from-emerald-500/20 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Bring your AI avatar to<br/>life with <span className="text-emerald-400">voice and sound</span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Choose from over 100 realistic AI voices across more than 175 languages and accents. Clone your own voice, design unique tones, or integrate Grady avatars with third-party text-to-speech providers. Whether it's for professional narration or casual influencer content, Grady ensures your avatar sounds as real as it looks.
              </p>
              <button className="bg-emerald-500 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">
                Get started for free
              </button>
            </div>
            
            <div className="flex-1 w-full">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 shadow-2xl relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-500 rounded-full blur-2xl opacity-50"></div>
                
                <div className="space-y-4">
                  {/* Voice Option 1 */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <Mic2 className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-lg">Pick from 100+ stock voices</div>
                        <div className="text-sm text-slate-400">Instantly give your avatar a natural-sounding voice.</div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-500" />
                  </div>
                  
                  {/* Voice Option 2 */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                        <Volume2 className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-lg">Clone your own voice</div>
                        <div className="text-sm text-slate-400">Create a lifelike replica of your own voice.</div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-500" />
                  </div>
                  
                  {/* Voice Option 3 */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <Globe className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-lg">Use third-party integrations</div>
                        <div className="text-sm text-slate-400">Use third-party integrations seamlessly.</div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-500" />
                  </div>
                </div>
                
                {/* Mockup UI overlay */}
                <div className="mt-8 bg-slate-900 rounded-2xl border border-white/10 p-4 relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {['Emma - Cheerful', 'Noah - Natural', 'Olivia - Professional', 'Liam - Calm'].map((voice, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-3 flex items-center gap-3 border border-white/5">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <Play className="w-3 h-3 text-emerald-400 ml-0.5" />
                        </div>
                        <div className="text-xs font-medium">{voice}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-slate-50 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Have questions? We have answers.</h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300"
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-bold text-lg text-slate-900 pr-8">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-8 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
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

        {/* Bottom CTA - Emerald Gradient Theme */}
        <section className="py-32 px-8 relative overflow-hidden text-center bg-slate-900">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-cyan-500/30 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Start creating<br/>videos with AI
            </h2>
            <p className="text-xl text-emerald-100 mb-10">
              See how businesses like yours scale content creation and drive growth with the most innovative AI video platform.
            </p>
            <button className="bg-emerald-500 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">
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
                <div className="w-5 h-5 rounded-full bg-emerald-500 mix-blend-screen" />
                <div className="w-5 h-5 rounded-full bg-teal-400 mix-blend-screen" />
                <div className="w-5 h-5 rounded-full bg-cyan-400 mix-blend-screen" />
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
