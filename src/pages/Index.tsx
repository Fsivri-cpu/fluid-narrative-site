import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, Code, Zap, Users, ArrowRight, Download, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const featuredApps = [
    {
      name: "GLP-1 Shot Tracker",
      description: "Track every GLP-1 shot, weight change and macro in one place. Smart dashboard for Ozempic®, Wegovy®, Mounjaro® & more.",
      features: ["Shot Planner & Reminders", "Weight-Loss Insights", "Privacy First"],
      downloads: "2025",
      rating: null,
      category: "Health",
      comingSoon: true,
      icon: "/lovable-uploads/ccdf075f-0bc4-4639-bc55-4d295b215b3e.png"
    },
    {
      name: "Professional AI Assistant App",
      description: "24/7 customer service AI that understands your business",
      features: ["Smart Conversations", "Knowledge Base", "24/7 Available"],
      downloads: "Try Demo",
      rating: 4.9,
      category: "Business",
      comingSoon: false,
      isDemo: true
    }
  ];

  const stats = [
    { label: "App Launch", value: "2025" },
    { label: "AI Assistant", value: "Available" },
    { label: "More Apps", value: "Soon" },
    { label: "Global Reach", value: "25+" }
  ];

  return (
    <div className="min-h-screen font-inter" style={{background: 'radial-gradient(ellipse at center, hsl(var(--clr-navy-950)), hsl(var(--clr-navy-900)))'}}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 
              className="text-6xl md:text-8xl font-[800] mb-6"
              style={{
                background: 'linear-gradient(90deg, hsl(var(--clr-accent-1)), hsl(var(--clr-accent-2)))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              StriveX
            </h1>
            <h2 
              className="text-3xl md:text-4xl font-[800] mb-4"
              style={{
                background: 'linear-gradient(90deg, hsl(var(--clr-accent-1)), hsl(var(--clr-accent-2)))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Future-Ready Apps, Crafted for You
            </h2>
            <p className="text-lg max-w-[640px] mx-auto mb-12 leading-relaxed text-center" style={{color: 'hsl(var(--clr-silver))'}}>
              StriveX blends cutting-edge AI with elegant design to elevate health, productivity, and every moment in between.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/apps">
                <Button 
                  size="lg" 
                  className="min-h-[44px] px-8 py-4 text-lg rounded-full transition-transform hover:scale-[1.03] focus:ring-2 focus:ring-offset-2"
                  style={{
                    background: 'linear-gradient(90deg, hsl(var(--clr-accent-1)), hsl(var(--clr-accent-2)))',
                    color: 'hsl(var(--clr-white))'
                  }}
                >
                  Explore Our Apps
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4" style={{background: 'hsl(var(--clr-navy-700))'}}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-[800] mb-2" style={{color: 'hsl(var(--clr-white))'}}>
                  {stat.value}
                </div>
                <div className="text-sm md:text-base" style={{color: 'hsl(var(--clr-silver-700))'}}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Apps Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl md:text-5xl font-[800] mb-6"
              style={{
                background: 'linear-gradient(90deg, hsl(var(--clr-accent-1)), hsl(var(--clr-accent-2)))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Our Flagship Apps
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{color: 'hsl(var(--clr-silver))'}}>
              Discover our most popular mobile applications, each designed to solve real-world problems and enhance your daily life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredApps.map((app, index) => (
              <motion.div 
                key={app.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="h-full rounded-xl border transition-all duration-300 hover:scale-[1.02] focus-within:ring-2 focus-within:ring-offset-2"
                  style={{
                    background: 'hsl(var(--clr-navy-700))',
                    borderColor: 'rgba(192,192,192,0.12)'
                  }}
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 p-2"
                         style={{background: 'linear-gradient(135deg, hsl(var(--clr-accent-1)), hsl(var(--clr-accent-2)))'}}>
                      {app.icon ? (
                        <img src={app.icon} alt={app.name} className="w-full h-full object-cover rounded-lg" />
                      ) : (
                        <Smartphone className="w-6 h-6" style={{color: 'hsl(var(--clr-white))'}} />
                      )}
                    </div>
                    <CardTitle className="text-lg mb-2" style={{color: 'hsl(var(--clr-white))'}}>
                      {app.name}
                    </CardTitle>
                    <div className="flex items-center gap-3 text-sm mb-3" style={{color: 'hsl(var(--clr-silver))'}}>
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
                    </div>
                    <Badge 
                      variant="outline" 
                      className="text-xs w-fit border"
                      style={{
                        borderColor: 'rgba(192,192,192,0.12)',
                        color: 'hsl(var(--clr-silver))'
                      }}
                    >
                      {app.category}
                    </Badge>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm mb-4 leading-relaxed" style={{color: 'hsl(var(--clr-silver))'}}>
                      {app.description}
                    </p>
                    {app.features && (
                      <div className="mb-4">
                        <h4 className="text-xs font-[600] uppercase tracking-wider mb-2" style={{color: 'hsl(var(--clr-silver-700))'}}>
                          Key Features
                        </h4>
                        <div className="space-y-1">
                          {app.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs" style={{color: 'hsl(var(--clr-silver))'}}>
                              <div className="w-1 h-1 rounded-full" style={{background: 'hsl(var(--clr-accent-2))'}}></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <Button 
                      size="sm" 
                      className="w-full min-h-[44px] transition-opacity hover:opacity-90 focus:ring-2 focus:ring-offset-2"
                      disabled={app.comingSoon}
                      onClick={() => app.isDemo && (window.location.href = '/ai_assistant_app')}
                      style={{
                        background: app.comingSoon 
                          ? 'hsl(var(--clr-silver-700))' 
                          : 'linear-gradient(90deg, hsl(var(--clr-accent-1)), hsl(var(--clr-accent-2)))',
                        color: 'hsl(var(--clr-white))'
                      }}
                    >
                      {app.comingSoon ? 'Coming Soon' : app.isDemo ? 'Try Demo' : 'Download'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/apps">
              <Button 
                variant="outline" 
                size="lg" 
                className="min-h-[44px] border transition-colors hover:bg-opacity-5 focus:ring-2 focus:ring-offset-2"
                style={{
                  borderColor: 'hsl(var(--clr-silver))',
                  color: 'hsl(var(--clr-silver))'
                }}
              >
                View All Apps
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose StriveX */}
      <section className="py-20 px-4" style={{background: 'hsl(var(--clr-navy-700))'}}>
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl md:text-5xl font-[800] mb-6"
              style={{
                background: 'linear-gradient(90deg, hsl(var(--clr-accent-1)), hsl(var(--clr-accent-2)))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Why Choose StriveX?
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{color: 'hsl(var(--clr-silver))'}}>
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
                <div 
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                  style={{background: 'linear-gradient(135deg, hsl(var(--clr-accent-1)), hsl(var(--clr-accent-2)))'}}
                >
                  <feature.icon className="w-8 h-8" style={{color: 'hsl(var(--clr-white))'}} />
                </div>
                <h3 className="text-xl font-[600] mb-4" style={{color: 'hsl(var(--clr-white))'}}>
                  {feature.title}
                </h3>
                <p className="leading-relaxed" style={{color: 'hsl(var(--clr-silver))'}}>
                  {feature.description}
                </p>
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
            <h2 
              className="text-4xl md:text-5xl font-[800] mb-6"
              style={{
                background: 'linear-gradient(90deg, hsl(var(--clr-accent-1)), hsl(var(--clr-accent-2)))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Ready to Transform Your Digital Life?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{color: 'hsl(var(--clr-silver))'}}>
              Join thousands of users who trust StriveX apps to enhance their daily routines and achieve their goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/apps">
                <Button 
                  size="lg" 
                  className="min-h-[44px] px-8 py-4 text-lg rounded-full transition-transform hover:scale-[1.03] focus:ring-2 focus:ring-offset-2"
                  style={{
                    background: 'linear-gradient(90deg, hsl(var(--clr-accent-1)), hsl(var(--clr-accent-2)))',
                    color: 'hsl(var(--clr-white))'
                  }}
                >
                  Explore Our Apps
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="min-h-[44px] px-8 py-4 text-lg border transition-colors hover:bg-opacity-5 focus:ring-2 focus:ring-offset-2"
                  style={{
                    borderColor: 'hsl(var(--clr-silver))',
                    color: 'hsl(var(--clr-silver))'
                  }}
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