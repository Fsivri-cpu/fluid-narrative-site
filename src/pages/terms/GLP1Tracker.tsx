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
            <span><strong>Effective Date:</strong> 14 Jul 2025</span>
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
          {/* Introduction */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              These Terms and Conditions ("Terms") govern your use of the <strong>GLP-1 Shot Tracker – Tirzepatide</strong> mobile application (the "App") 
              operated by Furkan Sivri ("we", "our", "us"). By accessing or using our App, you agree to be bound by these Terms.
            </p>
          </section>

          {/* Acceptance of Terms */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">2. Acceptance of Terms</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• By downloading, installing, or using the App, you accept and agree to be bound by these Terms</li>
              <li>• If you do not agree to these Terms, you may not use the App</li>
              <li>• We reserve the right to modify these Terms at any time with notice through the App</li>
              <li>• Continued use of the App after changes constitutes acceptance of updated Terms</li>
            </ul>
          </section>

          {/* Eligibility */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">3. Eligibility</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• You must be at least <strong>12 years old</strong> to use the App</li>
              <li>• If you are under 18, you must have parental or guardian consent</li>
              <li>• You must provide accurate and complete information when using the App</li>
              <li>• You are responsible for maintaining the confidentiality of your account</li>
            </ul>
          </section>

          {/* Permitted Use */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">4. Permitted Use</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• The App is for personal, non-commercial use only</li>
              <li>• You may track your GLP-1 injections, symptoms, and related health data</li>
              <li>• You may use Premium features if you have a valid subscription</li>
              <li>• You agree to use the App only for lawful purposes and in accordance with these Terms</li>
            </ul>
          </section>

          {/* Prohibited Use */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">5. Prohibited Use</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• You may not reverse engineer, decompile, or disassemble the App</li>
              <li>• You may not use the App for any illegal or unauthorized purpose</li>
              <li>• You may not share your account credentials with others</li>
              <li>• You may not attempt to bypass any security measures or access restrictions</li>
              <li>• You may not use the App to store false or misleading health information</li>
            </ul>
          </section>

          {/* Medical Disclaimer */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">6. Medical Disclaimer</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>IMPORTANT:</strong> This App is for informational and tracking purposes only. It is not intended to replace professional medical advice, diagnosis, or treatment.
              </p>
              <ul className="space-y-2 mt-4">
                <li>• Always consult your healthcare provider before making any changes to your medication regimen</li>
                <li>• The App's suggestions and reminders are not medical advice</li>
                <li>• In case of medical emergency, contact emergency services immediately</li>
                <li>• We are not responsible for any medical decisions made based on App data</li>
              </ul>
            </div>
          </section>

          {/* Subscriptions & Payments */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">7. Subscriptions & Payments</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Premium features require a paid subscription (Weekly, Yearly, or Lifetime)</li>
              <li>• Subscriptions are processed through Apple App Store or Google Play Store</li>
              <li>• Subscriptions auto-renew unless cancelled before the renewal date</li>
              <li>• Refunds are subject to Apple's and Google's respective policies</li>
              <li>• We may change subscription prices with 30 days notice</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• All App content, features, and functionality remain our intellectual property</li>
              <li>• You retain ownership of the health data you input into the App</li>
              <li>• Our algorithms, UI/UX design, and code are proprietary and protected by law</li>
              <li>• You may not copy, distribute, or create derivative works of the App</li>
            </ul>
          </section>

          {/* Data & Privacy */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">9. Data & Privacy</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Your use of the App is also governed by our Privacy Policy</li>
              <li>• We implement industry-standard security measures to protect your data</li>
              <li>• Health data is encrypted and stored securely</li>
              <li>• We never sell your personal or health data to third parties</li>
              <li>• You can request data deletion through Settings › Data Controls</li>
            </ul>
          </section>

          {/* Disclaimers */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">10. Disclaimers</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• The App is provided "as is" without warranties of any kind</li>
              <li>• We do not guarantee uninterrupted or error-free service</li>
              <li>• You use the App at your own risk and discretion</li>
              <li>• We are not liable for any damages arising from your use of the App</li>
              <li>• Apple Health and Google Health Connect integrations depend on third-party services</li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses.
            </p>
            <p className="text-muted-foreground">
              Our total liability shall not exceed the amount you paid for Premium features in the 12 months preceding the claim.
            </p>
          </section>

          {/* Termination */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">12. Termination</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• You may delete your account at any time through the App settings</li>
              <li>• We may suspend or terminate your access for Terms violations</li>
              <li>• Upon termination, your right to use the App will cease immediately</li>
              <li>• Data deletion follows our Privacy Policy retention schedule</li>
            </ul>
          </section>

          {/* Governing Law */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms are governed by the laws of the Netherlands. Any disputes will be resolved in the courts of the Netherlands.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">14. Contact</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: <strong>support@strivexai.co</strong></p>
              <p>Mail: Furkan Sivri, Zeijerveen 8, 1507 MC Zaandam, The Netherlands</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default GLP1TrackerTerms;