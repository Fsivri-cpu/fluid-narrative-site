
import React from 'react';
import { motion } from 'framer-motion';

const VirtualAssistantSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
          alt="Giselle Virtual Assistant" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/80"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4"
        >
          <div className="flex justify-center mb-8">
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Meet Giselle, Your Virtual Customer Support Assistant
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10">
            Available 24/7, with the knowledge and empathy to handle all your customer inquiries.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VirtualAssistantSection;
