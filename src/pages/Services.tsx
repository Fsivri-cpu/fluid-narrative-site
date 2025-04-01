
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Bot, Zap, BarChart3, Globe, PenTool, RefreshCcw, Server } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  // Animation variants
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

  const services = [
    {
      icon: <MessageSquare className="h-10 w-10 text-blue-500" />,
      title: "AI Chatbot Solutions",
      description: "Smart chatbot solutions providing 24/7 customer support, enhanced with natural language processing.",
      features: ["Multi-language support", "Personalized responses", "Natural conversation flow", "Automatic learning"]
    },
    {
      icon: <Bot className="h-10 w-10 text-blue-500" />,
      title: "Virtual Assistants",
      description: "Advanced virtual assistants that automate business processes and improve customer communication.",
      features: ["Task automation", "Calendar management", "Voice command processing", "System integrations"]
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-500" />,
      title: "Instant Response Systems",
      description: "AI-powered systems that instantly understand customer questions and provide accurate answers.",
      features: ["Millisecond responses", "Accuracy guarantee", "Knowledge base integration", "Continuous improvement"]
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-blue-500" />,
      title: "Customer Analytics",
      description: "Solutions that analyze customer behavior to help you improve your business strategies.",
      features: ["Behavior analysis", "Sentiment analysis", "Trend reporting", "Predictive analytics"]
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Services</h1>
            <p className="text-lg text-gray-600">
              At StriveX AI Solutions, we offer various customer service solutions powered by artificial intelligence technologies. Our technology maximizes operational efficiency while increasing customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="bg-blue-50 p-4 rounded-lg w-fit mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-blue-900">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 mt-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="bg-blue-500 h-2 w-2 rounded-full mr-2"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
