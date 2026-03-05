import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { 
  Upload, 
  ArrowRight, 
  Globe, 
  ChevronDown, 
  Play, 
  CheckCircle2, 
  Youtube, 
  Instagram, 
  Twitter, 
  Linkedin,
  Languages,
  Zap,
  Mic2,
  Settings,
  Smile,
  FileText
} from 'lucide-react';

export default function VideoTranslator() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#00b8ff]/30">
      <Navbar />
      
      <main className="pt-32 pb-0">
        {/* Hero Section */}
        <section className="px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1 max-w-2xl">
            <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
              <Link to="/" className="hover:text-gray-900">Home</Link>
              <span>›</span>
              <span className="text-[#00b8ff]">AI Video Translator</span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              AI Video<br/>
              translator
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl"
            >
              Translate your videos with precision. Upload any video and automatically dub it into 175+ languages and dialects using best-in-class voice cloning, accurate lip sync, and auto-generated subtitles.
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
            className="flex-1 w-full max-w-xl"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Translate video</h3>
              
              <div className="border-2 border-dashed border-gray-200 rounded-2xl p-12 text-center mb-6 hover:border-[#00b8ff] transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00b8ff]/10">
                  <Upload className="w-6 h-6 text-gray-400 group-hover:text-[#00b8ff]" />
                </div>
                <p className="text-sm text-gray-500">Upload or drag and drop file here</p>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Or paste a YouTube link:</p>
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                  <Youtube className="w-5 h-5 text-red-600" />
                  <input type="text" placeholder="https://www.youtube.com/watch?v=..." className="flex-1 bg-transparent outline-none text-sm" />
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Translate to:</span>
                  <button className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm font-medium">
                    <span className="text-lg">🇬🇧</span> English <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
                <button className="bg-[#00b8ff] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#00a3e0] transition-colors">
                  Translate video <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { label: "Videos generated", value: "108,378,248" },
                { label: "Avatars generated", value: "82,948,035" },
                { label: "Videos translated", value: "15,086,089" }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Workday_logo.svg" alt="Workday" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Coursera_logo.svg" alt="Coursera" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Miro_logo.svg" alt="Miro" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Harvard_University_logo.svg" alt="Harvard" className="h-8" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Bosch_logo.svg" alt="Bosch" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg" alt="Intel" className="h-8" />
            </div>
          </div>
        </section>

        {/* Why Leading Section */}
        <section className="py-24 bg-white text-center px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Grady is the leading<br/>
              AI <span className="text-[#00b8ff]">video translator</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Powered by advanced AI translation and voice cloning technology, Grady delivers the most accurate video translator available today. Our solution seamlessly converts speech and syncs lip movements in real time, helping creators and businesses break language barriers and connect with global audiences.
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-gray-800 transition-colors">
              Get started for free <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-square relative group">
              <img src="https://picsum.photos/seed/trans1/600/600" className="w-full h-full object-cover" alt="Translation 1" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                <span>🇺🇸</span> English
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-square relative group scale-110 z-10">
              <img src="https://picsum.photos/seed/trans2/600/600" className="w-full h-full object-cover" alt="Translation 2" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                <span>🇪🇸</span> Spanish
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                  <Play className="w-6 h-6 text-gray-900 ml-1" />
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-square relative group">
              <img src="https://picsum.photos/seed/trans3/600/600" className="w-full h-full object-cover" alt="Translation 3" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                <span>🇨🇳</span> Chinese
              </div>
            </div>
          </div>
        </section>

        {/* Why You Should Use Section */}
        <section className="py-24 bg-gray-50 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why you should use AI<br/>
                  <span className="text-[#00b8ff]">video translator</span>
                </h2>
              </div>
              <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-gray-800 transition-colors">
                Get started for free <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-purple-600">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-4">Fast, easy, and cost-effective</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  Traditional video translation can be slow and expensive. Our online video translator makes it effortless. Simply upload your file or paste a YouTube link, and instantly translate a video in just one click. No need for costly reshoots or manual dubbing. It's fast, budget-friendly, and scales with businesses of any size.
                </p>
              </div>

              {/* Center Feature - Language List */}
              <div className="bg-gray-900 p-8 rounded-3xl shadow-xl text-white flex flex-col">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { flag: "🇺🇸", name: "English" },
                    { flag: "🇨🇳", name: "Chinese" },
                    { flag: "🇪🇸", name: "Spanish" },
                    { flag: "🇫🇷", name: "French" },
                    { flag: "🇩🇪", name: "German" },
                    { flag: "🇮🇹", name: "Italian" },
                    { flag: "🇵🇱", name: "Polish" },
                    { flag: "🇦🇪", name: "Arabic" },
                    { flag: "🇮🇳", name: "Hindi" },
                    { flag: "🇵🇹", name: "Portuguese" },
                    { flag: "🇷🇺", name: "Russian" },
                    { flag: "🇯🇵", name: "Japanese" }
                  ].map((lang, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium opacity-80">
                      <span className="text-base">{lang.flag}</span> {lang.name}
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-6 border-t border-white/10">
                  <p className="text-sm opacity-60">Dub your videos into 175+ languages and dialects instantly.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                  <Mic2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-4">Preserve your voice</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  Our video language translator goes beyond word substitution. Using advanced AI and voice cloning, your unique tone and delivery are preserved across 175+ languages and dialects. Even when you translate a video to English or any other language, it still sounds like you, maintaining a consistent and authentic brand voice.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
                <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mb-6 text-cyan-600">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-4">Expand your global reach</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  Whether you are a solo creator or enterprise, video translation helps unlock new markets. With cultural nuance, voice accuracy, and precise lip-sync, your videos resonate internationally in ways subtitles alone cannot. More reach means more engagement and growth.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-green-500 p-8 rounded-3xl shadow-xl text-white flex flex-col">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Settings className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-4">Customize your localization</h3>
                <p className="text-white/90 text-sm leading-relaxed flex-1">
                  Add subtitles, refine tone, and adjust settings to match your brand's style. With one-click access to 175+ languages and dialects, Video is a collection-ready, access-to-multi-lingual player, which can be easily embedded on any page or CMS for seamless viewing in multiple languages.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600">
                  <Smile className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-4">Perfect lip-sync</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  Forget mismatched timing. Grady goes beyond AI dubbing with lip-sync that aligns translated speech perfectly with facial movements. This makes your localized content feel native, keeping audiences engaged.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Avatars Speak Section */}
        <section className="py-24 bg-white px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Not just your videos —<br/>
                  your avatars speak 175+<br/>
                  Languages too
                </h2>
                <p className="text-lg text-gray-600">
                  Two ways to go global. Translate your existing videos or YouTube links into 175+ languages with accurate voice and lip sync. Or create avatar videos in multiple languages from day one using our script-to-video tool. Powered by advanced facial animation and voice sync technology, every video feels authentic.
                </p>
              </div>
              <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-gray-800 transition-colors">
                Get started for free <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                {[
                  { flag: "🇺🇸", name: "English" },
                  { flag: "🇩🇪", name: "German" },
                  { flag: "🇨🇳", name: "Chinese" },
                  { flag: "🇪🇸", name: "Spanish" }
                ].map((lang, i) => (
                  <button key={i} className={`w-full flex items-center justify-between p-6 rounded-2xl border transition-all ${i === 0 ? 'bg-[#00b8ff] text-white border-[#00b8ff] shadow-lg' : 'bg-white text-gray-900 border-gray-100 hover:border-gray-200'}`}>
                    <div className="flex items-center gap-4 font-bold">
                      <span className="text-2xl">{lang.flag}</span> {lang.name}
                    </div>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ))}
              </div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                <img src="https://picsum.photos/seed/avatar-speak/800/600" alt="Avatar Speaking" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <Play className="w-8 h-8 text-gray-900 ml-1" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12 mt-24">
              <div>
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-4">Translate existing videos in minutes</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Have footage you already love? Upload any video or paste a YouTube link, and Grady will translate it into 175+ languages, preserving the original speaker's voice, lip movements, and expressions. No reshoots needed.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mb-6 text-cyan-600">
                  <Languages className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-4">Create avatar videos in any language</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Generate multilingual content from scratch. Write one script, pick your avatar, and produce videos in multiple languages simultaneously, perfect for scaling across global markets without recording a single take.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-purple-600">
                  <Smile className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-4">Avatars that actually feel human</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Choose from a wide range of pre-built personalities or create your own with AI. With Voice Director and Voice Mirroring, every avatar delivers natural tone, emotion, and pacing, so your videos never feel robotic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Translate Section */}
        <section className="py-24 bg-gray-50 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                How to <span className="text-green-500">translate a<br/>video</span> with Grady
              </h2>
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-gray-800 transition-colors">
                Get started for free <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "Step 1",
                  title: "Upload your video from your device or paste a YouTube link. Select the translation engine and choose up to 10 languages to translate simultaneously.",
                  img: "https://picsum.photos/seed/step1/400/300",
                  btn: "Upload Video"
                },
                {
                  step: "Step 2",
                  title: "Hit translate and let Grady do the work. Your existing video will be translated with matched voice, lip sync, and expressions — ready to publish.",
                  img: "https://picsum.photos/seed/step2/400/300",
                  btn: "Translate"
                },
                {
                  step: "Step 3",
                  title: "Want more control? Click Edit & Review to proofread your translated script before finalizing and make sure every word lands exactly right.",
                  img: "https://picsum.photos/seed/step3/400/300",
                  btn: "Publish"
                }
              ].map((step, i) => (
                <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col">
                  <div className="text-xs font-bold text-green-500 uppercase tracking-widest mb-4">{step.step}</div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-8">{step.title}</p>
                  <div className="mt-auto relative rounded-2xl overflow-hidden aspect-video">
                    <img src={step.img} alt={step.step} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="bg-green-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                        {step.btn}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-24 bg-green-50 rounded-[3rem] p-12 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="text-green-500 text-6xl font-serif mb-6">“</div>
                <h3 className="text-3xl font-bold mb-4">Trivago saves 50% on post production time</h3>
                <p className="text-gray-600 mb-8">
                  Trivago leveraged Grady to localize their TV ads across 30 markets, cutting post-production time in half and saving 3-months per campaign.
                </p>
                <div className="flex items-center gap-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Trivago_logo.svg" alt="Trivago" className="h-6" />
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative aspect-video">
                  <img src="https://picsum.photos/seed/trivago/800/450" alt="Trivago Case Study" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                      <Play className="w-6 h-6 text-gray-900 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Numbers Speak Section */}
        <section className="py-24 bg-white px-8 text-center">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The numbers speak for<br/>themselves
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              The impact is clear. Businesses achieve real results with Grady's video translator. By translating videos instantly, you can save both money and time while effortlessly expanding your global reach.
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-gray-800 transition-colors">
              Get started for free <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-12 rounded-[2.5rem]">
              <div className="text-5xl font-bold mb-4">80%</div>
              <p className="text-sm text-gray-500 font-medium">reduction in video translation costs</p>
            </div>
            <div className="bg-[#00b8ff] text-white p-12 rounded-[2.5rem] shadow-xl shadow-[#00b8ff]/20">
              <div className="text-5xl font-bold mb-4">30</div>
              <p className="text-sm text-white/80 font-medium">markets localized instantly</p>
            </div>
            <div className="bg-gray-50 p-12 rounded-[2.5rem]">
              <div className="text-5xl font-bold mb-4">1 day</div>
              <p className="text-sm text-gray-500 font-medium">per video instead of weeks or months</p>
            </div>
          </div>
        </section>

        {/* Enterprise Features Section */}
        <section className="py-24 bg-gray-900 text-white px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-xs font-bold tracking-wider uppercase mb-6">
                  Enterprise Ready
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Scale your global<br/>
                  content with <span className="text-[#00b8ff]">Enterprise Control</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Settings className="w-6 h-6 text-[#00b8ff]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Custom Voice Cloning</h4>
                      <p className="text-gray-400 text-sm">Create a unique digital voice that matches your brand's identity across all languages.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6 text-[#00b8ff]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Proofreading & Editing</h4>
                      <p className="text-gray-400 text-sm">Review and refine translated scripts before finalizing to ensure 100% accuracy.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Globe className="w-6 h-6 text-[#00b8ff]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">API Integration</h4>
                      <p className="text-gray-400 text-sm">Automate your translation workflow by integrating Grady directly into your CMS or platform.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#00b8ff]/20 to-transparent rounded-[3rem] blur-2xl" />
                <div className="bg-[#222] rounded-[2.5rem] p-8 border border-white/5 relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">Global Campaign</div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-widest">30+ Languages</div>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-[10px] font-bold uppercase">Active</div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { lang: "Spanish", progress: 100 },
                      { lang: "French", progress: 100 },
                      { lang: "German", progress: 85 },
                      { lang: "Japanese", progress: 40 }
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">{item.lang}</span>
                          <span>{item.progress}%</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-[#00b8ff] transition-all duration-1000" style={{ width: `${item.progress}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-8 bg-[#00b8ff] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#00a3e0] transition-colors">
                    View Enterprise Dashboard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 bg-white px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Translation for <span className="text-[#00b8ff]">every industry</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Break language barriers and reach your audience wherever they are. Grady's video translator is built for creators, educators, and businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Marketing & Ads",
                  desc: "Localize your video campaigns for international markets in minutes, not weeks.",
                  icon: <Zap className="w-6 h-6" />,
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  title: "E-Learning",
                  desc: "Make your educational content accessible to students worldwide with accurate dubbing.",
                  icon: <FileText className="w-6 h-6" />,
                  color: "bg-green-50 text-green-600"
                },
                {
                  title: "Corporate Training",
                  desc: "Onboard global teams with consistent messaging in their native languages.",
                  icon: <Settings className="w-6 h-6" />,
                  color: "bg-purple-50 text-purple-600"
                },
                {
                  title: "Social Media",
                  desc: "Go viral globally by translating your shorts, reels, and TikToks instantly.",
                  icon: <Globe className="w-6 h-6" />,
                  color: "bg-orange-50 text-orange-600"
                }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[2rem] border border-gray-100 hover:border-[#00b8ff] transition-all group">
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

        {/* Capabilities Table */}
        <section className="py-24 bg-white px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Video Translator <span className="text-[#00b8ff]">Capabilities</span>
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to localize your video content at scale.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#00b8ff]" /> Translation & Localization
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { label: "Languages", value: "175+ languages & dialects" },
                      { label: "Subtitles", value: "Auto-generated & editable" },
                      { label: "Proofreading", value: "Enterprise-grade editor" },
                      { label: "Multi-language", value: "Translate up to 10 at once" }
                    ].map((item, i) => (
                      <li key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                        <span className="text-gray-500">{item.label}</span>
                        <span className="font-medium text-gray-900 text-right">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Mic2 className="w-5 h-5 text-[#00b8ff]" /> Audio & Sync
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { label: "Voice Cloning", value: "Zero-shot, high fidelity" },
                      { label: "Lip Sync", value: "Sub-pixel accurate" },
                      { label: "Background Audio", value: "Preserved & isolated" },
                      { label: "Emotion", value: "Voice-driven facial expressions" }
                    ].map((item, i) => (
                      <li key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                        <span className="text-gray-500">{item.label}</span>
                        <span className="font-medium text-gray-900 text-right">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 bg-gray-50 px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Traditional vs. <span className="text-[#00b8ff]">Grady</span>
              </h2>
              <p className="text-lg text-gray-600">
                See why thousands of businesses are switching to AI-powered video translation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100">
                <h4 className="text-2xl font-bold mb-8 text-gray-400">Traditional Method</h4>
                <ul className="space-y-6">
                  {[
                    "Hire translators for each language",
                    "Book recording studios and voice actors",
                    "Manual video editing and lip-syncing",
                    "Weeks or months of production time",
                    "Thousands of dollars per video"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-500">
                      <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-10 rounded-[2.5rem] border-2 border-[#00b8ff] shadow-xl shadow-[#00b8ff]/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#00b8ff] text-white px-6 py-2 rounded-bl-2xl text-xs font-bold uppercase tracking-widest">
                  Recommended
                </div>
                <h4 className="text-2xl font-bold mb-8 text-gray-900">Grady AI Translator</h4>
                <ul className="space-y-6">
                  {[
                    "Instant translation into 175+ languages",
                    "AI voice cloning preserves original tone",
                    "Automated sub-pixel perfect lip-sync",
                    "Minutes from upload to final video",
                    "Fraction of the cost of traditional methods"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-900 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#00b8ff] shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Used By Brands Section */}
        <section className="py-24 bg-gray-50 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Used by <span className="text-[#00b8ff]">top brands</span> to<br/>
                  reach global audiences
                </h2>
                <p className="text-lg text-gray-600">
                  See how businesses like yours scale content creation and drive growth with the most innovative AI video platform on the market.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-colors">
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
                <button className="w-12 h-12 rounded-full bg-[#00b8ff] text-white flex items-center justify-center hover:bg-[#00a3e0] transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                <div className="p-12 flex-1">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Miro_logo.svg" alt="Miro" className="h-6 mb-8" />
                  <p className="text-lg text-gray-600 italic mb-8">
                    "It has empowered our writers to have the same level of creativity in the process that I do when it comes to visual storytelling mediums."
                  </p>
                  <div>
                    <div className="font-bold">Steve Sowray</div>
                    <div className="text-sm text-gray-500">Learning Media Designer</div>
                  </div>
                </div>
                <div className="bg-black aspect-video relative group">
                  <img src="https://picsum.photos/seed/miro/800/450" alt="Miro Case Study" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                <div className="p-12 flex-1">
                  <h3 className="text-2xl font-bold mb-8">Vision Creative Labs</h3>
                  <p className="text-lg text-gray-600 italic mb-8">
                    "The magic moment for me was when we had a film that I've been doing every week. Suddenly, we realized I could write a script, send it in, and never have to go in front of a camera again."
                  </p>
                  <div>
                    <div className="font-bold">Roger Hirst</div>
                    <div className="text-sm text-gray-500">Co-Founder</div>
                  </div>
                </div>
                <div className="bg-black aspect-video relative group">
                  <img src="https://picsum.photos/seed/vision/800/450" alt="Vision Case Study" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap justify-center items-center gap-12 opacity-60">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <span className="font-bold">4.8</span>
                <span className="text-gray-400 text-sm">1,000+ reviews</span>
              </div>
              <div className="flex gap-8">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/G2_Crowd_logo.svg/1200px-G2_Crowd_logo.svg.png" alt="G2" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Capterra_logo.svg/1280px-Capterra_logo.svg.png" alt="Capterra" className="h-6" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white px-8">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3 sticky top-32">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Have questions?<br/>We have answers.
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              {[
                {
                  q: "What is a video translator?",
                  a: "A video translator is a tool that converts audio, voiceover, or subtitles in a video into another language, helping content reach a wider audience. This process allows content creators, businesses, and organizations to expand their reach globally by overcoming language barriers."
                },
                {
                  q: "What are the different types of video translators?",
                  a: "There are different types of video translators. These include subtitling, dubbing, voice-over, and SDK. Other types are live captioning, sign language interpreting, audio description, and AI-powered translation tools."
                },
                {
                  q: "Is there an app that will automatically translate video?",
                  a: "Yes, Grady can automatically translate videos into 175+ languages & dialects. It preserves your unique voice through cloning and syncs lip movements, making translations look natural and authentic for global audiences."
                },
                {
                  q: "Does Grady have a free video translator?",
                  a: "Yes, Grady offers a free plan that allows you to translate up to 3 videos per month, each up to 3 minutes long. This includes features like AI-generated subtitles, AI voiceovers, and lip-syncing in over 175+ languages and dialects."
                },
                {
                  q: "How accurate are video translators?",
                  a: "Grady's video translator is highly accurate, delivering natural lip-sync and voice cloning for clear audio and common languages, with enterprise proofreading available for maximum precision."
                },
                {
                  q: "What is the best online video translator in 2025?",
                  a: "Grady is widely considered one of the best AI video translators. It supports video localization, voice cloning, and translation video functions across 175+ languages and dialects."
                },
                {
                  q: "What makes AI-powered video translation different from subtitles?",
                  a: "AI video translation is different from subtitles because it goes beyond simply displaying translated text on the screen. It translates your voice into another language, recreates it using voice cloning, and syncs it seamlessly with the video."
                },
                {
                  q: "How do AI avatars make AI video translation more engaging?",
                  a: "AI avatars create a digital version of you that mirrors your gestures, expressions, and speech patterns. Whether you are presenting, storytelling, or teaching, your avatar makes multilingual content feel personal and engaging without the need for extra recordings, voiceovers, or dubbing."
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#00b8ff]/20 via-[#60d0e4]/20 to-[#f8e8fa]/50 -z-10" />
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
