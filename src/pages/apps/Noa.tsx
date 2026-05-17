import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Sparkles, PenLine, HandHeart, Smartphone, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Noa = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Today's Verse",
      description: "A handpicked scripture to start your day. Let the Word speak before the noise does."
    },
    {
      icon: Sparkles,
      title: "Daily Devotion",
      description: "A short reflection that brings the verse to life and shapes how you carry the day."
    },
    {
      icon: PenLine,
      title: "Guided Reflection",
      description: "A simple prompt to slow down, notice one gift, and journal a thought. No pressure, just presence."
    },
    {
      icon: HandHeart,
      title: "A Quiet Prayer",
      description: "A guided moment with God to close the ritual — and the loudest part of your day."
    },
    {
      icon: Smartphone,
      title: "Earn Your Scroll Time",
      description: "Set a daily scroll goal. Each completed ritual unlocks a portion of your time on distracting apps — Instagram, TikTok, X, YouTube."
    },
    {
      icon: Sparkles,
      title: "Your Dove Companion",
      description: "A gentle character that grows with you. Stay consistent and your dove comes alive — miss a day and it goes back to sleep."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link to="/apps" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Apps
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/lovable-uploads/noa-icon.png"
                  alt="Noa"
                  className="w-20 h-20 rounded-2xl"
                />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight pb-1 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    Noa
                  </h1>
                  <p className="text-gray-400">Pray to Unlock Phone</p>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">
                  Coming Soon
                </Badge>
                <Badge variant="outline" className="border-amber-500 text-amber-400">Lifestyle</Badge>
                <Badge variant="outline" className="border-amber-500 text-amber-400">Faith</Badge>
              </div>

              <h2 className="text-2xl font-semibold text-amber-400 mb-4">
                Earn your scroll time. Every day.
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Noa turns mindless scrolling into intentional screen time. Earn access to distracting apps by completing four small daily rituals — a verse, a devotion, a reflection, and a prayer. Your dove companion grows with every ritual you complete.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-amber-700 opacity-70 cursor-not-allowed text-white px-8"
                  disabled
                >
                  Coming Soon on App Store
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-amber-600/10 blur-3xl rounded-full"></div>
                <img
                  src="/lovable-uploads/noa-hero.png"
                  alt="Noa dove companion"
                  className="relative w-72 md:w-80 h-auto drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Ritual Loop Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Daily Ritual</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Four small steps. A few minutes. That's all it takes to turn a mindless scroll into something that actually feeds you.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Read a Verse", desc: "Let God speak into your day." },
              { num: "02", title: "Read a Devotion", desc: "Let the Word shape your day." },
              { num: "03", title: "Reflect a Moment", desc: "Notice one gift today." },
              { num: "04", title: "Say a Prayer", desc: "A quiet moment with God." },
            ].map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-colors"
              >
                <div className="text-amber-400 font-semibold text-sm tracking-wider mb-3">{step.num}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Inside</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to redeem your screen time and rebuild a daily rhythm of faith.
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
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center mb-4">
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
      <section className="py-20 px-4 bg-white/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-amber-400" />
              <h2 className="text-2xl font-bold">Built with Care for Your Privacy</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your reflections, prayers, and journal entries stay private. Noa uses Apple's Screen Time API on-device, never sells your personal information, and removes your data automatically when you delete the app.
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
              You're not restricting your phone. You're redeeming it.
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Noa is launching soon on the App Store. Less scroll. More soul.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-700 opacity-70 cursor-not-allowed text-white px-8"
              disabled
            >
              Coming Soon on App Store
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Legal Links */}
      <section className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <Link to="/privacy-policy/noa" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/terms-conditions/noa" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Noa;
