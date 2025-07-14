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
      title: "Form Submitted",
      description: "Your message has been successfully sent. We will get back to you as soon as possible."
    });
  };
  return <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-3xl mx-auto" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Contact</h1>
            <p className="text-lg text-gray-600">
              Get in touch with us for your questions or projects. We are happy to help you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <motion.div className="lg:w-1/3" initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5
          }}>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h2>
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
                        <h3 className="text-lg font-semibold text-blue-900 mb-1">Address</h3>
                        <p className="text-gray-600">
                          Vinkenburgstraat 2A, 3512 AB - Utrecht / The Netherlands
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
                        <h3 className="text-lg font-semibold text-blue-900 mb-1">Phone</h3>
                        <p className="text-gray-600">+31 6 27 21 1105</p>
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
                        <h3 className="text-lg font-semibold text-blue-900 mb-1">Email</h3>
                        <p className="text-gray-600">info@strivexai.co</p>
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
                        <h3 className="text-lg font-semibold text-blue-900 mb-1">Working Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 09:00 - 18:00<br />
                          Weekends: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="lg:w-2/3" initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Your Full Name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="example@company.com" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Subject of your message" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Write your message here..." rows={5} required />
                    </div>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;