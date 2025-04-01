
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Cpu, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Technologies = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Technologies</h1>
            <p className="text-lg text-gray-600">
              At StriveX AI Solutions, we develop customer service solutions using the latest technologies. Here are some of the technologies we use in our projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="ai" className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <TabsTrigger value="ai" className="text-sm md:text-base">AI & ML</TabsTrigger>
                <TabsTrigger value="frontend" className="text-sm md:text-base">Frontend</TabsTrigger>
                <TabsTrigger value="backend" className="text-sm md:text-base">Backend</TabsTrigger>
                <TabsTrigger value="devops" className="text-sm md:text-base">DevOps</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="ai">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <motion.div variants={itemVariants}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="bg-blue-50 p-3 rounded-full w-fit mb-4">
                        <Cpu className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>AI Models</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        We use the most advanced AI models for natural language processing and understanding capabilities.
                      </p>
                      <ul className="space-y-1">
                        <li className="flex items-center">
                          <div className="bg-blue-500 h-2 w-2 rounded-full mr-2"></div>
                          <span className="text-gray-700">GPT and BERT-based models</span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-blue-500 h-2 w-2 rounded-full mr-2"></div>
                          <span className="text-gray-700">Machine learning algorithms</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="bg-blue-50 p-3 rounded-full w-fit mb-4">
                        <Database className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Data Processing Systems</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        We use advanced data processing systems to process large datasets.
                      </p>
                      <ul className="space-y-1">
                        <li className="flex items-center">
                          <div className="bg-blue-500 h-2 w-2 rounded-full mr-2"></div>
                          <span className="text-gray-700">Spark and Hadoop</span>
                        </li>
                        <li className="flex items-center">
                          <div className="bg-blue-500 h-2 w-2 rounded-full mr-2"></div>
                          <span className="text-gray-700">TensorFlow and PyTorch</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="frontend">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <motion.div variants={itemVariants}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="bg-blue-50 p-3 rounded-full w-fit mb-4">
                        <Code className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Modern Frontend Technologies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        We use modern web technologies for our user interfaces.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="backend">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <motion.div variants={itemVariants}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="bg-blue-50 p-3 rounded-full w-fit mb-4">
                        <Layers className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle>Powerful Backend Solutions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        We use scalable backend technologies for the power behind our applications.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="devops">
              <div className="text-center py-8">
                <p className="text-gray-600">DevOps technologies coming soon...</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
