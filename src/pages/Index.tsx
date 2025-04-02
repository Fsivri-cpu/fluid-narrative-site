
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Cpu, Headphones, BarChart, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  // Animation variants for staggered animations
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

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 dark:text-blue-100 leading-tight mb-6">
                Transform <span className="text-blue-500 dark:text-blue-400">Customer Experience</span> with AI
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Take your business one step ahead with intelligent, fast, and personalized customer service solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
                    Contact Us
                  </button>
                </Link>
                <Link to="/services">
                  <button className="bg-transparent border border-blue-400 dark:border-blue-500 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-md font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors flex items-center">
                    Our Services <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="AI Technology" 
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">Why StriveX AI Solutions?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our solutions powered by the latest AI technologies increase customer satisfaction while reducing your operational costs.
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
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-full w-fit mb-4">
                    <Cpu className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="dark:text-white">Advanced AI Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">Natural language processing and understanding capabilities with state-of-the-art artificial intelligence models.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-full w-fit mb-4">
                    <Headphones className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="dark:text-white">24/7 Customer Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">Provide uninterrupted support to your customers with our AI-powered solutions.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-full w-fit mb-4">
                    <BarChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="dark:text-white">Detailed Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">Make better decisions by analyzing customer behaviors and interactions.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-full w-fit mb-4">
                    <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="dark:text-white">Secure Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">Safe and easy integration with your existing systems.</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 dark:bg-blue-800 text-white transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Are You Ready to Discover the Power of AI?</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
              Contact us now to transform your customer services and gain a competitive advantage.
            </p>
            <Link to="/contact">
              <button className="bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white text-blue-900 px-8 py-3 rounded-md font-medium transition-colors text-lg">
                Request a Free Demo
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
