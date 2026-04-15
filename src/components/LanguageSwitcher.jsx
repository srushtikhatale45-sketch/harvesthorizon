import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages, Check } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' },
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300">
        <Languages size={18} className="text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          {languages.find(lang => lang.code === i18n.language)?.name || 'English'}
        </span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors ${
              i18n.language === lang.code ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </div>
            {i18n.language === lang.code && <Check size={16} />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;