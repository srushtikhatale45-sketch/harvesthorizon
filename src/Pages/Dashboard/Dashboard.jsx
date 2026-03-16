import React from 'react';
import { useTranslation } from 'react-i18next';
import { statsData } from '../../data/sampleData';

function Dashboard() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Simple stats cards
  const stats = [
    { label: t('Data Records'), value: statsData.records, icon: '📊', color: 'bg-blue-500' },
    { label: t('Crops'), value: statsData.crops, icon: '🌾', color: 'bg-green-500' },
    { label: t('States'), value: statsData.states, icon: '🗺️', color: 'bg-orange-500' },
    { label: t('Markets'), value: statsData.markets, icon: '🏪', color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-green-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            {t('Harvest Horizon Dashboard')}
          </h1>
          <p className="text-gray-600">
            {t('Welcome to the Harvest Horizon dashboard! Here you can explore key metrics and insights derived from our agricultural dataset.')}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all hover:scale-105"
            >
              <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 text-white text-xl`}>
                {stat.icon}
              </div>
              <p className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Simple Charts Placeholder */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Dataset Growth */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              {t('Growth of Dataset Over Years')}
            </h2>
            <div className="h-48 flex items-end justify-around">
              {[15000, 25000, 42000, 68000, 95000, 125000].map((value, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-12 bg-green-500 rounded-t-lg transition-all hover:bg-green-600"
                    style={{ height: `${(value / 125000) * 150}px` }}
                  ></div>
                  <span className="text-xs mt-2 text-gray-600">{2019 + index}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Crop Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-green-800 mb-4">
              {t('Crop Distribution')}
            </h2>
            <div className="space-y-3">
              {['Cereals', 'Pulses', 'Oilseeds', 'Vegetables', 'Fruits'].map((crop, index) => (
                <div key={crop} className="flex items-center">
                  <span className="w-24 text-sm text-gray-600">{crop}</span>
                  <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: `${[35, 20, 15, 18, 12][index]}%` }}
                    ></div>
                  </div>
                  <span className="w-12 text-right text-sm text-gray-600">
                    {[35, 20, 15, 18, 12][index]}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture Summary */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-green-800 mb-4">
            {t('Architecture Summary')}
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {['Data Collection', 'PySpark Processing', 'ML Analysis', 'Visualization'].map((step, index, array) => (
              <React.Fragment key={step}>
                <div className="flex items-center">
                  <div className="bg-green-100 text-green-700 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <span className="ml-2 text-gray-700">{step}</span>
                </div>
                {index < array.length - 1 && (
                  <div className="text-green-400 hidden md:block">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Demo Note */}
        <div className="mt-8 p-4 bg-yellow-100 rounded-lg border-l-4 border-yellow-500">
          <p className="text-yellow-800">
            {currentLang === 'english' ? '📌 Demonstration dashboard showing sample analytics. Real data would be processed using PySpark and ML models.' :
             currentLang === 'hindi' ? '📌 नमूना विश्लेषण दिखाने वाला प्रदर्शन डैशबोर्ड। वास्तविक डेटा PySpark और ML मॉडल का उपयोग करके संसाधित किया जाएगा।' :
             '📌 नमुना विश्लेषण दर्शविणारे प्रात्यक्षिक डॅशबोर्ड। वास्तविक डेटा PySpark आणि ML मॉडेल वापरून प्रक्रिया केली जाईल.'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;