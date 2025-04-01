
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/d9fd22f5-eb13-4a17-995a-776eedb75701.png" 
              alt="StriveX Logo" 
              className="h-10 md:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link text-blue-800 hover:text-blue-600 font-medium ${isActive('/')}`}>
              Ana Sayfa
            </Link>
            <Link to="/services" className={`nav-link text-blue-800 hover:text-blue-600 font-medium ${isActive('/services')}`}>
              Hizmetlerimiz
            </Link>
            <Link to="/technologies" className={`nav-link text-blue-800 hover:text-blue-600 font-medium ${isActive('/technologies')}`}>
              Teknolojiler
            </Link>
            <Link to="/about" className={`nav-link text-blue-800 hover:text-blue-600 font-medium ${isActive('/about')}`}>
              Hakkımızda
            </Link>
            <Link to="/contact" className={`nav-link text-blue-800 hover:text-blue-600 font-medium ${isActive('/contact')}`}>
              İletişim
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-blue-800 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Menüyü Kapat" : "Menüyü Aç"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white absolute w-full left-0 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 shadow-md' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" className={`text-blue-800 hover:text-blue-600 font-medium py-2 ${isActive('/')}`}>
              Ana Sayfa
            </Link>
            <Link to="/services" className={`text-blue-800 hover:text-blue-600 font-medium py-2 ${isActive('/services')}`}>
              Hizmetlerimiz
            </Link>
            <Link to="/technologies" className={`text-blue-800 hover:text-blue-600 font-medium py-2 ${isActive('/technologies')}`}>
              Teknolojiler
            </Link>
            <Link to="/about" className={`text-blue-800 hover:text-blue-600 font-medium py-2 ${isActive('/about')}`}>
              Hakkımızda
            </Link>
            <Link to="/contact" className={`text-blue-800 hover:text-blue-600 font-medium py-2 ${isActive('/contact')}`}>
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
