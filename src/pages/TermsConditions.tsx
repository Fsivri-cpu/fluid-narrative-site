import { motion } from 'framer-motion';
import { FileText, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  const apps = [
    {
      name: "Jabsy – GLP-1 Shot Tracker",
      description: "Comprehensive terms covering app usage, medical disclaimers, and subscription policies.",
      icon: "/lovable-uploads/glp1-tracker-icon.png",
      slug: "glp-1-tracker"
    },
    {
      name: "Sunny – UV & Tanning Tracker",
      description: "Terms covering UV tracking features, health disclaimers, and subscription policies.",
      icon: "/lovable-uploads/sunny-ai-icon.png",
      slug: "sunny"
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
            <FileText className="w-12 h-12 text-primary mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Terms & Conditions
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Clear and comprehensive terms that govern the use of our applications. We believe in transparency and want you to understand your rights and responsibilities when using our services.
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
                    <img src={app.icon} alt={`${app.name} Logo`} className="w-12 h-12 rounded-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">{app.name}</h3>
                    <p className="text-muted-foreground mb-6">{app.description}</p>
                    <Link
                      to={`/terms-conditions/${app.slug}`}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                    >
                      <FileText className="w-4 h-4" />
                      View Terms & Conditions
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* General Terms Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 bg-muted/30 rounded-lg p-8 border border-border"
          >
            <h2 className="text-2xl font-semibold mb-6">Key Principles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Fair Usage</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Clear and understandable terms</li>
                  <li>• Reasonable usage restrictions</li>
                  <li>• Protection of user rights</li>
                  <li>• Transparent policy changes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Legal Compliance</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• GDPR and privacy law compliance</li>
                  <li>• Medical disclaimer coverage</li>
                  <li>• Intellectual property protection</li>
                  <li>• Dispute resolution procedures</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;