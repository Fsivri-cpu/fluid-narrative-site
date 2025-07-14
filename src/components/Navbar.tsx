
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

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

  const handleFAQClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const faqSection = document.querySelector('#faq-section');
    if (location.pathname !== '/') {
      window.location.href = '/#faq-section';
    } else {
      faqSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStartedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const experienceSection = document.querySelector('#experience-section');
    if (location.pathname !== '/') {
      navigate('/#experience-section');
    } else {
      experienceSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const footerSection = document.querySelector('footer');
    if (location.pathname !== '/') {
      navigate('/#footer');
    } else {
      footerSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value as 'en' | 'nl');
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/apps', label: 'Apps' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/5 border-b border-white/10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/ae9979cf-01be-41d9-a0d6-ec0fcbe768bd.png" 
              alt="StriveX Logo" 
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="nav-link text-white hover:text-white/80 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[100px] bg-white/5 border-white/10 hover:bg-white/10 transition-colors duration-200">
                <Globe className="mr-2 h-4 w-4 text-white" />
                <SelectValue placeholder="Language" className="text-white" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900/95 border-white/10">
                <SelectItem value="en" className="text-white hover:text-white/80 focus:text-white/80 focus:bg-white/5">EN</SelectItem>
                <SelectItem value="nl" className="text-white hover:text-white/80 focus:text-white/80 focus:bg-white/5">NL</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[80px] bg-white/5 border-white/10 hover:bg-white/10 transition-colors duration-200">
                <Globe className="mr-2 h-4 w-4 text-white" />
                <SelectValue placeholder="Lang" className="text-white" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900/95 border-white/10">
                <SelectItem value="en" className="text-white hover:text-white/80 focus:text-white/80 focus:bg-white/5">EN</SelectItem>
                <SelectItem value="nl" className="text-white hover:text-white/80 focus:text-white/80 focus:bg-white/5">NL</SelectItem>
              </SelectContent>
            </Select>
            <button 
              className="text-white focus:outline-none" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden bg-gray-900 absolute w-full left-0 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 shadow-md' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white hover:text-white/80 font-medium py-2"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
