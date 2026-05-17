import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NoaPrivacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <Link
            to="/apps/noa"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Noa
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <img
              src="/lovable-uploads/noa-icon.png"
              alt="Noa"
              className="w-16 h-16 rounded-2xl"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Noa: Pray to Unlock Phone
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <span><strong>Effective Date:</strong> 17 May 2026</span>
            <span><strong>Last Updated:</strong> 17 May 2026</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-12 prose prose-lg dark:prose-invert max-w-none"
        >
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              Strivex Dijital Hizmetler A.Ş. ("we", "our", "us") owns and operates the <strong>Noa: Pray to Unlock Phone</strong> mobile application (the "App").
              We are based in Turkey and publish the App worldwide. <strong>We never sell or rent your identifiable personal or spiritual data.</strong>
            </p>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">2. Scope & Age Limit</h2>
            <p className="text-muted-foreground">
              This Policy covers data collected in the iOS version of the App and on strivexai.co.
              Minimum age to use the App is <strong>13 years</strong>.
            </p>
          </section>

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
                    <td className="border border-border p-3 font-semibold">Reflection & Journal</td>
                    <td className="border border-border p-3">Personal reflection notes, journal entries, prayer commitments, ritual completion logs, streak progress</td>
                    <td className="border border-border p-3">Core ritual experience and progress tracking</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">User-Provided</td>
                    <td className="border border-border p-3">Daily scroll-time goal, preferred ritual time, denomination preference, scroll habit answers from onboarding</td>
                    <td className="border border-border p-3">Personalised verse, devotion, reflection and prayer content</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Screen Time Authorization</td>
                    <td className="border border-border p-3">Apple Screen Time / Family Controls authorization, list of apps you choose to gate behind the ritual</td>
                    <td className="border border-border p-3">Locking and unlocking distracting apps on your device only</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Technical</td>
                    <td className="border border-border p-3">Device model, OS version, app version, crash logs, performance data</td>
                    <td className="border border-border p-3">Debug & stability</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Analytics & Attribution</td>
                    <td className="border border-border p-3">Anonymous app usage events, onboarding funnel interactions, paywall events</td>
                    <td className="border border-border p-3">Product analytics & marketing attribution</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">
              We <strong>do not</strong> collect GPS coordinates, contacts, photos, biometric identifiers, or government-ID numbers.
            </p>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">4. Local-First Storage</h2>
            <p className="text-muted-foreground">
              Noa follows a <strong>local-first</strong> approach. All your journal entries, reflections, prayer commitments, ritual logs and streak progress are stored locally on your device.
              <strong> No server-side user database is required.</strong> Your spiritual content never leaves your device unless you explicitly export or share it.
            </p>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">5. Apple Screen Time / Family Controls</h2>
            <p className="text-muted-foreground">
              Noa uses Apple's <strong>Screen Time / Family Controls</strong> framework to lock and unlock the distracting apps you choose during onboarding. This authorization is granted by you in iOS Settings and is processed entirely on-device.
              <br /><br />
              Apple does <strong>not</strong> share your Screen Time data with us, and we do not transmit any list of apps, usage statistics, or unlock events off your device.
            </p>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">6. How We Use Data</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Deliver the daily ritual loop (verse, devotion, reflection, prayer)</li>
              <li>• Personalise verses, devotions, reflection prompts and prayer style based on your onboarding answers</li>
              <li>• Power the dove companion progression and streak protection mechanics</li>
              <li>• Send ritual reminders and habit nudges (opt-in)</li>
              <li>• Unlock Premium features via RevenueCat & Superwall</li>
              <li>• Product analytics (Firebase, Mixpanel) to improve the App</li>
              <li>• Crash monitoring via Firebase Crashlytics</li>
              <li>• Internal research with <strong>de-identified, aggregated statistics</strong> (never re-identifiable, never sold)</li>
            </ul>
          </section>

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
                    <td className="border border-border p-3 font-semibold">Mixpanel</td>
                    <td className="border border-border p-3">Product analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Firebase Analytics & Crashlytics</td>
                    <td className="border border-border p-3">Anonymous usage analytics & crash reporting</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">AppsFlyer</td>
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
                  <tr>
                    <td className="border border-border p-3 font-semibold">OpenAI</td>
                    <td className="border border-border p-3">AI personalization of devotions, reflections and prayers</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">
              All vendors are contractually barred from selling or re-identifying data. Prompts sent to OpenAI do not include your name or identifiable personal information.
            </p>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">8. Storage & Security</h2>
            <p className="text-muted-foreground">
              All journals, reflections and ritual logs are stored <strong>locally on your device</strong>. No server-side user database is used for personal content.
              <br /><br />
              Firebase Analytics and Crashlytics collect only anonymized usage and crash data. All traffic to third-party services is TLS 1.2+ encrypted.
              <br /><br />
              <strong>Retention:</strong> Your data persists on your device until you delete it via Settings or uninstall the App. Analytics data is retained by third-party providers per their own policies.
            </p>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">9. Your Rights</h2>
            <p className="text-muted-foreground mb-4">Since your data is stored locally, you have full control. You may also:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Request access to or deletion of your data</li>
              <li>• Opt-out of analytics via device settings</li>
              <li>• Revoke Screen Time authorization any time in iOS Settings</li>
              <li>• Contact us to exercise any applicable data rights</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Email <strong>support@strivexai.co</strong> — we respond within 30 days.
            </p>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">10. Children</h2>
            <p className="text-muted-foreground">
              The App is <strong>not directed to children under 13</strong>. We do not knowingly collect their data.
            </p>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">11. Notifications</h2>
            <p className="text-muted-foreground">
              Ritual reminders and habit nudges are opt-in. Manage or disable them any time in <strong>Settings › Notifications</strong>.
            </p>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">12. International Transfers</h2>
            <p className="text-muted-foreground">
              Anonymous analytics data may be processed in the US (Firebase/Google, Mixpanel, OpenAI). All transfers are safeguarded by Standard Contractual Clauses or equivalent measures.
            </p>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">13. Changes</h2>
            <p className="text-muted-foreground">
              Material changes appear in-app. Continued use = acceptance of the updated Policy.
            </p>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">14. Contact</h2>
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

export default NoaPrivacy;
