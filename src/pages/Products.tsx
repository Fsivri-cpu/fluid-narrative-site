import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const apps = [
    {
      id: 1,
      name: "GLP-1 Shot Tracker",
      subtitle: "Tirzepatide",
      description: "Track every GLP-1 shot, weight change and macro in one place. Whether your doctor prescribed Ozempic®, Wegovy®, Mounjaro®, Zepbound®, compounded Semaglutide or Tirzepatide, our smart dashboard keeps your weekly dose on schedule and your progress crystal-clear.",
      features: ["Shot Planner & Reminders", "Weight-Loss Insights", "Protein & Nutrition Monitor", "Side-Effect Journal", "Privacy First"],
      category: "Health & Fitness",
      downloads: "2025",
      rating: null,
      comingSoon: true,
      primaryColor: "from-blue-500 to-blue-600",
      icon: "/lovable-uploads/ccdf075f-0bc4-4639-bc55-4d295b215b3e.png"
    },
    {
      id: 2,
      name: "Professional AI Assistant App",
      subtitle: "Virtual Support",
      description: "24/7 AI-powered customer service assistant that understands your business needs.",
      features: ["Smart Conversations", "Knowledge Base", "Multi-language", "24/7 Available"],
      category: "Business",
      downloads: "Available",
      rating: 4.9,
      comingSoon: false,
      primaryColor: "from-purple-500 to-violet-600",
      isDemo: true
    }
  ];

  const categories = ["All", "Health & Fitness", "Business"];

  const handleAppClick = (app: any) => {
    if (app.isDemo) {
      window.location.href = '/ai_assistant_app';
    }
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
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="px-4 py-2 text-lg border-gray-500 text-gray-300">
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
                <Card className="h-full bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                       <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.primaryColor} flex items-center justify-center mb-4`}>
                         {app.icon ? (
                           <img src={app.icon} alt={app.name} className="w-10 h-10 object-contain" />
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
                    <div className="flex items-center gap-4 text-sm text-gray-400">
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
                      <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {app.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
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
                    <div className="flex gap-3">
                      <Button 
                        className={`flex-1 bg-gradient-to-r ${app.primaryColor} hover:opacity-90 transition-opacity`}
                        disabled={app.comingSoon && !app.isDemo}
                        onClick={() => handleAppClick(app)}
                      >
                        {app.comingSoon && !app.isDemo ? 'Coming Soon' : app.isDemo ? 'Try Demo' : 'Download App'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      {!app.comingSoon && (
                        <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white/5">
                          Learn More
                        </Button>
                      )}
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
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3"
            >
              Join Our Newsletter
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;