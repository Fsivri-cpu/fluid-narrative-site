
import React from 'react';
import { motion } from 'framer-motion';
import { Car, Utensils, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const CaseStudiesSection = () => {
  return (
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
  );
};

export default CaseStudiesSection;
