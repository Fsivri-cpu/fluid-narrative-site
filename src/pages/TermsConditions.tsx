import { motion } from 'framer-motion';
import { FileText, AlertTriangle, Scale, Users } from 'lucide-react';

const TermsConditions = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: FileText,
      content: [
        "By accessing and using StriveX AI solutions, you accept and agree to be bound by these terms",
        "If you do not agree to these terms, you may not use our services",
        "We reserve the right to modify these terms at any time with notice",
        "Continued use of our services constitutes acceptance of updated terms"
      ]
    },
    {
      title: "Use of Services",
      icon: Users,
      content: [
        "You must be at least 18 years old to use our services",
        "You are responsible for maintaining the confidentiality of your account",
        "You agree to use our services only for lawful purposes",
        "You may not reverse engineer, copy, or redistribute our AI solutions"
      ]
    },
    {
      title: "Intellectual Property",
      icon: Scale,
      content: [
        "All content and technology provided by StriveX remains our intellectual property",
        "You retain ownership of any data you input into our systems",
        "Our AI models and algorithms are proprietary and protected by law",
        "Any feedback or suggestions you provide may be used to improve our services"
      ]
    },
    {
      title: "Limitations and Disclaimers",
      icon: AlertTriangle,
      content: [
        "Our services are provided 'as is' without warranties of any kind",
        "We do not guarantee uninterrupted or error-free service",
        "You use our AI solutions at your own risk and discretion",
        "We are not liable for any indirect, incidental, or consequential damages"
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
            Terms & Conditions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Please read these terms carefully before using our AI solutions and services.
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
            <h2 className="text-2xl font-semibold mb-6">Termination</h2>
            <p className="text-muted-foreground mb-4">
              We may terminate or suspend your access to our services immediately, without prior notice, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-muted-foreground">
              Upon termination, your right to use the service will cease immediately. All provisions of the Terms which by their nature should survive termination shall survive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-card rounded-lg p-8 border border-border"
          >
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: legal@strivex.com</p>
              <p>Address: 123 Innovation Street, Tech City, TC 12345</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;