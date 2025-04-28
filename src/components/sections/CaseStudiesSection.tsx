import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Car, Utensils, Globe, CircleUser, Clock, Package, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
interface StatisticProps {
  icon: React.ElementType;
  percentage: number;
  description: string;
}
const Statistic: React.FC<StatisticProps> = ({
  icon: Icon,
  percentage,
  description
}) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px"
  });
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setValue(percentage);
      }, 300);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isInView, percentage]);
  return <motion.div ref={ref} className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10" initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5
  }}>
      <div className="flex items-start gap-4 mb-3">
        <div className="p-2 rounded-lg bg-white/10">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <p className="text-sm text-white/90 flex-1">{description}</p>
      </div>
      <div className="space-y-2">
        <Progress value={value} className="h-2" />
        <p className="text-sm text-white/60 text-right">{value.toFixed(1)}%</p>
      </div>
    </motion.div>;
};
const statistics = [{
  icon: CircleUser,
  percentage: 87.2,
  description: "Consumers report neutral or positive experiences with chatbots"
}, {
  icon: Clock,
  percentage: 62,
  description: "Consumers prefer using a chatbot rather than waiting for a human representative"
}, {
  icon: Package,
  percentage: 71,
  description: "Consumers prefer chatting with a chatbot when checking order status"
}, {
  icon: Star,
  percentage: 69,
  description: "Consumers express satisfaction with their most recent chatbot interaction"
}];
const caseStudies = [{
  industry: "Automotive Dealership",
  description: "An automotive dealership improved customer service by implementing an AI assistant with vehicle inventory knowledge, enabling instant answers about vehicles and test drive scheduling. This allowed sales staff to focus on serious buyers, increasing efficiency and customer satisfaction.",
  icon: Car,
  color: "blue-500"
}, {
  industry: "Restaurant",
  description: "A restaurant streamlined operations by using an AI system to handle menu, ingredient, and business hours inquiries. This automation freed up staff to focus on improving the dining experience while ensuring customers receive immediate, accurate information.",
  icon: Utensils,
  color: "amber-500"
}, {
  industry: "International Business",
  description: "A Dutch entrepreneur broke through language barriers by implementing an AI assistant that communicates in 29+ languages. This expansion enabled reaching international customers and capturing previously missed opportunities in the global market.",
  icon: Globe,
  color: "green-500"
}];
const CaseStudiesSection = () => {
  return <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/40 to-black backdrop-blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-16" initial={{
        y: 20,
        opacity: 0
      }} whileInView={{
        y: 0,
        opacity: 1
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Trusted by Industry Leaders
          </h2>
          
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-24">
          {statistics.map((stat, index) => <Statistic key={index} {...stat} />)}
        </div>

        <div className="text-center mb-16">
          <motion.h3 className="text-3xl md:text-4xl font-bold mb-6 text-white" initial={{
          y: 20,
          opacity: 0
        }} whileInView={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            Success Stories
          </motion.h3>
          <motion.p className="text-xl text-blue-200/90 max-w-2xl mx-auto" initial={{
          y: 20,
          opacity: 0
        }} whileInView={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            See how StriveX is transforming customer support across industries
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} viewport={{
          once: true
        }}>
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
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default CaseStudiesSection;