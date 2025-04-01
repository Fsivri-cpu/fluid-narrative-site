
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
      title: "AI Chatbot Çözümleri",
      description: "Doğal dil işleme ile zenginleştirilmiş, 7/24 müşteri desteği sağlayan akıllı chatbot çözümleri.",
      features: ["Çoklu dil desteği", "Kişiselleştirilmiş yanıtlar", "Doğal konuşma akışı", "Otomatik öğrenme"]
    },
    {
      icon: <Bot className="h-10 w-10 text-blue-500" />,
      title: "Sanal Asistanlar",
      description: "İş süreçlerinizi otomatikleştiren ve müşteri iletişimini iyileştiren gelişmiş sanal asistanlar.",
      features: ["Görev otomasyonu", "Takvim yönetimi", "Sesli komut işleme", "Sistem entegrasyonları"]
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-500" />,
      title: "Anlık Yanıt Sistemleri",
      description: "Müşteri sorularını anında anlayıp doğru yanıtları sunan yapay zeka destekli sistemler.",
      features: ["Milisaniyelerde yanıt", "Doğruluk garantisi", "Bilgi tabanı entegrasyonu", "Sürekli iyileştirme"]
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-blue-500" />,
      title: "Müşteri Analitikleri",
      description: "Müşteri davranışlarını analiz ederek iş stratejilerinizi geliştirmenize yardımcı olan çözümler.",
      features: ["Davranış analizi", "Duygu analizi", "Trend raporlama", "Tahmine dayalı analitikler"]
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
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Hizmetlerimiz</h1>
            <p className="text-lg text-gray-600">
              StriveX AI Solutions olarak, yapay zeka teknolojileri ile desteklenen çeşitli müşteri hizmetleri çözümleri sunuyoruz. Teknolojimiz, müşteri memnuniyetini artırırken operasyonel verimliliği de maksimize eder.
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
