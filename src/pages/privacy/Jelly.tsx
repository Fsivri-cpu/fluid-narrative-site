import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const JellyPrivacy = () => {
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
            to="/apps/jelly"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Lolly
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <img
              src="/lovable-uploads/jelly-app-icon.png"
              alt="Lolly"
              className="w-16 h-16 rounded-2xl"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Lolly: AI Food & Sugar Tracker
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Bundle Identifier: com.strivexai.jellysugartracker
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <span><strong>Effective Date:</strong> 24 Mar 2025</span>
            <span><strong>Last Updated:</strong> 24 Mar 2025</span>
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
              Strivex Dijital Hizmetler A.Ş. ("we", "our", "us") owns and operates the <strong>Lolly: AI Food & Sugar Tracker</strong> mobile application (the "App").
              We are based in Turkey and publish the App worldwide. <strong>We never sell or rent your identifiable personal or health data.</strong>
            </p>
          </section>

          {/* Scope & Age Limit */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">2. Scope & Age Limit</h2>
            <p className="text-muted-foreground">
              This Policy covers data collected in the iOS version of the App and on strivexai.co.
              Minimum age to use the App is <strong>12 years</strong>.
            </p>
          </section>

          {/* Data We Collect */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">3. Data We Collect</h2>
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
                    <td className="border border-border p-3 font-semibold">Health & Nutrition</td>
                    <td className="border border-border p-3">Meal logs, sugar intake, calorie tracking, macro breakdown, water intake, streak data</td>
                    <td className="border border-border p-3">Core tracking & progress features</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">User-Provided</td>
                    <td className="border border-border p-3">Age, gender, height, weight, dietary preferences, health goals</td>
                    <td className="border border-border p-3">Personalised meal plans & goal setting</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Technical</td>
                    <td className="border border-border p-3">Device model, OS version, app version, crash logs, performance data</td>
                    <td className="border border-border p-3">Debug & stability</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Analytics & Attribution</td>
                    <td className="border border-border p-3">Device identifiers, app usage events, onboarding funnel interactions, paywall events</td>
                    <td className="border border-border p-3">Product analytics & marketing attribution</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">
              We <strong>do not</strong> collect GPS coordinates, contacts, photos, or government-ID numbers.
            </p>
          </section>

          {/* Local-First Storage */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">4. Local-First Storage</h2>
            <p className="text-muted-foreground">
              Lolly follows a <strong>local-first</strong> approach. All your meal logs, sugar tracking data, water records, and streak progress are stored locally on your device.
              <strong> No server-side user database is required.</strong> Your data lives on your device and is not synced to external servers unless explicitly stated.
            </p>
          </section>

          {/* How We Use Data */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">5. How We Use Data</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Deliver core sugar tracking, meal logging, and water intake features</li>
              <li>• Provide personalised meal plans and nutrition recommendations</li>
              <li>• Power the streak and milestone achievement reward system</li>
              <li>• Send hydration reminders and habit notifications (opt-in)</li>
              <li>• Unlock Premium features via RevenueCat & Superwall</li>
              <li>• Product analytics (Firebase, Mixpanel) to improve the App</li>
              <li>• Crash monitoring via Firebase Crashlytics</li>
              <li>• Internal research with <strong>de-identified, aggregated statistics</strong> (never re-identifiable, never sold)</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
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
                    <td className="border border-border p-3 font-semibold">Firebase Analytics & Crashlytics</td>
                    <td className="border border-border p-3">Anonymous usage analytics & crash reporting</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Adjust</td>
                    <td className="border border-border p-3">Attribution & campaign measurement</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">RevenueCat</td>
                    <td className="border border-border p-3">Subscriptions & in-app payments</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Superwall</td>
                    <td className="border border-border p-3">Paywall management</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">
              All vendors are contractually barred from selling or re-identifying data.
            </p>
          </section>

          {/* Storage & Security */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">7. Storage & Security</h2>
            <p className="text-muted-foreground">
              All personal health and nutrition data is stored <strong>locally on your device</strong>. No server-side user database is used for personal data.
              <br /><br />
              Firebase Analytics and Crashlytics collect only anonymized usage and crash data. All traffic to third-party services is TLS 1.2+ encrypted.
              <br /><br />
              <strong>Retention:</strong> Your data persists on your device until you delete it via Settings or uninstall the App. Analytics data is retained by third-party providers per their own policies.
            </p>
          </section>

          {/* Your Rights */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
            <p className="text-muted-foreground mb-4">Since your data is stored locally, you have full control. You may also:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Request access to or deletion of your data</li>
              <li>• Opt-out of analytics via device settings</li>
              <li>• Contact us to exercise any applicable data rights</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Email <strong>support@strivexai.co</strong> — we respond within 30 days.
            </p>
          </section>

          {/* Children */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">9. Children</h2>
            <p className="text-muted-foreground">
              The App is <strong>not directed to children under 12</strong>. We do not knowingly collect their data.
            </p>
          </section>

          {/* Notifications */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">10. Notifications</h2>
            <p className="text-muted-foreground">
              Hydration reminders and habit nudges are opt-in. Manage or disable them any time in <strong>Settings › Notifications</strong>.
            </p>
          </section>

          {/* International Transfers */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">11. International Transfers</h2>
            <p className="text-muted-foreground">
              Anonymous analytics data may be processed in the US (Firebase/Google, Mixpanel). All transfers are safeguarded by Standard Contractual Clauses or equivalent measures.
            </p>
          </section>

          {/* Changes */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">12. Changes</h2>
            <p className="text-muted-foreground">
              Material changes appear in-app. Continued use = acceptance of the updated Policy.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">13. Contact</h2>
            <p className="text-muted-foreground">
              Email <strong>support@strivexai.co</strong> or write to:
              <br />
              Strivex Dijital Hizmetler A.Ş., İzmir Teknoloji Üssü, Gülbahçe, İçmeler Caddesi, 35433 Urla/İzmir, Türkiye.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default JellyPrivacy;
