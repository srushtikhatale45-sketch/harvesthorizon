import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Leaf, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-700 text-white mt-10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="text-primary-400 w-6 h-6" />
              <span className="text-xl font-bold">{t('app_name')}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering farmers with data-driven insights for better farming decisions and increased profitability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">{t('nav_home')}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">{t('nav_about')}</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-primary-400 transition-colors">{t('nav_features')}</Link></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-primary-400 transition-colors">{t('nav_dashboard')}</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} {t('app_name')}. {t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;