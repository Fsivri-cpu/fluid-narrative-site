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
              StriveX ("we", "our", "us") owns and operates the{' '}
              <strong>Sunny – UV & Tanning Tracker</strong> mobile application (the "App").
              We are based in the Netherlands and publish the App worldwide.{' '}
              <strong>We never sell or rent your identifiable personal data.</strong>
            </p>
          </section>

          {/* Scope & Age Limit */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">2. Scope & Age Limit</h2>
            <p className="text-muted-foreground">
              This Policy covers data collected in the iOS and Android versions of the App and on strivex.ai.
              Minimum age to use the App is <strong>13 years</strong>.
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
                    <td className="border border-border p-3 font-semibold">UV & Sun Exposure</td>
                    <td className="border border-border p-3">Tanning session logs, UV index readings, sun exposure duration, location (for UV data)</td>
                    <td className="border border-border p-3">Core tracking & analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Skin Profile</td>
                    <td className="border border-border p-3">Skin type, sensitivity level, sunburn history</td>
                    <td className="border border-border p-3">Personalized recommendations</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">User-Provided</td>
                    <td className="border border-border p-3">Progress photos, notes, preferences</td>
                    <td className="border border-border p-3">Personalized features</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Authentication</td>
                    <td className="border border-border p-3">Apple ID (optional, iOS) / Google Sign-In (optional, Android)</td>
                    <td className="border border-border p-3">Sync & recovery</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Technical</td>
                    <td className="border border-border p-3">Device model, OS version, anonymized IP, crash logs</td>
                    <td className="border border-border p-3">Debug & security</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Marketing</td>
                    <td className="border border-border p-3">Push-token (OneSignal)</td>
                    <td className="border border-border p-3">Reminders & limited promos</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">
              We <strong>do not</strong> collect contacts or government-ID numbers.
            </p>
          </section>

          {/* How We Collect */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">4. How We Collect</h2>
            <p className="text-muted-foreground">
              • Manual input • Location services (for UV index, with permission) • Camera / gallery photo uploads (user permission) • Automatic telemetry
              <br />
              All traffic is TLS 1.2+ encrypted.
            </p>
          </section>

          {/* How We Use Data */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">5. How We Use Data</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Deliver and improve UV tracking features</li>
              <li>• Send sun exposure reminders and safety alerts</li>
              <li>• Provide personalized tanning recommendations based on skin type</li>
              <li>• Unlock Premium tiers via RevenueCat & Superwall</li>
              <li>• Product analytics (Firebase, Mixpanel)</li>
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
                    <td className="border border-border p-3 font-semibold">Firebase (+ Crashlytics)</td>
                    <td className="border border-border p-3">Back-end, auth, crash reports</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">RevenueCat</td>
                    <td className="border border-border p-3">Subscriptions & payments</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Supabase</td>
                    <td className="border border-border p-3">Data caching & edge functions</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Mixpanel</td>
                    <td className="border border-border p-3">Product analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Superwall</td>
                    <td className="border border-border p-3">Paywall management</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">OneSignal</td>
                    <td className="border border-border p-3">Push notifications</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">OpenWeather / Weather APIs</td>
                    <td className="border border-border p-3">Real-time UV index data</td>
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
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left">Platform</th>
                    <th className="border border-border p-3 text-left">Storage</th>
                    <th className="border border-border p-3 text-left">Region</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border border-border p-3 font-semibold">iOS</td>
                    <td className="border border-border p-3">Private iCloud DB</td>
                    <td className="border border-border p-3">Apple-managed (EU)</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Android</td>
                    <td className="border border-border p-3">Firebase</td>
                    <td className="border border-border p-3">United States</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground">
              Encryption at rest = AES-256. Regular security assessments & third-party pen-tests.
              <br />
              <strong>Retention:</strong> Identifiable data is erased 30 days after you delete your account; de-identified aggregates may be kept indefinitely.
            </p>
          </section>

          {/* Your Rights */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
            <p className="text-muted-foreground">
              Access, correct, delete, or export data → <strong>Settings › Data Controls</strong> or email <strong>support@strivexai.co</strong>. We respond within 30 days.
            </p>
          </section>

          {/* Children */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">9. Children</h2>
            <p className="text-muted-foreground">
              The App is <strong>not directed to children under 13</strong>. We do not knowingly collect their data.
            </p>
          </section>

          {/* Notifications & Promotions */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">10. Notifications & Promotions</h2>
            <p className="text-muted-foreground">
              Manage or disable reminders & promo pushes any time in <strong>Settings › Notifications</strong>.
            </p>
          </section>

          {/* International Transfers */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">11. International Transfers</h2>
            <p className="text-muted-foreground">
              Data may be processed in the US or EU; safeguarded by Standard Contractual Clauses or equivalent measures.
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
              Furkan Sivri, Zeijerveen 8, 1507 MC Zaandam, Netherlands.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default SunnyPrivacy;
