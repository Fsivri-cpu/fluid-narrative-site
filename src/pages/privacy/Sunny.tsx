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
            <p className="text-muted-foreground">
              Sunny ("we", "us", or "our") provides personalized tanning guidance, UV index insights, and skin-safety tools. This Privacy Policy explains how we collect, use, and protect your information.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-medium mt-6 mb-3">1.1 Personal Information You Provide</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Skin profile information:</strong> skin tone, tanning goals, sensitivity.</li>
              <li>• <strong>Optional account data:</strong> email (if account or subscription linking is required).</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">1.2 Photos You Provide for Skin Analysis</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• You may upload a facial photo for AI-based skin tone estimation.</li>
              <li>• <strong>Photos are never stored on our servers.</strong></li>
              <li>• The image is processed via an OpenAI API call triggered through a secured Supabase Edge Function, and then immediately discarded.</li>
              <li>• We do not retain, save, sell, or train models on your photos.</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">1.3 Automatically Collected Data</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Location (approximate or precise)</strong> — Used only for delivering WeatherKit UV Index information.</li>
              <li>• <strong>Device data</strong> — app version, device model, performance logs.</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">1.4 Analytics & Attribution Data</h3>
            <p className="text-muted-foreground mb-4">We use the following third-party services:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>RevenueCat</strong> – Subscription status validation & purchase history.</li>
              <li>• <strong>Superwall</strong> – Paywall interactions and purchase events.</li>
              <li>• <strong>Mixpanel</strong> – Product analytics (anonymous usage events).</li>
              <li>• <strong>Firebase Analytics</strong> – General analytics and crash reporting.</li>
              <li>• <strong>AppsFlyer</strong> – Attribution, install source analysis, campaign measurement.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              These services may collect: app usage data, device information, in-app event data (e.g., paywall views, feature usage), attribution identifiers.
            </p>
            <p className="text-muted-foreground mt-2">
              We do not collect or store sensitive personal information through these services.
            </p>
          </section>

          {/* How We Use Your Data */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Data</h2>
            <p className="text-muted-foreground mb-4">We use collected information to:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• provide personalized tanning plans,</li>
              <li>• deliver UV Index and weather conditions via WeatherKit,</li>
              <li>• improve app performance,</li>
              <li>• analyze feature usage,</li>
              <li>• manage subscriptions and paywalls,</li>
              <li>• ensure account security,</li>
              <li>• process skin-tone analysis.</li>
            </ul>
            <p className="text-muted-foreground mt-4 font-semibold">
              We never sell your personal data.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">3. Third-Party Services</h2>
            
            <h3 className="text-xl font-medium mt-6 mb-3">3.1 Apple WeatherKit</h3>
            <p className="text-muted-foreground">
              Used to retrieve accurate UV Index and weather data based on your location. WeatherKit usage is governed by Apple's terms.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">3.2 OpenAI (Skin Analysis API)</h3>
            <p className="text-muted-foreground">
              Your photo is sent securely to OpenAI through a Supabase Edge Function. Photos are discarded after processing and not used for training.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">3.3 RevenueCat / Superwall / Mixpanel / Firebase / AppsFlyer</h3>
            <p className="text-muted-foreground mb-4">Used for analytics, attribution, and subscription management.</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">RevenueCat Privacy Policy</a></li>
              <li>• <a href="https://superwall.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Superwall Privacy Policy</a></li>
              <li>• <a href="https://mixpanel.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mixpanel Privacy Policy</a></li>
              <li>• <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Firebase Privacy Policy</a></li>
              <li>• <a href="https://www.appsflyer.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AppsFlyer Privacy Policy</a></li>
            </ul>
          </section>

          {/* Data Storage & Security */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">4. Data Storage & Security</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• We follow industry-standard encryption and security practices.</li>
              <li>• Photos are not stored.</li>
              <li>• Analytics and subscription data are stored securely by their respective providers.</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              Depending on your region (EU/EEA, UK, California), you may request:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• access to your data,</li>
              <li>• deletion of your data,</li>
              <li>• correction of your information,</li>
              <li>• opt-out of analytics tracking where applicable.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              You may contact us at: <strong>support@sunnyapp.ai</strong>
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">6. Children's Privacy</h2>
            <p className="text-muted-foreground">
              Sunny is not intended for children under 13.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this policy from time to time. Continued use of the app means acceptance of the updated terms.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default SunnyPrivacy;
