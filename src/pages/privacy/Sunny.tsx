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
            <span><strong>Effective Date:</strong> 08 Dec 2025</span>
            <span><strong>Last Updated:</strong> 08 Dec 2025</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-12 prose prose-lg dark:prose-invert max-w-none"
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
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left">Category</th>
                    <th className="border border-border p-3 text-left">Examples</th>
                    <th className="border border-border p-3 text-left">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border border-border p-3 font-semibold">Information You Provide</td>
                    <td className="border border-border p-3">Skin profile (skin tone, tanning preferences, sensitivity); optional email for account</td>
                    <td className="border border-border p-3">Personalization & account linking</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Photos & AI Processing</td>
                    <td className="border border-border p-3">Facial photos for skin analysis → processed via <strong>OpenAI API</strong> through Supabase Edge Function</td>
                    <td className="border border-border p-3">AI skin-tone estimation (not stored)</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Automatic Data</td>
                    <td className="border border-border p-3">Location (for UV Index via Apple WeatherKit); device model, OS, app version, performance logs</td>
                    <td className="border border-border p-3">UV delivery & debugging</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Analytics & Attribution</td>
                    <td className="border border-border p-3">Device identifiers, app usage events, funnel interactions (paywall, onboarding)</td>
                    <td className="border border-border p-3">Product analytics & attribution</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">
              We do not share sensitive personal data with analytics services.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Provide personalized tanning recommendations</li>
              <li>• Deliver real-time UV Index through Apple WeatherKit</li>
              <li>• Improve app performance and user experience</li>
              <li>• Process subscription status</li>
              <li>• Analyze product usage</li>
              <li>• Perform AI skin-tone evaluation</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              <strong>We never sell your personal information.</strong>
            </p>
          </section>

          {/* How We Share Your Information */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">4. How We Share Your Information</h2>
            <p className="text-muted-foreground mb-4">Information may be shared only with:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Service providers listed below</li>
              <li>• OpenAI (solely for processing photos – not stored or used for training)</li>
              <li>• Apple WeatherKit (for weather/UV data fetching)</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We do not share information for advertising or marketing sale purposes.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left">Service</th>
                    <th className="border border-border p-3 text-left">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border border-border p-3 font-semibold">Mixpanel</td>
                    <td className="border border-border p-3">Product analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Firebase Analytics</td>
                    <td className="border border-border p-3">General analytics & crash reporting</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">AppsFlyer</td>
                    <td className="border border-border p-3">Attribution & campaign measurement</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">RevenueCat</td>
                    <td className="border border-border p-3">Subscriptions & payments</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Superwall</td>
                    <td className="border border-border p-3">Paywall management</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Apple WeatherKit</td>
                    <td className="border border-border p-3">UV Index & weather data</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold"><strong>OpenAI API</strong></td>
                    <td className="border border-border p-3">Skin-tone analysis (photos discarded after processing)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Data Retention */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Photos are immediately deleted after analysis</li>
              <li>• Analytics data is retained by third-party providers per their policies</li>
              <li>• Subscription data is retained by RevenueCat as required for purchase validation</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
            <p className="text-muted-foreground">
              We use industry-standard security practices to protect your data. While no method is 100% secure, we take reasonable steps to safeguard your information.
            </p>
          </section>

          {/* Your Rights & Choices */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">8. Your Rights & Choices</h2>
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
            <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
            <p className="text-muted-foreground">
              Your information may be processed in regions outside your country, including the U.S. We rely on applicable safeguards to comply with data protection laws.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
            <p className="text-muted-foreground">
              Sunny is <strong>not intended for users under 13</strong>. We do not knowingly collect information from children.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">11. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy periodically. Updated versions will be posted within the App or on our website.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">12. Contact</h2>
            <p className="text-muted-foreground">
              Email <strong>info@strivexai.co</strong> or write to:
              <br />
              Vibepps Dijital Hizmetler A.Ş., Zeijerveen 8, 1507 MC Zaandam, Netherlands.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default SunnyPrivacy;