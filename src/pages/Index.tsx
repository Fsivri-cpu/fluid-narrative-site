import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, MessageSquare, Star, Award, Car, Utensils, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChatInterface } from '@/components/chat/ChatInterface';
import { AssistantSettings } from '@/components/chat/AssistantSettings';
import { LottiePlayer } from '@/components/ui/lottie-player';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

const caseStudies = [
  {
    industry: "Automotive Dealership",
    description: "An automotive dealership improved customer service by implementing an AI assistant with vehicle inventory knowledge, enabling instant answers about vehicles and test drive scheduling. This allowed sales staff to focus on serious buyers, increasing efficiency and customer satisfaction.",
    icon: Car,
    color: "blue-500"
  },
  {
    industry: "Restaurant",
    description: "A restaurant streamlined operations by using an AI system to handle menu, ingredient, and business hours inquiries. This automation freed up staff to focus on improving the dining experience while ensuring customers receive immediate, accurate information.",
    icon: Utensils,
    color: "amber-500"
  },
  {
    industry: "International Business",
    description: "A Dutch entrepreneur broke through language barriers by implementing an AI assistant that communicates in 29+ languages. This expansion enabled reaching international customers and capturing previously missed opportunities in the global market.",
    icon: Globe,
    color: "green-500"
  }
];

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 30,
    restDelta: 0.001
  });

  const [maxTokens, setMaxTokens] = useState(1000);
  const [temperature, setTemperature] = useState(0.7);
  const [activeTab, setActiveTab] = useState("all");

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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Meet Giselle, Your Virtual Customer Support Assistant
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10">
              Available 24/7, with the knowledge and empathy to handle all your customer inquiries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/40 to-black backdrop-blur-3xl"></div>
        <motion.div 
          className="container mx-auto px-4 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Trusted by Industry Leaders
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-200/90 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              See how StriveX is transforming customer support across industries
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full bg-${study.color}/20 text-${study.color}`}>
                        <study.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-white text-xl">{study.industry}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-200/90">{study.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="experience-section" className="py-16 bg-black text-white">
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
