import React from 'react';
import { useTranslation } from 'react-i18next';
import { bg } from '../../assets';

function Home() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Project features data
  const features = [
    {
      icon: '🔥',
      title: currentLang === 'english' ? 'Big Data Processing' : 
              currentLang === 'hindi' ? 'बिग डेटा प्रोसेसिंग' : 'बिग डेटा प्रोसेसिंग',
      desc: t('Process and analyze large agricultural datasets using PySpark for actionable insights.')
    },
    {
      icon: '📊',
      title: currentLang === 'english' ? 'Market Analysis' : 
              currentLang === 'hindi' ? 'बाजार विश्लेषण' : 'बाजार विश्लेषण',
      desc: t('Analyze market trends and price fluctuations to help farmers make informed decisions.')
    },
    {
      icon: '🌐',
      title: currentLang === 'english' ? 'Multilingual' : 
              currentLang === 'hindi' ? 'बहुभाषी' : 'बहुभाषिक',
      desc: t('Supports English, Hindi, and Marathi to cater to a diverse user base of farmers across India.')
    },
    {
      icon: '📈',
      title: currentLang === 'english' ? 'Interactive Dashboard' : 
              currentLang === 'hindi' ? 'इंटरैक्टिव डैशबोर्ड' : 'परस्परसंवादी डॅशबोर्ड',
      desc: t('Visualize key metrics and insights through an intuitive dashboard for easy interpretation.')
    }
  ];

  // Tech stack
  const techStack = [
    { category: 'Frontend', items: 'React.js, Tailwind CSS' },
    { category: 'Backend', items: 'Python, PySpark' },
    { category: 'ML', items: 'Machine Learning' }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row pt-20">
      {/* Left Half - Background Image */}
      <div 
        className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-pulse">
              {currentLang === 'english' ? 'Welcome to' : 
               currentLang === 'hindi' ? t('welcome') : 
               t('welcome')}
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-yellow-400">
              {t('Harvest Horizon')}
            </h1>
            <p className="text-lg md:text-xl max-w-lg mx-auto">
              {t('We empower farmers with data-driven insights for better yields and smarter decisions.')}
            </p>
           
          </div>
        </div>
      </div>

      {/* Right Half - Project Information */}
      <div className="w-full md:w-1/2 min-h-screen bg-green-50 overflow-y-auto">
        <div className="p-6 md:p-8 lg:p-10">
          
          {/* Project Title */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
              {t('Harvest Horizon')}
            </h1>
            <p className="text-lg text-green-600">
              {t('A comprehensive big data analytics project focused on agricultural insights and market trends.')}
            </p>
          </div>

          {/* Features Grid */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              {currentLang === 'english' ? '✨ Key Features' : 
               currentLang === 'hindi' ? '✨ मुख्य विशेषताएं' : '✨ मुख्य वैशिष्ट्ये'}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105">
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <h3 className="font-semibold text-green-700 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              {currentLang === 'english' ? '🛠️ Technologies' : 
               currentLang === 'hindi' ? '🛠️ प्रौद्योगिकियाँ' : '🛠️ तंत्रज्ञान'}
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <div key={index} className="text-center">
                    <div className="font-semibold text-green-700 mb-2">{tech.category}</div>
                    <div className="text-sm text-gray-600">{tech.items}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Architecture Flow */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              {currentLang === 'english' ? '🔄 System Flow' : 
               currentLang === 'hindi' ? '🔄 सिस्टम फ्लो' : '🔄 सिस्टम फ्लो'}
            </h2>
            <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-lg shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {['Data Collection', 'PySpark', 'ML Model', 'Dashboard'].map((step, index, array) => (
                  <React.Fragment key={step}>
                    <div className="text-center">
                      <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                        {index + 1}
                      </div>
                      <div className="font-medium">{step}</div>
                    </div>
                    {index < array.length - 1 && (
                      <div className="text-2xl hidden md:block">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Info Note */}
          <div className="p-4 bg-yellow-100 rounded-lg border-l-4 border-yellow-500">
            <p className="text-yellow-800">
              {currentLang === 'english' ? '💡 This project demonstrates how big data analytics can help farmers make better decisions.' :
               currentLang === 'hindi' ? '💡 यह परियोजना दर्शाती है कि बिग डेटा एनालिटिक्स किसानों को बेहतर निर्णय लेने में कैसे मदद कर सकता है।' :
               '💡 हा प्रकल्प दर्शवितो की बिग डेटा विश्लेषण शेतकऱ्यांना चांगले निर्णय घेण्यास कशी मदत करू शकते.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;