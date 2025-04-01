
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Users, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
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

  // Team members data
  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      role: "CEO & Kurucu",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "Zeynep Kaya",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
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
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Hakkımızda</h1>
            <p className="text-lg text-gray-600">
              StriveX AI Solutions, yapay zeka destekli müşteri hizmetleri çözümleriyle işletmelerin müşteri deneyimini dönüştürmeyi hedefleyen yenilikçi bir teknoloji şirketidir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Hikayemiz</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  StriveX AI Solutions, 2020 yılında müşteri hizmetleri alanında yapay zeka teknolojilerinin gücünü kullanarak işletmelere değer katma vizyonuyla kuruldu.
                </p>
                <p>
                  İlk yılımızda, küçük ve orta ölçekli işletmeler için temel chatbot çözümleri sunarak başladık. Zamanla, doğal dil işleme ve makine öğrenmesi alanlarındaki uzmanlığımızı geliştirerek daha sofistike ve kişiselleştirilmiş çözümler üretmeye başladık.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                alt="StriveX Ekibi" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Değerlerimiz</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              StriveX AI Solutions olarak, tüm çalışmalarımızda bizi yönlendiren temel değerlerimiz vardır.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Mükemmellik</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Her projede en yüksek kaliteyi sunmak için sürekli olarak kendimizi geliştiriyor ve en iyi uygulamaları takip ediyoruz.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>İnovasyon</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Sürekli olarak yeni teknolojileri keşfediyor ve müşterilerimize daha iyi hizmet vermek için çözümlerimizi geliştiriyoruz.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>İşbirliği</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Müşterilerimiz ve ekip üyelerimizle yakın işbirliği içinde çalışarak en iyi sonuçları elde ediyoruz.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Sonuç Odaklılık</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Her zaman müşterilerimizin iş hedeflerine ulaşmalarına yardımcı olacak somut sonuçlar üretmeye odaklanıyoruz.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
