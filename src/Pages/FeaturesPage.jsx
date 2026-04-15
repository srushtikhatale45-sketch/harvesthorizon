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
    { icon: DollarSign, title: 'Profit Calculator', description: 'Calculate expected profits based on current market prices and your production costs.', delay: 700 },
    { icon: Calendar, title: 'Seasonal Alerts', description: 'Get notified about optimal planting and harvesting seasons for different crops.', delay: 800 },
    { icon: Target, title: 'Demand Forecasting', description: 'Predict market demand for crops to plan your production accordingly.', delay: 900 },
    { icon: Bell, title: 'Price Alerts', description: 'Set custom price alerts for your crops and get notified when prices reach your target.', delay: 1000 }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">{t('features_title')}</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Discover how Harvest Horizon can transform your farming experience with cutting-edge technology
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powered By Advanced Technology</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform leverages cutting-edge technologies to deliver accurate and actionable insights
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Machine Learning', 'Big Data Analytics', 'Real-time Processing', 'Cloud Computing'].map((tech, index) => (
              <div key={index} className="text-center p-4 bg-gradient-to-br from-primary-50 to-green-50 rounded-xl">
                <Shield className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <p className="font-semibold">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;