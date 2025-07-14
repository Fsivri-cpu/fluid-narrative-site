import { motion } from 'framer-motion';
import { Download, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const GLP1TrackerTerms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        {/* Header with Download and Go Home buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Download className="w-4 h-4" />
              Download
            </button>
            <span className="text-muted-foreground">•</span>
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Terms & Conditions
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
            GLP-1 Shot Tracker – Tirzepatide
          </h2>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
            <span><strong>Last Updated:</strong> 14 Jul 2025</span>
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
              These Terms govern your use of the <strong>GLP-1 Shot Tracker – Tirzepatide</strong> mobile application ("App") provided by <strong>Furkan Sivri</strong>. 
              Installing or using the App means you agree to these Terms. If you disagree, delete the App.
            </p>
          </section>

          {/* Accounts & Eligibility */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">2. Accounts & Eligibility</h2>
            <p className="text-muted-foreground mb-4">Age 12 + only.</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• iOS: account optional; data stays in your iCloud.</li>
              <li>• Android: Google Sign-In required for sync.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Keep credentials confidential; you're responsible for all activity on your account.
            </p>
          </section>

          {/* Subscriptions & Billing */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">3. Subscriptions & Billing</h2>
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
                    <td className="border border-border p-3">1 injection <strong>or</strong> symptom entry per day, water & weight logs</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Weekly</td>
                    <td className="border border-border p-3">Every 7 days</td>
                    <td className="border border-border p-3">Unlimited entries, food logging (incl. meal-photo analysis), drug-level graph, Apple Health sync, priority support</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Lifetime</td>
                    <td className="border border-border p-3">One-time payment</td>
                    <td className="border border-border p-3">All Weekly features + all future premium updates</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold"><em>(Optional)</em> Yearly</td>
                    <td className="border border-border p-3">Every 12 months</td>
                    <td className="border border-border p-3">Same as Weekly, discounted</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4">
              Upgrade, switch, or cancel in your store's <strong>Subscriptions</strong> panel. Remaining Weekly time stays active until expiry.
            </p>
          </section>

          {/* Permitted Use */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">4. Permitted Use</h2>
            <p className="text-muted-foreground">
              Use the App only for lawful, personal wellness tracking. No scraping, hacking, reverse-engineering, or offensive content.
            </p>
          </section>

          {/* User Content & Image Processing */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">5. User Content & Image Processing</h2>
            <p className="text-muted-foreground">
              You may upload meal photos for nutrition estimation. <strong>You confirm you have rights to these images and grant us a licence to process them solely via OpenAI Image API for food recognition and calorie estimation.</strong> We do not use your images for ads or unrelated AI training.
            </p>
          </section>

          {/* Health Disclaimer */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">6. Health Disclaimer</h2>
            <p className="text-muted-foreground">
              The App is <strong>not a medical device</strong> and does <strong>not</strong> provide medical advice. Always consult a healthcare professional before altering treatment.
            </p>
          </section>

          {/* Privacy */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">7. Privacy</h2>
            <p className="text-muted-foreground">
              Your data is handled as described in our <strong>Privacy Policy</strong>. By using the App you consent to that processing.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All code, graphics, and trademarks belong to Furkan Sivri. You retain ownership of content you submit but grant us a licence to use it solely to operate and improve the service.
            </p>
          </section>

          {/* Updates & Termination */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">9. Updates & Termination</h2>
            <p className="text-muted-foreground">
              We may update or discontinue features anytime. You agree to install updates. We may terminate access for Terms violations; upon termination you must delete the App.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages. Total liability will not exceed the amount you paid for the App.
            </p>
          </section>

          {/* Governing Law & Jurisdiction */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">11. Governing Law & Jurisdiction</h2>
            <p className="text-muted-foreground">
              These Terms are governed by Dutch law. Disputes are subject to the courts of Amsterdam, NL. <strong>You waive any right to participate in class-action proceedings.</strong>
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
              Email <strong>support@strivexai.co</strong> or mail:
              <br />
              Furkan Sivri, Zeijerveen 8, 1507 MC Zaandam, Netherlands.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default GLP1TrackerTerms;