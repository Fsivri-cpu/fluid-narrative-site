import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NoaTerms = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold">Terms of Use</h1>
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
          className="max-w-4xl mx-auto space-y-12"
        >
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By downloading or using Noa, you agree to these Terms and our Privacy Policy. If you do not agree, please discontinue use of the App.
            </p>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground mb-4">Noa provides:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• A daily four-step ritual loop (verse, devotion, reflection, prayer)</li>
              <li>• AI-personalised devotional and reflection content</li>
              <li>• A dove companion that progresses based on your consistency</li>
              <li>• Optional locking and unlocking of distracting apps via Apple Screen Time / Family Controls</li>
              <li>• Streak tracking, weekly stats and quiet time tools</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Noa is for <strong>spiritual and behavioural-support purposes only</strong>.
            </p>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">3. Spiritual & Wellbeing Disclaimer</h2>
            <p className="text-muted-foreground">
              Noa does <strong>not</strong> provide religious counsel, pastoral care, medical advice, or mental-health treatment. AI-generated content is intended as a supplement to — not a replacement for — your own faith community, clergy, or licensed professionals. Always consult a qualified pastor, counselor, or healthcare provider for serious spiritual, emotional or medical concerns.
            </p>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">4. Screen Time & App Blocking</h2>
            <p className="text-muted-foreground">
              Noa uses Apple's Screen Time / Family Controls to lock and unlock apps you select. Unlock duration is determined by Apple's clock, not by actual in-app usage, so unused time may expire even if you have not opened the unlocked apps. You can revoke Screen Time authorization at any time in iOS Settings.
            </p>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">5. User Obligations</h2>
            <p className="text-muted-foreground mb-4">You agree not to:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Upload harmful, illegal, abusive or hateful content into journals or reflections</li>
              <li>• Misuse or attempt to reverse-engineer the App or its blocking mechanisms</li>
              <li>• Share or distribute AI-generated devotional content commercially without permission</li>
              <li>• Use the App in a way that endangers your own or others' wellbeing</li>
            </ul>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">6. Subscriptions & Billing</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Certain features require a paid subscription</li>
              <li>• Payments are handled via Apple In-App Purchases</li>
              <li>• Subscription renewals and cancellations must be managed in your Apple ID settings</li>
              <li>• Refund decisions are determined solely by Apple</li>
            </ul>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
            <p className="text-muted-foreground mb-4">Noa uses third-party services including:</p>
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
                    <td className="border border-border p-3 font-semibold">RevenueCat</td>
                    <td className="border border-border p-3">Subscriptions & payments</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Superwall</td>
                    <td className="border border-border p-3">Paywall management</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Mixpanel</td>
                    <td className="border border-border p-3">Product analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Firebase Analytics</td>
                    <td className="border border-border p-3">Analytics & crash reporting</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">AppsFlyer</td>
                    <td className="border border-border p-3">Attribution analytics</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">OpenAI</td>
                    <td className="border border-border p-3">AI-generated devotions, reflections and prayers</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Apple Screen Time</td>
                    <td className="border border-border p-3">On-device app locking & unlocking</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">
              Your use of Noa constitutes acceptance of their respective terms.
            </p>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All branding, design, features, dove illustrations and content in Noa belong to the Noa team. You may not copy, distribute, or reproduce materials without permission. Bible verses referenced in the App are quoted from their respective public-domain or licensed translations.
            </p>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              Noa is provided "as is," without warranties of any kind. We do not guarantee:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Theological accuracy of AI-generated devotional content</li>
              <li>• That app blocking will be uncircumventable on every device or iOS version</li>
              <li>• Continuous, error-free operation</li>
            </ul>
            <p className="text-muted-foreground mt-4 mb-4">We are not responsible for:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Decisions made based on devotional or reflection content</li>
              <li>• Missed screen time or productivity outcomes</li>
              <li>• Any spiritual, emotional or financial outcome</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              <strong>Use of the App is at your own discretion.</strong>
            </p>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We may update these Terms from time to time. Material changes will be announced in-app. Continued use of the App after changes are posted constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">11. Contact</h2>
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

export default NoaTerms;
