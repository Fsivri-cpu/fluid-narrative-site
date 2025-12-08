import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Download, Shield, Bell, TrendingDown, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Jabsy = () => {
  const screenshots = [
    { src: "/lovable-uploads/jabsy-screenshot-1.png", alt: "Track Your GLP-1 Journey" },
    { src: "/lovable-uploads/jabsy-screenshot-2.png", alt: "Remember Your Transformation" },
    { src: "/lovable-uploads/jabsy-screenshot-3.png", alt: "Snap & Log Meals in Seconds" },
    { src: "/lovable-uploads/jabsy-screenshot-4.png", alt: "Never Miss a Dose" },
    { src: "/lovable-uploads/jabsy-screenshot-5.png", alt: "Manage Side Effects" },
    { src: "/lovable-uploads/jabsy-screenshot-6.png", alt: "See Your Daily Progress" },
  ];

  const features = [
    {
      icon: Bell,
      title: "Shot Planner & Reminders",
      description: "Never miss a dose with smart reminders and injection site rotation tracking."
    },
    {
      icon: TrendingDown,
      title: "Weight-Loss Insights",
      description: "Track your progress with detailed charts, trends, and personalized insights."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "All your health data stays on your device. No cloud uploads, no tracking."
    },
    {
      icon: Smartphone,
      title: "Smart Dashboard",
      description: "Everything you need in one place: shots, weight, macros, and more."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/lovable-uploads/glp1-tracker-icon.png" 
                  alt="Jabsy" 
                  className="w-20 h-20 rounded-2xl"
                />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Jabsy
                  </h1>
                  <p className="text-gray-400">GLP-1 Shot Tracker</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">5.0</span>
                </div>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">100+ Downloads</span>
                <Badge variant="outline" className="border-blue-500 text-blue-400">Health & Fitness</Badge>
                <Badge variant="outline" className="border-purple-500 text-purple-400">Lifestyle</Badge>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Track every GLP-1 shot, weight change and macro in one place. Smart dashboard for Ozempic®, Wegovy®, Mounjaro® & more.
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 text-white px-8"
                onClick={() => window.open('https://apps.apple.com/tr/app/jabsy-glp1-shot-tracker/id6748824853', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download on App Store
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-64 md:w-72 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-500/30 border border-blue-500/20">
                <img 
                  src="/lovable-uploads/jabsy-hero-screenshot.png" 
                  alt="Jabsy App Screenshot" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">App Preview</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Take a look at Jabsy's intuitive interface and powerful tracking features.
            </p>
          </motion.div>

          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 snap-center"
              >
                <div className="w-72 md:w-80 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-blue-500/20">
                  <img 
                    src={screenshot.src} 
                    alt={screenshot.alt}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to manage your GLP-1 journey effectively and safely.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your GLP-1 Journey Today
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of users managing their GLP-1 medication with Jabsy.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 text-white px-8"
              onClick={() => window.open('https://apps.apple.com/tr/app/jabsy-glp1-shot-tracker/id6748824853', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download on App Store
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Jabsy;
