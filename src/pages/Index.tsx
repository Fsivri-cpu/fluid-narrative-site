import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Cpu, Headphones, BarChart, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChatInterface } from '@/components/chat/ChatInterface';
import { AssistantSettings } from '@/components/chat/AssistantSettings';
import { LottiePlayer } from '@/components/ui/lottie-player';
import FAQ from '@/components/FAQ';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 30,
    restDelta: 0.001
  });

  const [maxTokens, setMaxTokens] = useState(1000);
  const [temperature, setTemperature] = useState(0.7);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -100px 0px" });
    
    sections.forEach(section => {
      observer.observe(section);
      section.classList.add('section-transition');
    });
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
        style={{ scaleX }}
      />

      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-black/60 z-10"></div>
        <video 
          className="absolute inset-0 w-full h-full object-cover" 
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Virtual Workforce
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
              Take your business one step ahead with intelligent, fast, and personalized customer service solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center">
                  Get Started <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

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
              {/* Lottie animation will go here - Example: */}
              {/* <LottiePlayer animationData={yourAnimationData} className="w-64 h-64" /> */}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Meet Giselle, Your Virtual Customer Support Assistant
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10">
              Available 24/7, with the knowledge and empathy to handle all your customer inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Giselle in Action</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Try our AI assistant now and customize its behavior to match your needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="w-full">
              <ChatInterface maxTokens={maxTokens} temperature={temperature} />
            </div>
            <div className="w-full">
              <AssistantSettings
                maxTokens={maxTokens}
                temperature={temperature}
                onMaxTokensChange={setMaxTokens}
                onTemperatureChange={setTemperature}
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
};

export default Index;
