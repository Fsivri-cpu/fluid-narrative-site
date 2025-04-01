
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Gönderildi",
      description: "Mesajınız başarıyla gönderildi. En kısa sürede size geri dönüş yapacağız.",
    });
  };

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
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">İletişim</h1>
            <p className="text-lg text-gray-600">
              Sorularınız veya projeleriniz için bizimle iletişime geçin. Size yardımcı olmaktan mutluluk duyarız.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <motion.div 
              className="lg:w-1/3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-blue-900 mb-6">İletişim Bilgilerimiz</h2>
              <div className="space-y-6">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="p-6 flex">
                      <div className="mr-4">
                        <div className="bg-blue-50 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-1">Adres</h3>
                        <p className="text-gray-600">
                          Levent, İstanbul, Türkiye
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="p-6 flex">
                      <div className="mr-4">
                        <div className="bg-blue-50 p-3 rounded-full">
                          <Phone className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-1">Telefon</h3>
                        <p className="text-gray-600">+90 212 123 4567</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="p-6 flex">
                      <div className="mr-4">
                        <div className="bg-blue-50 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-1">E-posta</h3>
                        <p className="text-gray-600">info@strivex.ai</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="p-6 flex">
                      <div className="mr-4">
                        <div className="bg-blue-50 p-3 rounded-full">
                          <Clock className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-1">Çalışma Saatleri</h3>
                        <p className="text-gray-600">
                          Pazartesi - Cuma: 09:00 - 18:00<br />
                          Hafta Sonu: Kapalı
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Bize Mesaj Gönderin</h2>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Adınız Soyadınız</Label>
                        <Input id="name" placeholder="Adınız Soyadınız" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-posta Adresiniz</Label>
                        <Input id="email" type="email" placeholder="ornek@sirket.com" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Konu</Label>
                      <Input id="subject" placeholder="Mesajınızın konusu" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mesajınız</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Mesajınızı buraya yazın..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Send className="mr-2 h-4 w-4" /> Mesaj Gönder
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
