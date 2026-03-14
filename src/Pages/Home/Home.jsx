import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { bg } from '../../assets';

function Home() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('crops');

  // Agricultural data in three languages
  const agricultureData = {
    crops: {
      english: {
        title: "Our Crops",
        items: ["Wheat", "Rice", "Sugarcane", "Cotton", "Pulses"]
      },
      hindi: {
        title: "हमारी फसलें",
        items: ["गेहूं", "चावल", "गन्ना", "कपास", "दालें"]
      },
      marathi: {
        title: "आमची पिके",
        items: ["गहू", "तांदूळ", "ऊस", "कापूस", "डाळी"]
      }
    },
    practices: {
      english: {
        title: "Farming Practices",
        items: ["Organic Farming", "Drip Irrigation", "Crop Rotation", "Natural Pesticides", "Mulching"]
      },
      hindi: {
        title: "कृषि पद्धतियाँ",
        items: ["जैविक खेती", "ड्रिप सिंचाई", "फसल चक्र", "प्राकृतिक कीटनाशक", "मल्चिंग"]
      },
      marathi: {
        title: "शेती पद्धती",
        items: ["सेंद्रिय शेती", "ठिबक सिंचन", "पीक फेरपालट", "नैसर्गिक कीटकनाशके", "आच्छादन"]
      }
    },
    season: {
      english: {
        title: "Current Season",
        description: "Kharif season - Planting of rice, maize, cotton, and sugarcane",
        months: "June - October"
      },
      hindi: {
        title: "वर्तमान सीजन",
        description: "खरीफ सीजन - चावल, मक्का, कपास और गन्ना की बुवाई",
        months: "जून - अक्टूबर"
      },
      marathi: {
        title: "सध्याचा हंगाम",
        description: "खरीप हंगाम - तांदूळ, मका, कापूस आणि ऊस लागवड",
        months: "जून - ऑक्टोबर"
      }
    },
    stats: {
      english: {
        farmers: "10,000+ Farmers",
        area: "25,000 Acres",
        products: "50+ Products",
        satisfaction: "95% Satisfaction"
      },
      hindi: {
        farmers: "10,000+ किसान",
        area: "25,000 एकड़",
        products: "50+ उत्पाद",
        satisfaction: "95% संतुष्टि"
      },
      marathi: {
        farmers: "10,000+ शेतकरी",
        area: "25,000 एकर",
        products: "50+ उत्पादने",
        satisfaction: "95% समाधान"
      }
    }
  };

  const currentLang = i18n.language;

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left Half - Background Image */}
      <div 
        className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text readability on image */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-6">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-pulse">
              {currentLang === 'english' ? 'Welcome to' : 
               currentLang === 'hindi' ? 'हार्वेस्टहोराइजन में' : 
               'हार्वेस्टहोरायझन मध्ये'}
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-yellow-400">
              HarvestHorizon
            </h1>
            <p className="text-lg md:text-xl max-w-lg mx-auto">
              {currentLang === 'english' ? 'Growing Tomorrow, Today' :
               currentLang === 'hindi' ? 'कल बढ़ रहा है, आज' :
               'उद्या वाढवत आहे, आज'}
            </p>
          </div>
        </div>
      </div>

      {/* Right Half - Agricultural Information */}
      <div className="w-full md:w-1/2 min-h-screen bg-green-50 overflow-y-auto">
        <div className="p-6 md:p-8 lg:p-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-green-200 pb-4">
            {['crops', 'practices', 'season', 'stats'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 
                  ${activeTab === tab 
                    ? 'bg-green-600 text-white shadow-lg scale-105' 
                    : 'bg-white text-green-800 hover:bg-green-100'}`}
              >
                {tab === 'crops' && (currentLang === 'english' ? '🌾 Crops' : 
                                     currentLang === 'hindi' ? '🌾 फसलें' : '🌾 पिके')}
                {tab === 'practices' && (currentLang === 'english' ? '🌱 Practices' : 
                                         currentLang === 'hindi' ? '🌱 पद्धतियाँ' : '🌱 पद्धती')}
                {tab === 'season' && (currentLang === 'english' ? '🌦️ Season' : 
                                      currentLang === 'hindi' ? '🌦️ सीजन' : '🌦️ हंगाम')}
                {tab === 'stats' && (currentLang === 'english' ? '📊 Stats' : 
                                     currentLang === 'hindi' ? '📊 आंकड़े' : '📊 आकडे')}
              </button>
            ))}
          </div>

          {/* Dynamic Content Based on Active Tab */}
          <div className="space-y-6">
            {/* Crops Section */}
            {activeTab === 'crops' && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
                  {agricultureData.crops[currentLang]?.title || agricultureData.crops.english.title}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {agricultureData.crops[currentLang]?.items.map((crop, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105">
                      <span className="text-2xl mr-2">
                        {index === 0 ? '🌾' : index === 1 ? '🌾' : index === 2 ? '🎋' : index === 3 ? '🌿' : '🌱'}
                      </span>
                      <span className="text-green-700 font-medium">{crop}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Practices Section */}
            {activeTab === 'practices' && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
                  {agricultureData.practices[currentLang]?.title || agricultureData.practices.english.title}
                </h2>
                <div className="space-y-4">
                  {agricultureData.practices[currentLang]?.items.map((practice, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all hover:translate-x-2">
                      <span className="text-green-600 font-semibold">✓ {practice}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Season Section */}
            {activeTab === 'season' && (
              <div className="animate-fadeIn">
                <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-lg shadow-xl">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {agricultureData.season[currentLang]?.title || agricultureData.season.english.title}
                  </h2>
                  <p className="text-lg mb-3">
                    {agricultureData.season[currentLang]?.description || agricultureData.season.english.description}
                  </p>
                  <p className="text-xl font-semibold">
                    📅 {agricultureData.season[currentLang]?.months || agricultureData.season.english.months}
                  </p>
                </div>
              </div>
            )}

            {/* Stats Section */}
            {activeTab === 'stats' && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
                  {currentLang === 'english' ? 'Our Impact' : 
                   currentLang === 'hindi' ? 'हमारा प्रभाव' : 'आमचा प्रभाव'}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-2xl transition-all">
                    <div className="text-3xl mb-2">👨‍🌾</div>
                    <div className="text-xl font-bold text-green-700">{agricultureData.stats[currentLang]?.farmers}</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-2xl transition-all">
                    <div className="text-3xl mb-2">🌾</div>
                    <div className="text-xl font-bold text-green-700">{agricultureData.stats[currentLang]?.area}</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-2xl transition-all">
                    <div className="text-3xl mb-2">📦</div>
                    <div className="text-xl font-bold text-green-700">{agricultureData.stats[currentLang]?.products}</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-2xl transition-all">
                    <div className="text-3xl mb-2">⭐</div>
                    <div className="text-xl font-bold text-green-700">{agricultureData.stats[currentLang]?.satisfaction}</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-4 bg-yellow-100 rounded-lg border-l-4 border-yellow-500">
            <p className="text-yellow-800">
              {currentLang === 'english' ? '💡 Did you know? Sustainable farming can increase crop yield by up to 20%' :
               currentLang === 'hindi' ? '💡 क्या आप जानते हैं? टिकाऊ खेती से फसल की पैदावार 20% तक बढ़ सकती है' :
               '💡 तुम्हाला माहित आहे का? शाश्वत शेतीमुळे पीक उत्पादनात 20% पर्यंत वाढ होऊ शकते'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;