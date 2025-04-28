
import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from "@/components/ui/progress";
import { CircleUser, Clock, Package, Star } from 'lucide-react';

interface StatisticProps {
  icon: React.ElementType;
  percentage: number;
  description: string;
}

const Statistic: React.FC<StatisticProps> = ({ icon: Icon, percentage, description }) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setValue(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <motion.div 
      className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
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
    </motion.div>
  );
};

const statistics = [
  {
    icon: CircleUser,
    percentage: 87.2,
    description: "Consumers report neutral or positive experiences with chatbots"
  },
  {
    icon: Clock,
    percentage: 62,
    description: "Consumers prefer using a chatbot rather than waiting for a human representative"
  },
  {
    icon: Package,
    percentage: 71,
    description: "Consumers prefer chatting with a chatbot when checking order status"
  },
  {
    icon: Star,
    percentage: 69,
    description: "Consumers express satisfaction with their most recent chatbot interaction"
  }
];

const StatisticsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/40 to-black backdrop-blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            What Consumers Say
          </h2>
          <p className="text-xl text-blue-200/90 max-w-2xl mx-auto">
            Real statistics showing how AI assistants are transforming customer service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {statistics.map((stat, index) => (
            <Statistic key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;

