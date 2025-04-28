import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img src="/lovable-uploads/90d92b1a-efa5-47b0-aa6f-a5cf43f90e59.png" alt="StriveX Logo" className="h-12 bg-white p-1 rounded-md" />
            </Link>
            <p className="text-gray-300 text-sm">
              At StriveX AI Solutions, we're bringing your business into the future with AI-powered customer service solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
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
                <span className="text-gray-300">info@strivex.ai</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400 text-center">
          <p>&copy; 2023 StriveX AI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;