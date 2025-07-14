import { motion } from 'framer-motion';

const GLP1TrackerPrivacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Privacy Policy
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
            GLP-1 Shot Tracker – Tirzepatide
          </h2>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <span><strong>Effective Date:</strong> 14 Jul 2025</span>
            <span><strong>Last Updated:</strong> 14 Jul 2025</span>
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
              Furkan Sivri ("we", "our", "us") owns and operates the <strong>GLP-1 Shot Tracker – Tirzepatide</strong> mobile application (the "App").
              We are based in the Netherlands and publish the App worldwide. <strong>We never sell or rent your identifiable personal or health data.</strong>
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
                    <td className="border border-border p-3 font-semibold">Health & Wellness</td>
                    <td className="border border-border p-3">GLP-1 injection logs (date, medication, dosage, NDC); symptoms & side-effects; weight; water intake; age; height; Apple Health / Google Health Connect activity; calorie intake <em>(Premium)</em></td>
                    <td className="border border-border p-3">Core tracking & analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Meal Photos (Opt-in)</td>
                    <td className="border border-border p-3">User-taken food images → processed via <strong>OpenAI Image API</strong></td>
                    <td className="border border-border p-3">Visual food logging & calorie estimation</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">User-Provided</td>
                    <td className="border border-border p-3">1 shot or symptom per day (Free); unlimited entries & food logs (Premium); transformation photos</td>
                    <td className="border border-border p-3">Personalised features</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Authentication</td>
                    <td className="border border-border p-3">Apple ID (optional, iOS) / Google Sign-In (required, Android)</td>
                    <td className="border border-border p-3">Sync & recovery</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Technical</td>
                    <td className="border border-border p-3">Device model, OS version, anonymised IP, crash logs</td>
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
              We <strong>do not</strong> collect GPS, contacts, or government-ID numbers.
            </p>
          </section>

          {/* How We Collect */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">4. How We Collect</h2>
            <p className="text-muted-foreground">
              • Manual input • Camera / gallery photo uploads (user permission) • Apple Health / Health Connect (opt-in) • Pharmacy integrations (with consent) • Automatic telemetry
              <br />
              All traffic is TLS 1.2+ encrypted.
            </p>
          </section>

          {/* How We Use Data */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">5. How We Use Data</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Deliver and improve tracking features</li>
              <li>• Send dosage reminders, motivational nudges & occasional promotions</li>
              <li>• Unlock Premium tiers (Weekly / Lifetime / Yearly) via RevenueCat & Superwall</li>
              <li>• Product analytics (Firebase, Mixpanel, Statsig)</li>
              <li>• <strong>Process meal photos through OpenAI Image API</strong> to estimate nutrition (images are processed transiently and not stored by OpenAI)</li>
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
                    <td className="border border-border p-3 font-semibold">Statsig</td>
                    <td className="border border-border p-3">Feature flags & experimentation</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Mixpanel</td>
                    <td className="border border-border p-3">Product analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">AppsFlyer</td>
                    <td className="border border-border p-3">Attribution analytics</td>
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
                    <td className="border border-border p-3 font-semibold">Apple Health / Google Health Connect</td>
                    <td className="border border-border p-3">Optional data import</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold"><strong>OpenAI Image API</strong></td>
                    <td className="border border-border p-3">Food-photo recognition & calorie estimation</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Google Analytics (web)</td>
                    <td className="border border-border p-3">Basic traffic stats</td>
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
                  <tr>
                    <td className="border border-border p-3 font-semibold">Meal Photos</td>
                    <td className="border border-border p-3">Encrypted alongside other app data • transient copy to OpenAI</td>
                    <td className="border border-border p-3">—</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Web</td>
                    <td className="border border-border p-3">Google Analytics (aggregated)</td>
                    <td className="border border-border p-3">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground">
              Encryption at rest = AES-256. Annual HIPAA/GDPR risk assessments & third-party pen-tests.
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
              The App is <strong>not directed to children under 12</strong>. We do not knowingly collect their data.
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

export default GLP1TrackerPrivacy;