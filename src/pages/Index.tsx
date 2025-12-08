import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Smartphone, Code, Zap, Users, ArrowRight, Download, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const featuredApps = [
    {
      name: "Jabsy - GLP1 Shot Tracker",
      description: "Track every GLP-1 shot, weight change and macro in one place. Smart dashboard for Ozempic®, Wegovy®, Mounjaro® & more.",
      features: ["Shot Planner & Reminders", "Weight-Loss Insights", "Privacy First"],
      downloads: "100+",
      rating: 5.0,
      category: "Health & Fitness · Lifestyle",
      comingSoon: false,
      primaryColor: "from-blue-500 to-blue-600",
      icon: "/lovable-uploads/glp1-tracker-icon.png",
      appStoreLink: "https://apps.apple.com/tr/app/jabsy-glp1-shot-tracker/id6748824853",
      slug: "jabsy"
    },
    {
      name: "Sunny: UV & Tanning",
      description: "Tan smarter, glow safely. Personalized tanning plans, real-time UV Index, sun-safety reminders, and skin insights — all in one app.",
      features: ["Personalized Tanning Plan", "Real-Time UV Index", "On-Device Skin Analysis"],
      downloads: "Coming Soon",
      rating: null,
      category: "Weather · Lifestyle",
      comingSoon: true,
      primaryColor: "from-orange-400 to-orange-600",
      icon: "/lovable-uploads/sunny-ai-icon.png",
      slug: "sunny"
    }
  ];

  const stats = [
    { label: "App Launch", value: "2025" },
    { label: "AI Assistant", value: "Available" },
    { label: "More Apps", value: "Soon" },
    { label: "Global Reach", value: "25+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent relative">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-2xl -z-10"></span>
              StriveX
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">Future-Ready Apps, Crafted for You</p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed text-center md:text-2xl">
              StriveX blends cutting-edge AI with elegant design to elevate health, productivity, and every moment in between.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/apps">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg">
                  Explore Our Apps
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight pb-2">
              Our Flagship Apps
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular mobile applications, each designed to solve real-world problems and enhance your daily life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredApps.map((app, index) => (
              <motion.div 
                key={app.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="h-full bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 group flex flex-col cursor-pointer"
                  onClick={() => window.location.href = `/apps/${app.slug}`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.primaryColor} flex items-center justify-center`}>
                        {app.icon ? (
                          <img src={app.icon} alt={app.name} className="w-full h-full object-cover rounded-2xl" />
                        ) : (
                          <Smartphone className="w-8 h-8 text-white" />
                        )}
                      </div>
                      {app.comingSoon && (
                        <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                          Coming Soon
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl text-white mb-2">{app.name}</CardTitle>
                    <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                      {app.rating && (
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          {app.rating}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {app.downloads}
                      </span>
                      {app.category.split(' · ').map((cat, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-gray-600 text-gray-300">
                          {cat}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {app.description}
                      </p>
                      {app.features && (
                        <div className="mb-4">
                          <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Key Features</h4>
                          <div className="space-y-1">
                            {app.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-auto">
                      <Button 
                        size="sm" 
                        className={`w-full bg-gradient-to-r ${app.primaryColor} hover:opacity-90 transition-opacity text-white ${app.comingSoon ? 'opacity-70' : ''}`}
                        disabled={app.comingSoon}
                        onClick={() => {
                          if (app.appStoreLink) {
                            window.open(app.appStoreLink, '_blank');
                          }
                        }}
                      >
                        {app.comingSoon ? 'Coming Soon' : app.appStoreLink ? 'Download on App Store' : 'Download'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/apps">
              <Button variant="outline" size="lg" className="border-gray-500 text-white hover:bg-white/5 hover:text-white">
                View All Apps
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose StriveX */}
      <section className="py-24 px-4 bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight pb-2">
              Why Choose StriveX?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just another app company. We're innovators building the future of mobile experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Innovative Technology",
                description: "Cutting-edge AI and machine learning power our applications, delivering smart, personalized experiences."
              },
              {
                icon: Users,
                title: "User-Centric Design", 
                description: "Every app is crafted with the user in mind, ensuring intuitive interfaces and meaningful interactions."
              },
              {
                icon: Zap,
                title: "Continuous Innovation",
                description: "We're constantly evolving, adding new features and launching new apps to meet emerging needs."
              }
            ].map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Digital Life?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust StriveX apps to enhance their daily routines and achieve their goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/apps">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg">
                  Explore Our Apps
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-gray-500 text-white hover:bg-white/5 hover:text-white px-8 py-4 text-lg"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;