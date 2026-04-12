import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const JellyTerms = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
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
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Acceptance */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance</h2>
            <p className="text-muted-foreground">
              These Terms govern your use of the <strong>Lolly: AI Food & Sugar Tracker</strong> mobile application ("App") provided by <strong>Strivex Dijital Hizmetler A.Ş.</strong>.
              Installing or using the App means you agree to these Terms. If you disagree, delete the App.
            </p>
          </section>

          {/* Eligibility */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
            <p className="text-muted-foreground">
              Age 12+ only. All tracking data is stored locally on your device — no account is required to use Lolly.
            </p>
          </section>

          {/* Description of Service */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">3. Description of Service</h2>
            <p className="text-muted-foreground mb-4">Lolly provides:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Daily sugar and calorie tracking with macro breakdown</li>
              <li>• Curated, personalised weekly meal plans</li>
              <li>• Water intake tracking and hydration reminders</li>
              <li>• Streak-based habit building and milestone achievements</li>
              <li>• Nutritional insights and progress reporting</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Lolly is for <strong>informational and motivational purposes only</strong>.
            </p>
          </section>

          {/* Subscriptions & Billing */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">4. Subscriptions & Billing</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left">Plan</th>
                    <th className="border border-border p-3 text-left">Billing</th>
                    <th className="border border-border p-3 text-left">Includes</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border border-border p-3 font-semibold">Free</td>
                    <td className="border border-border p-3">–</td>
                    <td className="border border-border p-3">Basic meal logging, water tracking, streak system</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Weekly</td>
                    <td className="border border-border p-3">Every 7 days</td>
                    <td className="border border-border p-3">Unlimited logging, full meal plans, detailed insights, priority support</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Yearly</td>
                    <td className="border border-border p-3">Every 12 months</td>
                    <td className="border border-border p-3">All Premium features at a discounted rate</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">
              Payments are handled via Apple In-App Purchases. Subscriptions auto-renew unless cancelled at least 24 hours before the renewal date in your Apple ID settings. Refund decisions are determined solely by Apple.
            </p>
          </section>

          {/* Permitted Use */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">5. Permitted Use</h2>
            <p className="text-muted-foreground">
              Use the App only for lawful, personal wellness tracking. No scraping, hacking, reverse-engineering, or circumventing subscription systems.
            </p>
          </section>

          {/* Health Disclaimer */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">6. Health Disclaimer</h2>
            <p className="text-muted-foreground">
              The App is <strong>not a medical device</strong> and does <strong>not</strong> provide medical advice, diagnosis, or treatment. The nutritional information and meal plans are for general wellness purposes only. Always consult a qualified healthcare professional or registered dietitian before making significant changes to your diet, especially if you have any medical conditions such as diabetes.
            </p>
          </section>

          {/* Privacy */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">7. Privacy</h2>
            <p className="text-muted-foreground">
              Your data is handled as described in our <Link to="/privacy-policy/jelly" className="underline hover:text-foreground transition-colors">Privacy Policy</Link>. By using the App you consent to that processing.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All code, graphics, mascot characters, meal plan content, and trademarks belong to Strivex Dijital Hizmetler A.Ş. You may not copy, distribute, or reproduce any materials without permission.
            </p>
          </section>

          {/* Updates & Termination */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">9. Updates & Termination</h2>
            <p className="text-muted-foreground">
              We may update or discontinue features at any time. We may terminate access for Terms violations; upon termination you must delete the App.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              Lolly is provided "as is," without warranties of any kind. To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages. We are not responsible for:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Accuracy of nutritional data in meal databases</li>
              <li>• Suitability of meal plans for specific medical conditions</li>
              <li>• Any health outcome resulting from following in-app recommendations</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Total liability will not exceed the amount you paid for the App. <strong>Use of the App is at your own risk.</strong>
            </p>
          </section>

          {/* Governing Law */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">11. Governing Law & Jurisdiction</h2>
            <p className="text-muted-foreground">
              These Terms are governed by Turkish law. Disputes are subject to the courts of İzmir, Turkey. <strong>You waive any right to participate in class-action proceedings.</strong>
            </p>
          </section>

          {/* Changes */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">12. Changes</h2>
            <p className="text-muted-foreground">
              Material changes appear in-app. Continued use = acceptance of the updated Terms.
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

export default JellyTerms;
