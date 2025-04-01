
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <motion.div 
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-bold text-strivex-blue">404</h1>
        <h2 className="text-2xl font-bold text-gray-700 mt-4 mb-6">Sayfa Bulunamadı</h2>
        <p className="text-gray-600 mb-8">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center bg-strivex-blue hover:bg-strivex-blue/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
        >
          <Home className="mr-2 h-5 w-5" />
          Ana Sayfaya Dön
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
