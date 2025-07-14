import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Lightbulb, Palette, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
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
  const teamMembers = [{
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  }, {
    name: "Sarah Johnson",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  }];
  return <div className="min-h-screen pt-24 bg-gradient-to-br from-slate-900 to-black text-white">
      {/* Header */}
      <section className="py-12">
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
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">About Us</h1>
            <p className="text-lg text-gray-300">StriveX AI Solutions is an innovative multi-app studio that turns cutting-edge AI into intuitive mobile experiences—simplifying life, boosting productivity, and delighting users one intelligent app at a time.</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div className="md:w-1/2 mb-10 md:mb-0" initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>StriveX began as a shared vision between Furkan & Gizem—two product-obsessed technologists who believed everyday life could be simpler, smarter, and more human with the right apps. After years of refining AI-driven mobile products and scaling complex digital projects, they relocated from Istanbul to the Netherlands’ vibrant startup scene in 2025 to turn that vision into reality.</p>
                <p>Today, the StriveX team channels this joint expertise into a growing ecosystem of AI-powered apps that elevate health, productivity, and everything in between—proving that when curiosity meets craft, innovation scales one elegant app at a time.</p>
              </div>
            </motion.div>
            <motion.div className="md:w-1/2" initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="StriveX Team" className="rounded-lg shadow-xl w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">Our Values</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              At StriveX AI Solutions, we have core values that guide us in all our work.
            </p>
          </motion.div>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            <motion.div variants={itemVariants}>
              <Card className="h-full bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-full w-fit mb-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">People-First Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">We build products that genuinely improve everyday life, empowering users to live smarter and happier.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-full w-fit mb-4">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">We push the boundaries of AI and mobile tech, turning bold ideas into practical, day-to-day tools.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-full w-fit mb-4">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Seamless Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">We pair beautiful visuals with intuitive UX so every interaction feels effortless and engaging.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="h-full bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-full w-fit mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Privacy & Trust</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">We safeguard user data through rigorous security and transparent practices, earning confidence with every release.</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default About;