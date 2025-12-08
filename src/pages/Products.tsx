import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  
  const apps = [
    {
      id: 1,
      name: "Jabsy - GLP1 Shot Tracker",
      subtitle: "Track your GLP-1 journey",
      description: "Track your GLP-1 shots and weight loss journey with Jabsy. Whether you're using Ozempic®, Wegovy®, Mounjaro®, Zepbound®, Semaglutide or Tirzepatide, Jabsy keeps your weekly injections on schedule and your progress crystal-clear.",
      features: ["Shot Planner & Reminders", "Weight-Loss Insights", "Nutrition Monitor", "Side-Effect Journal", "Privacy First"],
      category: "Health & Fitness · Lifestyle",
      downloads: "100+",
      rating: 5.0,
      comingSoon: false,
      primaryColor: "from-blue-500 to-blue-600",
      icon: "/lovable-uploads/glp1-tracker-icon.png",
      slug: "jabsy",
      appStoreLink: "https://apps.apple.com/tr/app/jabsy-glp1-shot-tracker/id6748824853"
    },
    {
      id: 2,
      name: "Sunny: UV & Tanning",
      subtitle: "Tan Smarter. Glow Safely.",
      description: "Sunny is a smart UV and tanning assistant that helps you achieve a beautiful tan while keeping your skin protected. Get personalized tanning plans, real-time UV Index updates, sun-safety reminders, and skin insights — all in one app.",
      features: ["Personalized Tanning Plan", "Real-Time UV Index", "On-Device Skin Analysis", "Sun Safety Guidance", "Track Your Progress"],
      category: "Weather · Lifestyle",
      downloads: "Coming Soon",
      rating: null,
      comingSoon: true,
      primaryColor: "from-orange-400 to-orange-600",
      icon: "/lovable-uploads/sunny-ai-icon.png",
      slug: "sunny"
    }
  ];

  const categories = ["All", "Health & Fitness", "Weather", "Lifestyle"];

  const handleAppClick = (app: typeof apps[0]) => {
    navigate(`/apps/${app.slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Mobile Apps
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our flagship mobile applications across different categories, designed to enhance your digital lifestyle.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map(category => (
                <Badge key={category} variant="outline" className="px-4 py-2 text-lg border-gray-500 text-white">
                  {category}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="h-full bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 group flex flex-col cursor-pointer"
                  onClick={() => handleAppClick(app)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.primaryColor} flex items-center justify-center mb-4`}>
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
                    <CardTitle className="text-2xl text-white mb-1">{app.name}</CardTitle>
                    <p className="text-gray-400 text-sm mb-3">{app.subtitle}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400 flex-wrap">
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
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {app.description}
                      </p>
                      <div className="space-y-3 mb-6">
                        <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Key Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {app.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <Button 
                        className={`w-full bg-gradient-to-r ${app.primaryColor} hover:opacity-90 transition-opacity text-white`}
                      >
                        {app.comingSoon ? 'Coming Soon' : 'Learn More'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Apps Coming */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              More Apps Coming Soon
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're constantly expanding our app ecosystem. Stay tuned for exciting new applications across different categories.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
