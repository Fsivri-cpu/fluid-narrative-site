import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NiyyahTerms = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
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
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Acceptance */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance</h2>
            <p className="text-muted-foreground">
              These Terms govern your use of the <strong>Niyyah – Ramadan Tracker</strong> mobile application ("App") provided by <strong>Strivex Dijital Hizmetler A.S.</strong>.
              Installing or using the App means you agree to these Terms. If you disagree, delete the App.
            </p>
          </section>

          {/* Eligibility */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
            <p className="text-muted-foreground">
              Age 12+ only. No account creation is required — all data is stored locally on your device.
            </p>
          </section>

          {/* Subscriptions & Billing */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">3. Subscriptions & Billing</h2>
            <p className="text-muted-foreground mb-4">
              The App may offer premium features through in-app subscriptions managed by Apple App Store or Google Play. Subscription details, pricing, and billing cycles are displayed at the point of purchase.
            </p>
            <p className="text-muted-foreground">
              Manage, switch, or cancel subscriptions in your device's <strong>Subscriptions</strong> settings. Active subscription time remains until expiry.
            </p>
          </section>

          {/* Permitted Use */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">4. Permitted Use</h2>
            <p className="text-muted-foreground">
              Use the App only for lawful, personal spiritual and wellness tracking. No scraping, hacking, reverse-engineering, or distribution of the App's content.
            </p>
          </section>

          {/* User Content */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">5. User Content</h2>
            <p className="text-muted-foreground">
              All content you create in the App (intentions, fasting logs, dhikr counts) is stored locally on your device. You retain full ownership. We do not access, collect, or store your personal spiritual data on our servers.
            </p>
          </section>

          {/* Religious Disclaimer */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">6. Religious & Health Disclaimer</h2>
            <p className="text-muted-foreground">
              The App is a <strong>personal tracking tool</strong> and does <strong>not</strong> provide religious rulings (fatwa), medical advice, or professional health guidance. Prayer times are calculated using the Aladhan API and may vary based on calculation method and location accuracy. Always consult qualified scholars for religious guidance and healthcare professionals for health-related decisions.
            </p>
          </section>

          {/* Prayer Times */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">7. Prayer Times Accuracy</h2>
            <p className="text-muted-foreground">
              Prayer times are provided by the Aladhan API based on your selected city. While we strive for accuracy, times may vary due to calculation methods, geographical factors, or API availability. We are not liable for inaccuracies in prayer time data.
            </p>
          </section>

          {/* Privacy */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">8. Privacy</h2>
            <p className="text-muted-foreground">
              Your data is handled as described in our <strong>Privacy Policy</strong>. By using the App you consent to that processing.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All code, graphics, design elements, and trademarks belong to Strivex Dijital Hizmetler A.S. Quranic text and hadith content are in the public domain. You retain ownership of content you create within the App.
            </p>
          </section>

          {/* Updates & Termination */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">10. Updates & Termination</h2>
            <p className="text-muted-foreground">
              We may update or discontinue features anytime. You agree to install updates for continued functionality. We may terminate access for Terms violations; upon termination you must delete the App.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages. Total liability will not exceed the amount you paid for the App. We are not responsible for missed prayers, incorrect fasting records, or any spiritual consequences arising from App usage.
            </p>
          </section>

          {/* Governing Law & Jurisdiction */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">12. Governing Law & Jurisdiction</h2>
            <p className="text-muted-foreground">
              These Terms are governed by Turkish law. Disputes are subject to the courts of Izmir, Turkey. <strong>You waive any right to participate in class-action proceedings.</strong>
            </p>
          </section>

          {/* Changes */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">13. Changes</h2>
            <p className="text-muted-foreground">
              Material changes appear in-app. Continued use = acceptance of the updated Terms.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">14. Contact</h2>
            <p className="text-muted-foreground">
              Email <strong>support@strivexai.co</strong> or mail:
              <br />
              Strivex Dijital Hizmetler A.S., Izmir Teknoloji Ussu, Gulbahce, Icmeler Caddesi, 35433 Urla/Izmir, Turkiye.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default NiyyahTerms;
