import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SunnyTerms = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
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
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Acceptance */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance</h2>
            <p className="text-muted-foreground">
              These Terms govern your use of the <strong>Sunny – UV & Tanning Tracker</strong> mobile application ("App") provided by <strong>StriveX</strong>.
              Installing or using the App means you agree to these Terms. If you disagree, delete the App.
            </p>
          </section>

          {/* Accounts & Eligibility */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">2. Accounts & Eligibility</h2>
            <p className="text-muted-foreground mb-4">Age 13+ only.</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• iOS: account optional; data stays in your iCloud.</li>
              <li>• Android: Google Sign-In optional for sync.</li>
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
                    <td className="border border-border p-3">Basic UV tracking, daily exposure limits, skin type profile</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Weekly</td>
                    <td className="border border-border p-3">Every 7 days</td>
                    <td className="border border-border p-3">Unlimited tracking, detailed analytics, progress photos, personalized recommendations</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Lifetime</td>
                    <td className="border border-border p-3">One-time payment</td>
                    <td className="border border-border p-3">All Premium features + all future updates</td>
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
              Upgrade, switch, or cancel in your store's <strong>Subscriptions</strong> panel.
            </p>
          </section>

          {/* Permitted Use */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">4. Permitted Use</h2>
            <p className="text-muted-foreground">
              Use the App only for lawful, personal UV and tanning tracking. No scraping, hacking, reverse-engineering, or offensive content.
            </p>
          </section>

          {/* User Content */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">5. User Content</h2>
            <p className="text-muted-foreground">
              You may upload progress photos and notes. <strong>You confirm you have rights to these images and grant us a licence to process them solely to operate the service.</strong> We do not use your images for ads or unrelated purposes.
            </p>
          </section>

          {/* Health Disclaimer */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">6. Health Disclaimer</h2>
            <p className="text-muted-foreground">
              The App is <strong>not a medical device</strong> and does <strong>not</strong> provide medical advice. UV exposure recommendations are for informational purposes only. Always consult a dermatologist for skin health concerns and follow sun safety guidelines from health authorities.
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
              To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages including skin damage from sun exposure. Total liability will not exceed the amount you paid for the App.
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

export default SunnyTerms;
