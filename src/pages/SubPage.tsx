import { useParams, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export default function SubPage() {
  const location = useLocation();
  const path = location.pathname.split('/').filter(Boolean);
  
  // Create a title from the path
  const title = path[path.length - 1]
    ?.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') || 'Page Not Found';

  const category = path.length > 1 ? path[0].charAt(0).toUpperCase() + path[0].slice(1) : '';

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-[#00b8ff]/30">
      <Navbar />
      
      <main className="pt-40 pb-20 px-8 max-w-7xl mx-auto min-h-screen flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {category && (
            <div className="text-sm font-semibold text-[#00b8ff] tracking-wider uppercase mb-4">
              {category}
            </div>
          )}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
            {title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            This is a placeholder page for {title}. In a complete application, this page would contain detailed information, interactive elements, and specific content related to this topic.
          </p>
          
          <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50">
              <p className="text-gray-400 font-medium">Content coming soon</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
