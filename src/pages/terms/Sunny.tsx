import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SunnyTerms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <Link
            to="/apps/sunny"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sunny
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <img
              src="/lovable-uploads/sunny-ai-icon.png"
              alt="Sunny"
              className="w-16 h-16 rounded-2xl"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Terms of Use</h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Sunny – UV & Tanning Tracker
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <span><strong>Last Updated:</strong> December 2025</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Acceptance of Terms */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By downloading or using Sunny, you agree to these Terms and our Privacy Policy. If you do not agree, please discontinue use of the App.
            </p>
          </section>

          {/* Description of Service */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground mb-4">Sunny provides:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• UV Index insights using Apple WeatherKit</li>
              <li>• Personalized tanning guidance</li>
              <li>• AI-based skin-tone analysis</li>
              <li>• Sun-safety reminders and notifications</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Sunny is for informational purposes only.
            </p>
          </section>

          {/* Health Disclaimer */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">3. Health Disclaimer</h2>
            <p className="text-muted-foreground">
              Sunny does not provide medical advice, diagnosis, or treatment. It cannot assess skin cancer risk or determine safe medical exposure levels. Always consult a healthcare professional for medical questions or skin concerns.
            </p>
          </section>

          {/* User Obligations */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">4. User Obligations</h2>
            <p className="text-muted-foreground mb-4">You agree not to:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Upload harmful, illegal, or abusive content</li>
              <li>• Misuse or attempt to reverse-engineer the App</li>
              <li>• Provide false information that impacts recommendations</li>
              <li>• Exploit the photo analysis feature</li>
            </ul>
          </section>

          {/* Subscriptions & Billing */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">5. Subscriptions & Billing</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Certain features require a paid subscription</li>
              <li>• Payments are handled via Apple In-App Purchases</li>
              <li>• Subscription renewals and cancellations must be managed in your Apple ID settings</li>
              <li>• Refund decisions are determined solely by Apple</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
            <p className="text-muted-foreground mb-4">Sunny uses third-party services including:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• RevenueCat</li>
              <li>• Superwall</li>
              <li>• Mixpanel</li>
              <li>• Firebase Analytics</li>
              <li>• AppsFlyer</li>
              <li>• Apple WeatherKit</li>
              <li>• OpenAI</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Your use of Sunny constitutes acceptance of their respective terms.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All branding, design, features, and content in Sunny belong to the Sunny team. You may not copy, distribute, or reproduce materials without permission.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              Sunny is provided "as is," without warranties of any kind. We do not guarantee:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Accuracy of weather or UV Index data</li>
              <li>• Accuracy of AI skin analysis</li>
              <li>• Continuous, error-free operation</li>
            </ul>
            <p className="text-muted-foreground mt-4 mb-4">We are not responsible for:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Sunburn or skin damage</li>
              <li>• Misuse of tanning guidelines</li>
              <li>• Any medical or cosmetic outcome</li>
            </ul>
            <p className="text-muted-foreground mt-4 font-semibold">
              Use of the App is at your own risk.
            </p>
          </section>

          {/* Governing Law */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms are governed by the laws of the jurisdiction where the company is established.
            </p>
          </section>

          {/* Termination */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
            <p className="text-muted-foreground">
              We may suspend or terminate access if you violate these Terms.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">11. Contact</h2>
            <p className="text-muted-foreground">
              For support or inquiries, email: <strong>info@strivexai.co</strong>
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default SunnyTerms;