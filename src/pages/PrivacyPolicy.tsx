import { motion } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: [
        "Personal information you provide when contacting us or using our services",
        "Technical data such as IP addresses, browser types, and device information", 
        "Usage data about how you interact with our website and services",
        "Cookies and similar tracking technologies for website functionality"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: UserCheck,
      content: [
        "To provide and improve our AI solutions and services",
        "To communicate with you about our services and updates",
        "To analyze website usage and optimize user experience",
        "To comply with legal obligations and protect our rights"
      ]
    },
    {
      title: "Data Security",
      icon: Shield,
      content: [
        "We implement industry-standard security measures to protect your data",
        "All data transmissions are encrypted using SSL/TLS protocols",
        "Access to personal information is restricted to authorized personnel only",
        "Regular security audits and updates to maintain data protection"
      ]
    },
    {
      title: "Your Rights",
      icon: Lock,
      content: [
        "Right to access, update, or delete your personal information",
        "Right to opt-out of marketing communications",
        "Right to data portability and restriction of processing",
        "Right to lodge a complaint with relevant data protection authorities"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-lg p-8 border border-border"
            >
              <div className="flex items-center mb-6">
                <section.icon className="w-8 h-8 text-primary mr-4" />
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-card rounded-lg p-8 border border-border"
          >
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: privacy@strivex.com</p>
              <p>Address: 123 Innovation Street, Tech City, TC 12345</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;