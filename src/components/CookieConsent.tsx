import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a small delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    
    // Enable analytics or other tracking here
    console.log('Cookies accepted');
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
    
    // Disable analytics or other tracking here
    console.log('Cookies rejected');
  };

  const handleClose = () => {
    setShowBanner(false);
    // Set a temporary flag to not show again during this session
    sessionStorage.setItem('cookieBannerDismissed', 'true');
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 shadow-2xl"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>This site uses cookies</strong>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                    We use cookies to provide you with the best experience on our website. 
                    By continuing to use the site, you agree to our use of cookies.{' '}
                    <Link 
                      to="/privacy-policy" 
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 md:gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReject}
                  className="text-xs px-3 py-1 h-8"
                >
                  Reject
                </Button>
                <Button
                  size="sm"
                  onClick={handleAccept}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-1 h-8"
                >
                  Accept
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClose}
                  className="p-1 h-8 w-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;