import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sprout } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#214B24] text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sprout className="text-[#EADDB0] w-5 h-5" />
            <span className="text-lg font-bold">{t('app_name')}</span>
          </div>
          <p className="text-[#EADDB0] text-sm">
            &copy; {currentYear} {t('app_name')}. {t('footer_rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;