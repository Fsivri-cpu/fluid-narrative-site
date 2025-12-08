import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SunnyPrivacy = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
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
          {/* Introduction */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              Sunny ("we", "our", "the App") provides UV index tracking, tanning insights, and AI-powered skin analysis. This Privacy Policy explains how we collect, use, disclose, and protect your personal information.
            </p>
            <p className="text-muted-foreground mt-4">
              By using Sunny, you agree to the practices described in this Policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium mt-6 mb-3">2.1 Information You Provide</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Skin profile information (skin tone, tanning preferences, sensitivity)</li>
              <li>• Optional account information such as email (if account creation is enabled)</li>
              <li>• Photos uploaded for skin analysis</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">2.2 Photos & AI Processing</h3>
            <p className="text-muted-foreground mb-2">If you upload a photo for skin analysis:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• The image is processed through an OpenAI model via a secure Supabase Edge Function</li>
              <li>• Photos are not stored, retained, or used for training</li>
              <li>• The App does not save photos on external servers</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">2.3 Automatically Collected Information</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Location data (precise or approximate) used to retrieve UV Index through Apple WeatherKit</li>
              <li>• Device details such as model, OS version, app version, performance data</li>
              <li>• Usage analytics and interaction events</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">2.4 Third-Party Analytics & Attribution</h3>
            <p className="text-muted-foreground mb-2">We use:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Mixpanel</li>
              <li>• Firebase Analytics</li>
              <li>• AppsFlyer</li>
              <li>• RevenueCat</li>
              <li>• Superwall</li>
            </ul>
            <p className="text-muted-foreground mt-4 mb-2">These services may collect:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Device identifiers</li>
              <li>• App usage events</li>
              <li>• Attribution data</li>
              <li>• Funnel interactions (paywall, subscription, onboarding)</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We do not share sensitive personal data with these services.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use collected information to:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Provide personalized tanning recommendations</li>
              <li>• Deliver real-time UV Index through Apple WeatherKit</li>
              <li>• Improve app performance and user experience</li>
              <li>• Process subscription status</li>
              <li>• Analyze product usage</li>
              <li>• Perform AI skin-tone evaluation</li>
            </ul>
            <p className="text-muted-foreground mt-4 font-semibold">
              We never sell your personal information.
            </p>
          </section>

          {/* How We Share Your Information */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">4. How We Share Your Information</h2>
            <p className="text-muted-foreground mb-4">Information may be shared only with:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Service providers listed above</li>
              <li>• OpenAI (solely for processing photos)</li>
              <li>• Apple WeatherKit (for weather/UV data fetching)</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We do not share information for advertising or marketing sale purposes.
            </p>
          </section>

          {/* Data Retention */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Photos are immediately deleted after analysis</li>
              <li>• Analytics data is retained by third-party providers per their policies</li>
              <li>• Subscription data is retained by RevenueCat as required for purchase validation</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p className="text-muted-foreground">
              We use industry-standard security practices to protect your data. While no method is 100% secure, we take reasonable steps to safeguard your information.
            </p>
          </section>

          {/* Your Rights & Choices */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights & Choices</h2>
            <p className="text-muted-foreground mb-4">Depending on your location, you may request:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Access to your information</li>
              <li>• Deletion of your data</li>
              <li>• Correction of inaccurate information</li>
              <li>• Opt-out of certain analytics</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              To submit a request: <strong>info@strivexai.co</strong>
            </p>
          </section>

          {/* International Data Transfers */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
            <p className="text-muted-foreground">
              Your information may be processed in regions outside your country, including the U.S. We rely on applicable safeguards to comply with data protection laws.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground">
              Sunny is not intended for users under 13. We do not knowingly collect information from children.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy periodically. Updated versions will be posted within the App or on our website.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">11. Contact</h2>
            <p className="text-muted-foreground">
              For questions or requests, email: <strong>info@strivexai.co</strong>
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default SunnyPrivacy;