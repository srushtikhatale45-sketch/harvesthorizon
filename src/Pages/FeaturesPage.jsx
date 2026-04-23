import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  TrendingUp, BarChart3, Clock, MapPin, 
  LayoutDashboard, Languages, Sparkles, Shield,
  DollarSign, Calendar, Target, Bell
} from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const FeaturesPage = () => {
  const { t } = useTranslation();

  const allFeatures = [
    { icon: TrendingUp, title: t('feature1_title'), description: t('feature1_desc'), delay: 100 },
    { icon: BarChart3, title: t('feature2_title'), description: t('feature2_desc'), delay: 200 },
    { icon: Clock, title: t('feature3_title'), description: t('feature3_desc'), delay: 300 },
    { icon: MapPin, title: t('feature4_title'), description: t('feature4_desc'), delay: 400 },
    { icon: LayoutDashboard, title: t('feature5_title'), description: t('feature5_desc'), delay: 500 },
    { icon: Languages, title: t('feature6_title'), description: t('feature6_desc'), delay: 600 },
    { icon: DollarSign, title: t('profit_calculator'), description: t('profit_calculator_desc'), delay: 700 },
    { icon: Calendar, title: t('seasonal_alerts'), description: t('seasonal_alerts_desc'), delay: 800 },
    { icon: Target, title: t('demand_forecasting'), description: t('demand_forecasting_desc'), delay: 900 },
    { icon: Bell, title: t('price_alerts'), description: t('price_alerts_desc'), delay: 1000 }
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-[#767922] to-[#214B24] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">{t('features_title')}</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            {t('discover_text')}
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#FDFCFB]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#F5F2EA] to-[#FDFCFB]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#214B24] mb-4">{t('tech_stack_title')}</h2>
            <p className="text-[#8E946F] max-w-2xl mx-auto">
              {t('tech_stack_desc')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Machine Learning', 'Big Data Analytics', 'Real-time Processing', 'Cloud Computing'].map((tech, index) => (
              <div key={index} className="text-center p-4 bg-[#EADDB0] rounded-xl hover:scale-105 transition-transform">
                <Shield className="w-8 h-8 text-[#214B24] mx-auto mb-2" />
                <p className="font-semibold text-[#214B24]">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;