import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Droplets, Flame, Target, Calendar, BarChart3, Utensils, Star, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Jelly = () => {
  const screenshots = [
    { src: "/lovable-uploads/lolly-screenshot-1.jpg", alt: "Scan meals in seconds" },
    { src: "/lovable-uploads/lolly-screenshot-2.jpg", alt: "Spot hidden sugars instantly" },
    { src: "/lovable-uploads/lolly-hero-screenshot.png", alt: "Your healthy food coach" },
    { src: "/lovable-uploads/lolly-screenshot-4.jpg", alt: "Stay balanced every day" },
    { src: "/lovable-uploads/lolly-screenshot-5.jpg", alt: "Meals made for you" },
    { src: "/lovable-uploads/lolly-screenshot-6.jpg", alt: "See your body change" },
    { src: "/lovable-uploads/lolly-screenshot-7.jpg", alt: "Loved by thousands" },
  ];

  const features = [
    {
      icon: Flame,
      title: "Sugar & Calorie Tracking",
      description: "Log every meal and instantly see your sugar, calorie, and macro breakdown. Know exactly what you're consuming with detailed nutritional insights."
    },
    {
      icon: Utensils,
      title: "Curated Meal Plans",
      description: "Get personalized weekly meal plans tailored to your health goals and dietary preferences. Every meal is carefully selected by our nutrition experts."
    },
    {
      icon: Droplets,
      title: "Water Intake Tracker",
      description: "Stay hydrated with smart daily water goals and reminders. Track every sip and build a consistent hydration habit over time."
    },
    {
      icon: Calendar,
      title: "Streak System",
      description: "Build healthy habits with daily streaks and milestone rewards. Stay motivated by tracking your consistency day by day."
    },
    {
      icon: BarChart3,
      title: "Progress Insights",
      description: "Visualize your nutrition trends over time with detailed charts and weekly reports to keep you on track toward your goals."
    },
    {
      icon: Target,
      title: "Personalized Goals",
      description: "Set custom targets for sugar, calories, macros, and hydration. Lolly adapts to your unique health profile and lifestyle."
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
                  src="/lovable-uploads/jelly-app-icon.png"
                  alt="Lolly"
                  className="w-20 h-20 rounded-2xl"
                />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight pb-1 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
                    Lolly: AI Food & Sugar Tracker
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">5.0</span>
                </div>
                <span className="text-gray-500">•</span>
                <Badge variant="outline" className="border-pink-500 text-pink-400">Health & Fitness</Badge>
                <Badge variant="outline" className="border-rose-500 text-rose-400">Nutrition</Badge>
              </div>

              <h2 className="text-2xl font-semibold text-pink-400 mb-4">
                Eat Better. Feel Better. Every Day.
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Lolly is your personal AI food coach that helps you track sugar intake, log meals, stay hydrated, and build lasting healthy habits — all wrapped in a fun, motivating experience.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-rose-500 hover:opacity-90 transition-opacity text-white px-8"
                  onClick={() => window.open('https://apps.apple.com/us/app/sugar-tracker-lolly-ai-coach/id6760222140', '_blank')}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on App Store
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-64 md:w-72 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-pink-500/30 border border-pink-500/20">
                <img
                  src="/lovable-uploads/lolly-hero-screenshot.jpg"
                  alt="Lolly App Screenshot"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 px-4">
        <div className="mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">App Preview</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Take a look at Lolly's beautiful interface and powerful features.
            </p>
          </motion.div>

          <div className="flex gap-6 overflow-x-auto pb-8">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <div className="w-64 xl:w-72 rounded-3xl overflow-hidden shadow-2xl shadow-pink-500/20 border border-pink-500/20">
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
              Everything you need to build healthier eating habits and track your nutrition effortlessly.
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
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-4">
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
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-pink-400" />
              <h2 className="text-2xl font-bold">Privacy First</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your health data stays on your device. Lolly never sells your personal information. All data is removed automatically when you delete the app.
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
              Start Your Healthy Journey Today
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Download Lolly and make every meal count toward a healthier you.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:opacity-90 transition-opacity text-white px-8"
              onClick={() => window.open('https://apps.apple.com/us/app/sugar-tracker-lolly-ai-coach/id6760222140', '_blank')}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Legal Links */}
      <section className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <Link to="/privacy-policy/jelly" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/terms-conditions/jelly" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jelly;
