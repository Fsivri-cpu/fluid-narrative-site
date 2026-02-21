import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sun, MapPin, Shield, Camera, BarChart3, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Sunny = () => {
  const screenshots = [
    { src: "/lovable-uploads/sunny-screenshot-1.png", alt: "Sun-kissed without the risk" },
    { src: "/lovable-uploads/sunny-screenshot-2.png", alt: "Perfect tan - My Journey" },
    { src: "/lovable-uploads/sunny-screenshot-3.png", alt: "Custom routine" },
    { src: "/lovable-uploads/sunny-screenshot-4.png", alt: "Smart UV tracking" },
    { src: "/lovable-uploads/sunny-screenshot-5.png", alt: "Tan safely settings" },
  ];

  const features = [
    {
      icon: Sun,
      title: "Personalized Tanning Plan",
      description: "Sunny creates a tanning routine tailored to your skin tone, sensitivity, desired shade, and local UV conditions."
    },
    {
      icon: MapPin,
      title: "Real-Time UV Index",
      description: "Stay informed with accurate UV Index data based on your location. View current UV levels, daily peaks, and safe exposure duration."
    },
    {
      icon: Shield,
      title: "Sun Safety Guidance",
      description: "Get reminders to take breaks, reapply sunscreen, and avoid high-risk exposure times to reduce the risk of sunburn."
    },
    {
      icon: Camera,
      title: "On-Device Skin Analysis",
      description: "Process your facial image locally on your device to estimate skin tone and track changes over time. No data is uploaded."
    },
    {
      icon: BarChart3,
      title: "Track Your Progress",
      description: "Follow your tanning progress with history logs, exposure tracking, and personalized insights each week."
    },
    {
      icon: Globe,
      title: "Worldwide UV Index",
      description: "Check UV levels anywhere in the world — useful for travel, beach days, and outdoor planning."
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
                  src="/lovable-uploads/sunny-ai-icon.png" 
                  alt="Sunny" 
                  className="w-20 h-20 rounded-2xl"
                />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    Sunny
                  </h1>
                  <p className="text-gray-400">UV & Tanning Tracker</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                  Coming Soon
                </Badge>
                <Badge variant="outline" className="border-cyan-500 text-cyan-400">Weather</Badge>
                <Badge variant="outline" className="border-purple-500 text-purple-400">Lifestyle</Badge>
              </div>
              
              <h2 className="text-2xl font-semibold text-orange-400 mb-4">
                Tan Smarter. Glow Safely.
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Sunny is a smart UV and tanning assistant that helps you achieve a beautiful tan while keeping your skin protected. Get personalized tanning plans, real-time UV Index updates, sun-safety reminders, and skin insights — all in one app.
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-400 to-orange-600 hover:opacity-90 text-white px-8 opacity-70"
                disabled
              >
                Coming Soon
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-64 md:w-72 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-orange-500/30 border border-orange-500/20">
                <img 
                  src="/lovable-uploads/sunny-hero-screenshot.png" 
                  alt="Sunny App Screenshot" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-[95rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">App Preview</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Take a look at Sunny's beautiful interface and powerful features.
            </p>
          </motion.div>

          <div className="flex gap-6 justify-center flex-wrap lg:flex-nowrap pb-8">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <div className="w-64 xl:w-72 rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/20 border border-orange-500/20">
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
              Everything you need to tan safely and achieve your perfect glow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-orange-400" />
              <h2 className="text-2xl font-bold">Privacy First</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Sunny processes facial information only on your device. No biometric data is collected, uploaded, or shared. All data is removed automatically when you delete the app.
            </p>
          </motion.div>
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
              Get Ready to Glow
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Sunny is coming soon. Be the first to know when it launches.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-400 to-orange-600 hover:opacity-90 text-white px-8 opacity-70"
              disabled
            >
              Coming Soon
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Legal Links */}
      <section className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <Link to="/privacy-policy/sunny" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/terms-conditions/sunny" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sunny;
