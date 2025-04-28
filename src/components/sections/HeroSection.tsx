
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full bg-black/80 z-10"></div>
      <video 
        className="absolute inset-0 w-full h-full object-cover opacity-50" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/lovable-uploads/virtual-employee.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="relative z-20 flex items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-[0_0_35px_rgba(255,255,255,0.5)] relative">
            <span className="relative inline-block">
              Virtual Workforce
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent blur-sm"></div>
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent blur-md"></div>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            Take your business one step ahead with intelligent, fast, and personalized customer service solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                Get Started <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
