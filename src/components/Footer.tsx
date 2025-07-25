import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer id="footer" className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img src="/lovable-uploads/ae9979cf-01be-41d9-a0d6-ec0fcbe768bd.png" alt="StriveX Logo" className="h-12 bg-white p-1 rounded-md" />
            </Link>
            <p className="text-gray-300 text-sm">
              From health to productivity, StriveX delivers AI-driven apps that fit every need.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/apps" className="text-gray-300 hover:text-white transition-colors">
                  Our Apps
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-2 h-5 w-5 text-blue-300 flex-shrink-0" />
                <span className="text-gray-300">Vinkenburgstraat 2A, 3512 AB - Utrecht / The Netherlands</span>
              </li>
              
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-300 flex-shrink-0" />
                <span className="text-gray-300">info@strivexai.co</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/strivex_ai" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/strivex.ai.solutions/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/strivex-ai-solutions/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400 text-center">
          <p>© 2025 StriveX AI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;