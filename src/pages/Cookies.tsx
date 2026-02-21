import React from 'react';
import { motion } from 'framer-motion';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-foreground">Cookie Notice</h1>
          
          <div className="bg-card rounded-lg shadow-lg p-8 border">
            <p className="text-muted-foreground mb-6">
              <strong>Last updated:</strong> 14 July 2025
            </p>
            
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="mb-6">
                We use two kinds of cookies on this website:
              </p>
              
              <ul className="space-y-4 mb-8 list-disc pl-6">
                <li>
                  <strong>Essential cookies</strong> – keep the site secure, remember your choice in this banner, and are deleted when you close your browser.
                </li>
                <li>
                  <strong>Analytics cookie (optional)</strong> – a single Google Analytics cookie that tells us, anonymously, how many visitors each page receives; IP addresses are truncated and never used for advertising.
                </li>
              </ul>
              
              <p className="mb-6">
                We do not set advertising cookies and no health data is stored in cookies.
              </p>
              
              <div className="bg-secondary/50 rounded-lg p-6 mb-6">
                <p className="font-semibold mb-2">Your choice:</p>
                <p>
                  Click "Accept" to allow the optional Analytics cookie or "Decline" to keep only the essential cookies. 
                  You can delete or block cookies at any time in your browser settings; refusing the optional cookie will not affect how the site works.
                </p>
              </div>
              
              <p className="text-center">
                <strong>Questions?</strong> Contact{' '}
                <a 
                  href="mailto:support@strivexai.co" 
                  className="text-primary hover:underline"
                >
                  support@strivexai.co
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;