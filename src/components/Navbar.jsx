import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Home, Info, LayoutDashboard, Sparkles } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import {logoh} from '../assets'; // Ensure you have a logo image in this path
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navLinks = [
    { path: '/', name: t('nav_home'), icon: <Home size={18} /> },
    { path: '/about', name: t('nav_about'), icon: <Info size={18} /> },
    { path: '/features', name: t('nav_features'), icon: <Sparkles size={18} /> },
    { path: '/dashboard', name: t('nav_dashboard'), icon: <LayoutDashboard size={18} /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-green-200 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo with Image */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Logo Image Container */}
            <div className="relative">
              {!logoError ? (
                <img 
                  src={logoh} // Change this to your logo path
                  alt="Harvest Horizon"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                  onError={() => setLogoError(true)}
                />
              ) : (
                // Gradient Background with Text as Fallback
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <span className="text-white text-lg md:text-xl font-bold">HH</span>
                </div>
              )}
            </div>
            
            {/* Brand Name */}
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                {t('app_name')}
              </span>
              <span className="text-xs text-gray-500 hidden md:block">Harvest Horizon</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;