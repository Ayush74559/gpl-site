import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Play, Globe, Facebook, Linkedin, Instagram, Youtube, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header({ setView, currentView }: { setView: (view: 'home' | 'contact' | 'services' | 'crops' | 'subsidy' | 'about' | 'articles' | 'portfolio') => void, currentView?: 'home' | 'contact' | 'services' | 'crops' | 'subsidy' | 'about' | 'articles' | 'portfolio' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', hasDropdown: false, action: () => setView('services') },
    { name: 'Projects', hasDropdown: false, action: () => setView('portfolio') },
    { name: 'Crops', hasDropdown: false, action: () => setView('crops') },
    { name: 'Subsidy Guide', hasDropdown: false, action: () => setView('subsidy') },
    { name: 'About Us', hasDropdown: false, action: () => setView('about') },
    { name: 'Blog', hasDropdown: false, action: () => setView('articles') },
    { name: 'Contact', hasDropdown: false, action: () => setView('contact') },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4 md:px-10 flex flex-wrap justify-between items-center text-xs md:text-sm">
        <div className="flex items-center gap-4">
          <span className="hidden md:inline">Innovative Greenhouse Projects ensure superior yields for your farm.</span>
          <a href="#" className="flex items-center gap-1 hover:text-agri-green transition-colors">
            <Download size={14} />
            Download IGPL Brochure 2026
          </a>
          <a href="#" className="flex items-center gap-1 bg-agri-green px-2 py-0.5 rounded text-white hover:bg-agri-dark-green transition-colors">
            <Play size={12} fill="currentColor" />
            WATCH NOW
          </a>
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-agri-green transition-colors">Success Stories</a>
          <a href="#" className="hover:text-agri-green transition-colors">Blogs and Stories</a>
          <div className="flex items-center gap-2 font-bold">
            <button className="hover:text-agri-green transition-colors">EN</button>
            <span className="text-gray-600">|</span>
            <button className="hover:text-agri-green transition-colors">HI</button>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`px-4 md:px-10 py-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'}`}>
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
          <img src="/logos/IGPL%20logo%20with%20plant%20symbol.png" alt="IGPL Logo" className="h-16 w-auto object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name} className="group relative">
                <button 
                  onClick={item.action || (() => setView('home'))}
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-agri-green transition-colors py-2"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                </button>
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-agri-green rounded">Polyhouse</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-agri-green rounded">Net House</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-agri-green rounded">Hydroponics</a>
                  </div>
                )}
              </li>
            ))}
          </ul>
          
          <button className="bg-agri-green hover:bg-agri-dark-green text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-agri-green/20">
            Get Free Assessment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        {currentView !== 'services' && (
          <button className="lg:hidden p-2 text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t overflow-hidden"
          >
            <ul className="p-4 space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button 
                    onClick={() => {
                      if (item.action) item.action();
                      else if (item.name === 'Services') setView('services');
                      else if (item.name === 'Crops') setView('crops');
                      else if (item.name === 'Subsidy Guide') setView('subsidy');
                      else if (item.name === 'About Us') setView('about');
                      else if (item.name === 'Blog') setView('articles');
                      else setView('home');
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex justify-between items-center w-full text-left text-gray-700 font-medium"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown size={18} />}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
