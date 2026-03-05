import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  Video, 
  Wand2, 
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
  Upload,
  Type,
  Settings,
  Globe,
  Twitter,
  Youtube,
  Linkedin,
  Instagram
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const ImageToVideo = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeStep, setActiveStep] = useState(0);

  const faqs = [
    {
      question: "What is Image to Video AI?",
      answer: "Image to Video AI turns static visuals into short, AI-generated videos. Upload an image, enter a script, and our AI animates facial expressions and adds voice, perfect for creating a video from a single photo."
    },
    {
      question: "Can I use this image to video tool for social media?",
      answer: "Yes, this AI video generator is perfect for creating short videos, explainers, and product showcase videos for social platforms. It's built for fast, engaging videos that tell your story clearly."
    },
    {
      question: "Does the Image to Video tool support multiple image formats?",
      answer: "We support standard formats like JPG, PNG, and WEBP. The platform automatically adjusts resolution and video quality to fit your export settings."
    },
    {
      question: "Can I animate faces from old photos?",
      answer: "Yes. Using our photo to video AI and facial mapping engine, you can turn old or static images into talking AI videos with AI-generated movement and synced voice."
    },
    {
      question: "Is this the best free tool to try image to video?",
      answer: "We offer a free tier to try our Image to Video AI so you can explore features and generate your first video without paying. While not completely unlimited, it's one of the best free starting points."
    }
  ];

  const steps = [
    {
      title: "Upload Your Image",
      desc: "Start by uploading your reference photo or custom graphic. The AI uses your static picture as the visual foundation for your video.",
      icon: <Upload className="w-5 h-5" />
    },
    {
      title: "Choose an AI Model & Prompt",
      desc: "Select from top-tier AI video generation models. Type a custom text prompt to describe the dynamic motion.",
      icon: <Wand2 className="w-5 h-5" />
    },
    {
      title: "Customize Visuals & Style",
      desc: "Add generated B-roll, templates, text, and background music. Animate overlays, add transitions between scenes.",
      icon: <Settings className="w-5 h-5" />
    },
    {
      title: "Generate & Share",
      desc: "Export your mp4 and share it instantly across your website, social platforms, or learning systems.",
      icon: <Play className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-amber-200 selection:text-amber-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>New: Ultra-realistic motion</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              Image to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-violet-600">Video AI</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-stone-600 mb-8 leading-relaxed"
            >
              Turn any photo into a stunning video with simple AI tools. Add motion, clean text, and music to instantly upgrade your visuals. Perfect for social posts, ads, and creative storytelling.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                <input 
                  type="email" 
                  placeholder="Enter your email..." 
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white shadow-sm"
                />
              </div>
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-violet-600 text-white font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:-translate-y-0.5 whitespace-nowrap">
                Get Started for Free
              </button>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-sm text-stone-500 mt-4"
            >
              By continuing, you agree to Grady's Terms.
            </motion.p>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-200 to-violet-200 rounded-[2rem] blur-3xl opacity-50 transform rotate-3 scale-105"></div>
            <div className="relative bg-white border border-stone-200 rounded-[2rem] shadow-2xl overflow-hidden">
              <div className="p-4 border-b border-stone-100 bg-stone-50/50 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-stone-700 mb-2">1. Upload Image</label>
                  <div className="border-2 border-dashed border-stone-200 rounded-xl p-8 text-center hover:border-amber-400 transition-colors cursor-pointer bg-stone-50">
                    <ImageIcon className="w-8 h-8 text-stone-400 mx-auto mb-3" />
                    <p className="text-sm text-stone-600">Drag & drop or click to upload</p>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-stone-700 mb-2">2. Type your script</label>
                  <textarea 
                    className="w-full h-32 p-4 rounded-xl border border-stone-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none resize-none bg-stone-50"
                    placeholder="Enter your script - your avatar will speak it naturally."
                  ></textarea>
                </div>
                <button className="w-full py-4 rounded-xl bg-stone-900 text-white font-medium flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors">
                  <Wand2 className="w-5 h-5" /> Generate Video
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-stone-200">
            <div className="py-4">
              <div className="text-4xl font-bold text-stone-900 mb-2">108M+</div>
              <div className="text-sm text-stone-500 uppercase tracking-wider font-medium">Videos Generated</div>
            </div>
            <div className="py-4">
              <div className="text-4xl font-bold text-stone-900 mb-2">82M+</div>
              <div className="text-sm text-stone-500 uppercase tracking-wider font-medium">Avatars Generated</div>
            </div>
            <div className="py-4">
              <div className="text-4xl font-bold text-stone-900 mb-2">15M+</div>
              <div className="text-sm text-stone-500 uppercase tracking-wider font-medium">Videos Translated</div>
            </div>
          </div>
          
          <div className="mt-12 pt-12 border-t border-stone-100">
            <p className="text-center text-sm text-stone-400 font-medium uppercase tracking-widest mb-8">Trusted by millions worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
              {/* Placeholder logos */}
              <div className="text-xl font-bold font-serif">NVIDIA</div>
              <div className="text-xl font-bold">Amazon</div>
              <div className="text-xl font-bold italic">Spotify</div>
              <div className="text-xl font-bold tracking-tighter">Netflix</div>
              <div className="text-xl font-bold uppercase">Salesforce</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Bring Any Image to Life,<br/><span className="text-amber-500">No Camera Required</span></h2>
            <p className="text-lg text-stone-600 mb-8">
              Turn static photos into engaging video content at speed. Simply upload your image, a portrait, historical photo, or AI generated character, add your script or audio, and generate studio-quality AI voiceovers with perfectly synced facial movements.
            </p>
            <Link to="/app" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-800 transition-colors">
              Get started for free <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ImageIcon className="w-6 h-6 text-amber-500" />,
                title: "Accessibility",
                desc: "Animate Photos with Zero Animation Skills. No complex rigging or video editing skills required."
              },
              {
                icon: <Zap className="w-6 h-6 text-violet-500" />,
                title: "Efficiency",
                desc: "Streamline Your Creative Workflow. Transform any image using AI tools into dynamic talking avatars instantly."
              },
              {
                icon: <Layers className="w-6 h-6 text-emerald-500" />,
                title: "Variety",
                desc: "Dynamic Expressions & Complete Creative Control. Move beyond flat, static images with custom motion prompts."
              },
              {
                icon: <DollarSign className="w-6 h-6 text-blue-500" />,
                title: "Cost-effectiveness",
                desc: "Studio-Quality Results at a Fraction of the Cost. Produce engaging e-learning modules or social media content."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-stone-50 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices - Dark Section */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Best Practices for<br/>Converting Images to Video</h2>
              <p className="text-stone-400 text-lg mb-12">
                To get the best results out of Grady, combine the simplicity of the Photo Avatar tool with the precision of AI Studio. Use a single static portrait as your foundation, map dynamic audio and motion to it, and then refine the output for a lifelike, professional-quality finish.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Start with the Right Image", desc: "Skip the complex 3D rigging or camera setups. Upload a photo or graphic, a high-resolution professional portrait." },
                  { title: "Drive with Audio & Motion", desc: "Give your still image a voice and personality. Pair your photo with a custom voice clone or choose from our library." },
                  { title: "Refine in AI Studio", desc: "Open your animated photo in the video editor, AI Studio, for granular control. Utilize the background remover tool." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-violet-500/20 blur-3xl rounded-full"></div>
              <div className="relative bg-stone-800 border border-stone-700 rounded-2xl overflow-hidden shadow-2xl">
                {/* Mockup UI */}
                <div className="h-12 border-b border-stone-700 flex items-center px-4 gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-stone-600"></div>
                    <div className="w-3 h-3 rounded-full bg-stone-600"></div>
                    <div className="w-3 h-3 rounded-full bg-stone-600"></div>
                  </div>
                  <div className="flex-1 bg-stone-900 rounded-md h-6"></div>
                </div>
                <div className="p-8">
                  <div className="aspect-video bg-stone-900 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center border border-stone-700">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-50 mix-blend-luminosity"></div>
                    <Play className="w-16 h-16 text-white/50 relative z-10" />
                    
                    {/* UI Overlays */}
                    <div className="absolute bottom-4 left-4 right-4 h-12 bg-stone-800/80 backdrop-blur rounded-lg border border-stone-600 flex items-center px-4 gap-4">
                      <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center"><Type className="w-4 h-4 text-white" /></div>
                      <div className="h-2 flex-1 bg-stone-700 rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Alternating Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-6">Turn Text Scripts into<br/>Production-Ready Professional Videos Instantly</h2>
            <p className="text-lg text-stone-600">
              Grady's AI video generator from images automates the visual production process, turning your reference photos into high-quality, dynamic video clips.
            </p>
          </div>

          <div className="space-y-24">
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="absolute inset-0 bg-amber-100 rounded-[3rem] transform -rotate-3 scale-105"></div>
                <img src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80&w=800" alt="Ultra-Realistic AI" className="relative rounded-[3rem] shadow-xl w-full object-cover aspect-square" />
              </div>
              <div className="order-1 md:order-2 md:pl-12">
                <h3 className="text-3xl font-bold mb-4">Ultra-Realistic AI Video Models</h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Access industry-leading generative AI video engines directly inside AI Studio. Choose from integrated AI models to transform static images into breathtaking AI-generated videos with fluid, ultra-realistic motion and environments.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:pr-12">
                <h3 className="text-3xl font-bold mb-4">Consistent Content at Scale</h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Maintain visual and brand consistency across hundreds of videos. Upload your custom graphics, product photos, or AI-generated art as reference images to generate daily social media content, training modules, or marketing scenes in minutes, not days.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-violet-100 rounded-[3rem] transform rotate-3 scale-105"></div>
                <div className="relative bg-white p-8 rounded-[3rem] shadow-xl border border-stone-100 aspect-square flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400" alt="Brand Asset 1" className="bg-stone-100 rounded-2xl h-32 w-full object-cover" />
                    <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=400" alt="Brand Asset 2" className="bg-stone-100 rounded-2xl h-32 w-full object-cover" />
                    <img src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&q=80&w=400" alt="Brand Asset 3" className="bg-stone-100 rounded-2xl h-32 w-full object-cover" />
                    <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=400" alt="Brand Asset 4" className="bg-stone-100 rounded-2xl h-32 w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="absolute inset-0 bg-emerald-100 rounded-[3rem] transform -rotate-3 scale-105"></div>
                <div className="relative bg-stone-900 p-8 rounded-[3rem] shadow-xl aspect-square flex flex-col">
                  <div className="flex-1 bg-stone-800 rounded-2xl mb-4 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" alt="B-Roll" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />
                    <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur p-3 rounded-lg border border-white/10 text-white text-sm">
                      "A group of dogs playing in the park"
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-3 bg-white text-stone-900 rounded-xl font-medium text-sm">Generate</button>
                    <button className="w-12 bg-stone-800 rounded-xl flex items-center justify-center text-white"><Settings className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 md:pl-12">
                <h3 className="text-3xl font-bold mb-4">Generate B-Roll & Visuals</h3>
                <p className="text-stone-600 text-lg leading-relaxed">
                  Stop searching for generic stock footage. The image-to-video AI allows you to upload an image and automatically generate highly relevant, moving B-roll and animations that perfectly match your narrative, speeding up your workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Used by 100,000+ teams who value quality, simplicity, and speed</h2>
            <p className="text-lg text-stone-600">
              See how businesses like yours scale video creation and drive growth with the most innovative image-to-video AI platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <MonitorPlay className="w-6 h-6" />, title: "Marketing & Ads", desc: "Create eye-catching short-form video clips for YouTube, TikTok, and Instagram campaigns." },
              { icon: <Users className="w-6 h-6" />, title: "Training & Onboarding", desc: "Upload static diagrams or office photos, choose your animation style, and create engaging B-roll." },
              { icon: <Video className="w-6 h-6" />, title: "YouTube & Social Media", desc: "Convert AI images into dynamic videos using Grady. Export in the right format for every platform." },
              { icon: <ShoppingCart className="w-6 h-6" />, title: "E-Commerce", desc: "Transform static product photography into dynamic video shorts. Generate cinematic product videos." },
              { icon: <GraduationCap className="w-6 h-6" />, title: "Educators & Course Creators", desc: "Build engaging tutorial and lecture videos by animating textbook graphics, diagrams, and historical photos." },
              { icon: <MessageSquare className="w-6 h-6" />, title: "Sales & Personalized Outreach", desc: "Upload a prospect's website screenshot or company logo, add motion, and generate highly personalized outreach clips." }
            ].map((useCase, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border-t-4 border-t-amber-500 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Create Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">How to Create Video from an Image with Grady</h2>
            <p className="text-lg text-stone-600">
              Use your photos to bring your ideas to life and let the AI image-to-video generator turn your pictures into a stunning, professional cinematic result.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Steps Navigation */}
            <div className="lg:col-span-4 space-y-4">
              {steps.map((step, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all border-2 ${
                    activeStep === idx 
                      ? 'border-amber-500 bg-amber-50 shadow-md' 
                      : 'border-transparent hover:border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      activeStep === idx ? 'bg-amber-500 text-white' : 'bg-stone-200 text-stone-600'
                    }`}>
                      {idx + 1}
                    </div>
                    <h3 className={`text-lg font-bold ${activeStep === idx ? 'text-amber-900' : 'text-stone-900'}`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className={`text-sm pl-12 ${activeStep === idx ? 'text-amber-700' : 'text-stone-500'}`}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Step Visual */}
            <div className="lg:col-span-8">
              <div className="bg-stone-100 rounded-[2rem] p-8 h-full min-h-[500px] flex items-center justify-center border border-stone-200 relative overflow-hidden">
                {/* Abstract UI Representation based on active step */}
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
                
                <div className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden">
                  <div className="h-12 border-b border-stone-100 flex items-center px-4 justify-between bg-stone-50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs font-medium text-stone-500">Grady Studio</div>
                  </div>
                  
                  <div className="p-8">
                    {activeStep === 0 && (
                      <div className="border-2 border-dashed border-amber-300 bg-amber-50 rounded-xl p-12 text-center">
                        <Upload className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                        <h4 className="text-lg font-bold text-amber-900 mb-2">Drag and drop your image</h4>
                        <p className="text-amber-700 text-sm">Supports JPG, PNG, WEBP</p>
                      </div>
                    )}
                    {activeStep === 1 && (
                      <div className="space-y-6">
                        <div className="flex gap-4">
                          <div className="w-1/3 aspect-square bg-stone-200 rounded-xl overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" alt="Reference" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 space-y-4">
                            <div className="h-10 bg-stone-100 rounded-lg border border-stone-200 flex items-center px-4">
                              <span className="text-sm text-stone-500">Model: Ultra-Realistic v2</span>
                            </div>
                            <textarea className="w-full h-24 bg-stone-100 rounded-lg border border-stone-200 p-4 text-sm resize-none" placeholder="Enter prompt..."></textarea>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeStep === 2 && (
                      <div>
                        <div className="aspect-video bg-stone-900 rounded-xl mb-4 relative overflow-hidden">
                          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Preview" className="w-full h-full object-cover opacity-80" />
                          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                            <div className="bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-medium">Text Overlay</div>
                            <div className="bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-medium">Logo</div>
                          </div>
                        </div>
                        <div className="h-16 bg-stone-100 rounded-lg border border-stone-200 flex items-center px-4 gap-2">
                          <div className="w-8 h-8 bg-white rounded flex items-center justify-center shadow-sm"><Play className="w-4 h-4" /></div>
                          <div className="flex-1 h-8 bg-white rounded shadow-sm relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-amber-200/50 border-r border-amber-400"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeStep === 3 && (
                      <div className="text-center py-8">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 className="w-10 h-10 text-green-500" />
                        </div>
                        <h4 className="text-2xl font-bold mb-2">Video Generated!</h4>
                        <p className="text-stone-500 mb-8">Your video is ready to be shared with the world.</p>
                        <div className="flex justify-center gap-4">
                          <button className="px-6 py-2 bg-stone-900 text-white rounded-lg font-medium">Download 4K</button>
                          <button className="px-6 py-2 bg-stone-100 text-stone-900 rounded-lg font-medium border border-stone-200">Share Link</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-3xl font-bold mb-4">FAQs about<br/>Image to Video AI</h2>
              <p className="text-stone-600">Everything you need to know about turning your static images into dynamic videos.</p>
            </div>
            <div className="md:col-span-8 space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    activeFaq === idx ? 'border-amber-500 bg-white shadow-md' : 'border-stone-200 bg-white hover:border-amber-300'
                  }`}
                >
                  <button 
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  >
                    <span className={`font-semibold pr-8 ${activeFaq === idx ? 'text-amber-700' : 'text-stone-900'}`}>
                      {faq.question}
                    </span>
                    {activeFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-stone-400 flex-shrink-0" />
                    )}
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      activeFaq === idx ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-stone-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore Tools Grid */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore more <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-violet-600">AI powered</span> tools</h2>
            <p className="text-stone-600">Bring any photo to life with hyper-realistic voice and movement using Avatar IV.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Free AI Video Generator", "Video Translator", "Text to Video AI", "Audio to Video AI",
              "AI Lip Sync", "Faceswap AI", "AI Voice Generator", "AI UGC Ads",
              "Url to Video", "Script to Video", "AI Reel Generator", "Voice Cloning",
              "AI YouTube Video Maker", "AI TikTok Video Generator", "AI Caption Generator", "Add Text to Video",
              "AI Subtitle Generator", "Video Script Generator", "Add Photo to Video", "AI Video Compressor",
              "PPT to Video", "AI Video Template", "Merge Videos", "AI Video Actor", "Video Volume Booster"
            ].map((tool, idx) => (
              <a key={idx} href="#" className="flex items-center justify-between p-4 rounded-xl border border-stone-200 hover:border-amber-500 hover:shadow-sm transition-all group">
                <span className="text-sm font-medium text-stone-700 group-hover:text-amber-700">{tool}</span>
                <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-amber-500 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-violet-50 text-center border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold mb-6 text-stone-900">
            Start creating <br/>
            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-violet-600">Grady</span>
          </h2>
          <p className="text-xl text-stone-600 mb-10">
            Transform your ideas into professional videos with AI.
          </p>
          <Link to="/app" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-amber-500 to-violet-600 hover:from-amber-600 hover:to-violet-700 shadow-xl shadow-amber-500/25 transition-all hover:scale-105">
            Get started for free <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-16 px-8">
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
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-stone-500">Pricing</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-stone-500">Products</h4>
            <ul className="space-y-3 text-sm text-stone-400">
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

export default ImageToVideo;
