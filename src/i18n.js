import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  english: {
    translation: {
      // Navbar
      home: "Home",
      about: "About",
      contact: "Contact",
      services: "Services",
      
      // Home Page
      welcome: "Welcome to Our Website",
      welcomeDesc: "This is a fully responsive homepage with a beautiful background image",
      getStarted: "Get Started",
      
      // Common
      language: "Language",
      selectLanguage: "Select Language"
    }
  },
  hindi: {
    translation: {
      // Navbar
      home: "होम",
      about: "हमारे बारे में",
      contact: "संपर्क करें",
      services: "सेवाएं",
      
      // Home Page
      welcome: "हमारी वेबसाइट में आपका स्वागत है",
      welcomeDesc: "यह एक पूरी तरह से रिस्पॉन्सिव होमपेज है जिसमें सुंदर पृष्ठभूमि छवि है",
      getStarted: "शुरू करें",
      
      // Common
      language: "भाषा",
      selectLanguage: "भाषा चुनें"
    }
  },
  marathi: {
    translation: {
      // Navbar
      home: "मुखपृष्ठ",
      about: "आमच्याबद्दल",
      contact: "संपर्क करा",
      services: "सेवा",
      
      // Home Page
      welcome: "आमच्या वेबसाइटवर आपले स्वागत आहे",
      welcomeDesc: "हे संपूर्णपणे प्रतिसादात्मक होमपेज आहे ज्यामध्ये सुंदर पार्श्वभूमी प्रतिमा आहे",
      getStarted: "सुरू करा",
      
      // Common
      language: "भाषा",
      selectLanguage: "भाषा निवडा"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "english", // default language
    fallbackLng: "english",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;