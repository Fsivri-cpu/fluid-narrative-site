import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NiyyahPrivacy = () => {
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
          <Link to="/apps/niyyah" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Niyyah
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <img src="/lovable-uploads/niyyah-icon.png" alt="Niyyah" className="w-16 h-16 rounded-2xl" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">Niyyah – Ramadan Tracker</h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <span><strong>Effective Date:</strong> 21 Feb 2026</span>
            <span><strong>Last Updated:</strong> 21 Feb 2026</span>
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
              Strivex Dijital Hizmetler A.S. ("we", "our", "us") owns and operates the <strong>Niyyah – Ramadan Tracker</strong> mobile application (the "App").
              We are based in Turkey and publish the App worldwide. <strong>We never sell or rent your identifiable personal data.</strong> Your spiritual journey and personal data remain private.
            </p>
          </section>

          {/* Scope & Age Limit */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">2. Scope & Age Limit</h2>
            <p className="text-muted-foreground">
              This Policy covers data collected in the iOS and Android versions of the App and on strivex.ai.
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
                    <td className="border border-border p-3 font-semibold">Fasting & Spiritual</td>
                    <td className="border border-border p-3">Daily fasting status, prayer completion, dhikr counts, daily intentions, Ramadan calendar progress</td>
                    <td className="border border-border p-3">Core tracking features</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Health & Wellness</td>
                    <td className="border border-border p-3">Period/menstrual cycle status (opt-in, used to mark excused fasting days)</td>
                    <td className="border border-border p-3">Adjusting fasting goals for women</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Location</td>
                    <td className="border border-border p-3">Selected city (not GPS coordinates) for prayer time calculation</td>
                    <td className="border border-border p-3">Accurate prayer times via Aladhan API</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Preferences</td>
                    <td className="border border-border p-3">Language preference (English/Arabic), notification settings</td>
                    <td className="border border-border p-3">Personalized experience</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Technical</td>
                    <td className="border border-border p-3">Device model, OS version, crash logs</td>
                    <td className="border border-border p-3">Debug & stability</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">
              We <strong>do not</strong> collect GPS coordinates, contacts, photos, or government-ID numbers. Your selected city is used only to fetch prayer times.
            </p>
          </section>

          {/* Local-First Storage */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">4. Local-First Storage</h2>
            <p className="text-muted-foreground">
              Niyyah follows a <strong>local-first</strong> approach. All your fasting data, intentions, dhikr counts, and calendar progress are stored locally on your device using AsyncStorage.
              <strong> No user account or server-side database is required.</strong> Your data lives on your device and is not synced to external servers unless explicitly stated.
            </p>
          </section>

          {/* How We Collect */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">5. How We Collect</h2>
            <p className="text-muted-foreground">
              &bull; Manual input (fasting logs, intentions, dhikr taps)
              <br />&bull; City selection for prayer times (not GPS)
              <br />&bull; Automatic telemetry for crash reporting
              <br /><br />
              Prayer times are fetched from the Aladhan API via Supabase Edge Functions proxy. Only your selected city name is sent — no personal data.
            </p>
          </section>

          {/* How We Use Data */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">6. How We Use Data</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>&bull; Deliver core fasting tracking, prayer time, and dhikr features</li>
              <li>&bull; Send prayer time alerts and daily reminders (opt-in)</li>
              <li>&bull; Display your Ramadan calendar progress and statistics</li>
              <li>&bull; Product analytics via Firebase to improve the App</li>
              <li>&bull; Crash monitoring via Firebase Crashlytics</li>
              <li>&bull; Internal research with <strong>de-identified, aggregated statistics</strong> (never re-identifiable, never sold)</li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
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
                    <td className="border border-border p-3 font-semibold">Firebase Analytics</td>
                    <td className="border border-border p-3">Anonymous usage analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Firebase Crashlytics</td>
                    <td className="border border-border p-3">Crash reporting & stability monitoring</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Supabase Edge Functions</td>
                    <td className="border border-border p-3">Proxy for Aladhan prayer times API</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">RevenueCat</td>
                    <td className="border border-border p-3">Subscription management</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Superwall</td>
                    <td className="border border-border p-3">Paywall presentation</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Aladhan API</td>
                    <td className="border border-border p-3">Islamic prayer time calculations</td>
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
            <h2 className="text-2xl font-semibold mb-4">8. Storage & Security</h2>
            <p className="text-muted-foreground">
              All personal data (fasting logs, intentions, dhikr counts, calendar) is stored <strong>locally on your device</strong> using AsyncStorage. No server-side user database is used.
              <br /><br />
              Firebase Analytics and Crashlytics collect only anonymized usage and crash data. Prayer times are fetched ephemerally and not stored on our servers.
              <br /><br />
              <strong>Retention:</strong> Your data persists on your device until you delete it via Settings or uninstall the App.
            </p>
          </section>

          {/* Your Rights */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">9. Your Rights</h2>
            <p className="text-muted-foreground">
              Since your data is stored locally, you have full control. Use <strong>Settings &rsaquo; Delete All Data</strong> to erase all progress and start fresh. You may also contact <strong>support@strivexai.co</strong> for questions. We respond within 30 days.
            </p>
          </section>

          {/* Children */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">10. Children</h2>
            <p className="text-muted-foreground">
              The App is <strong>not directed to children under 12</strong>. We do not knowingly collect their data.
            </p>
          </section>

          {/* Notifications */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">11. Notifications</h2>
            <p className="text-muted-foreground">
              Prayer time alerts and daily reminders are opt-in. Manage or disable them any time in <strong>Settings &rsaquo; Notifications</strong>.
            </p>
          </section>

          {/* International Transfers */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">12. International Transfers</h2>
            <p className="text-muted-foreground">
              Anonymous analytics data may be processed in the US (Firebase/Google). Prayer time requests are proxied through Supabase Edge Functions. All transfers are safeguarded by Standard Contractual Clauses or equivalent measures.
            </p>
          </section>

          {/* Changes */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">13. Changes</h2>
            <p className="text-muted-foreground">
              Material changes appear in-app. Continued use = acceptance of the updated Policy.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">14. Contact</h2>
            <p className="text-muted-foreground">
              Email <strong>support@strivexai.co</strong> or write to:
              <br />
              Strivex Dijital Hizmetler A.S., Izmir Teknoloji Ussu, Gulbahce, Icmeler Caddesi, 35433 Urla/Izmir, Turkiye.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default NiyyahPrivacy;
