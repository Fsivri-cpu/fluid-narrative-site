import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import VirtualAssistantSection from '@/components/sections/VirtualAssistantSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import FAQ from '@/components/FAQ';

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
      
      <HeroSection />
      <VirtualAssistantSection />
      <CaseStudiesSection />
      <ExperienceSection 
        maxTokens={maxTokens}
        temperature={temperature}
        onMaxTokensChange={setMaxTokens}
        onTemperatureChange={setTemperature}
      />
      <FAQ />
    </div>
  );
};

export default Index;
