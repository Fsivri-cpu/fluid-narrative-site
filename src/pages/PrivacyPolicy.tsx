import { motion } from 'framer-motion';
import { Shield, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const apps = [
    {
      name: "GLP-1 Shot Tracker – Tirzepatide",
      description: "Track your GLP-1 injections, symptoms, and health progress with secure data protection.",
      icon: Smartphone,
      slug: "glp-1-tracker"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-20">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <img src="/lovable-uploads/strivex-logo-transparent.png" alt="StriveX Logo" className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Privacy Policies
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy is our priority. We're committed to protecting your personal data and being transparent about how we collect, use, and safeguard your information across all our applications.
          </p>
        </motion.div>

        {/* Apps List */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {apps.map((app, index) => (
              <div key={app.slug} className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <app.icon className="w-12 h-12 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">{app.name}</h3>
                    <p className="text-muted-foreground mb-6">{app.description}</p>
                    <Link
                      to={`/privacy-policy/${app.slug}`}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                    >
                      <Shield className="w-4 h-4" />
                      View Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* General Privacy Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 bg-muted/30 rounded-lg p-8 border border-border"
          >
            <h2 className="text-2xl font-semibold mb-6">Our Privacy Commitment</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Data Protection</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• End-to-end encryption for sensitive data</li>
                  <li>• Regular security audits and assessments</li>
                  <li>• GDPR and HIPAA compliance measures</li>
                  <li>• Minimal data collection principles</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Your Rights</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Access your personal data anytime</li>
                  <li>• Request data correction or deletion</li>
                  <li>• Export your data in standard formats</li>
                  <li>• Opt-out of data processing activities</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;