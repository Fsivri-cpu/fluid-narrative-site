import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Download, Shield, Moon, Clock, BookOpen, Calendar, Heart, HandMetal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Niyyah = () => {
  const screenshots = [
    { src: "/lovable-uploads/niyyah-screenshot-1.png", alt: "Daily Dashboard & Prayer Times" },
    { src: "/lovable-uploads/niyyah-screenshot-2.png", alt: "Dhikr Counter" },
    { src: "/lovable-uploads/niyyah-screenshot-3.png", alt: "30-Day Ramadan Calendar" },
    { src: "/lovable-uploads/niyyah-screenshot-4.png", alt: "Daily Intentions & Goals" },
    { src: "/lovable-uploads/niyyah-screenshot-5.png", alt: "Settings & Preferences" },
  ];

  const features = [
    {
      icon: Moon,
      title: "Fasting Tracker",
      description: "Track your daily fasts with a live countdown to Iftar and Suhoor. Mark completed fasts and see your Ramadan progress at a glance."
    },
    {
      icon: Clock,
      title: "Accurate Prayer Times",
      description: "Location-based prayer times for Fajr, Dhuhr, Asr, Maghrib, and Isha — always accurate for your city."
    },
    {
      icon: HandMetal,
      title: "Dhikr Counter",
      description: "A beautiful tap-to-count dhikr experience with milestone celebrations, quick presets (33, 99, 100), and reset controls."
    },
    {
      icon: BookOpen,
      title: "Daily Intentions",
      description: "Set meaningful spiritual goals — read Quran, give charity, make dua. Track once-only or repeating daily intentions."
    },
    {
      icon: Calendar,
      title: "30-Day Calendar",
      description: "Visual progress view of your entire Ramadan journey with Laylat al-Qadr markers, fasting stats, and daily completion tracking."
    },
    {
      icon: Heart,
      title: "Period Mode",
      description: "Thoughtfully designed for women — acknowledge your body's natural rhythms with period mode that adjusts goals and marks excused days."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/lovable-uploads/niyyah-icon.png"
                  alt="Niyyah"
                  className="w-20 h-20 rounded-2xl"
                />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    Niyyah
                  </h1>
                  <p className="text-gray-400">Ramadan Tracker</p>
                </div>
              </div>

              <p className="text-lg text-purple-300/80 italic mb-4">Worship, gently.</p>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">5.0</span>
                </div>
                <span className="text-gray-500">&bull;</span>
                <span className="text-gray-400">100+ Downloads</span>
                <Badge variant="outline" className="border-purple-500 text-purple-400">Lifestyle</Badge>
                <Badge variant="outline" className="border-pink-500 text-pink-400">Spiritual</Badge>
              </div>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                A thoughtful Ramadan companion designed for Muslim women. Track your fasts, pray on time, count your dhikr, and set meaningful daily intentions — while honoring your body's natural rhythms.
              </p>

              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:opacity-90 text-white px-8"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download on App Store
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-64 md:w-72 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-purple-500/30 border border-purple-500/20">
                <img
                  src="/lovable-uploads/niyyah-hero-screenshot.png"
                  alt="Niyyah App Screenshot"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">App Preview</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore Niyyah's gentle, intention-focused interface designed for your Ramadan journey.
            </p>
          </motion.div>

          <div className="flex gap-6 justify-center flex-wrap lg:flex-nowrap pb-8">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <div className="w-64 xl:w-72 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-purple-500/20">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need for a meaningful and organized Ramadan experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Shield className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Privacy Matters</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Niyyah stores your data locally on your device. Your spiritual journey, your fasting progress, and your personal intentions stay private — always.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Begin Your Ramadan Journey
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Download Niyyah and make this Ramadan your most intentional one yet.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:opacity-90 text-white px-8"
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download on App Store
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Legal Links */}
      <section className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <Link to="/privacy-policy/niyyah" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">&bull;</span>
            <Link to="/terms-conditions/niyyah" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Niyyah;
