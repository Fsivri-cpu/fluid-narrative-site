
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

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
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="p-2 rounded-lg bg-white backdrop-blur-sm hover:bg-white/90 transition-all duration-300 shadow-sm">
              <img 
                src="/lovable-uploads/90d92b1a-efa5-47b0-aa6f-a5cf43f90e59.png" 
                alt="StriveX Logo" 
                className="h-10 md:h-12"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-300 font-medium">
              Home
            </Link>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button 
              className="text-blue-800 dark:text-blue-200 focus:outline-none" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden bg-white dark:bg-gray-900 absolute w-full left-0 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 shadow-md' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-blue-800 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-300 font-medium py-2">
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
