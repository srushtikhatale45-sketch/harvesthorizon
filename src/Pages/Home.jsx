import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, TrendingUp, Shield, Clock, BarChart3, Sprout } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const Home = () => {
  const { t } = useTranslation();

  const features = [
    { icon: TrendingUp, title: t('feature1_title'), description: t('feature1_desc'), delay: 100 },
    { icon: BarChart3, title: t('feature2_title'), description: t('feature2_desc'), delay: 200 },
    { icon: Clock, title: t('feature3_title'), description: t('feature3_desc'), delay: 300 },
    { icon: Shield, title: t('feature4_title'), description: t('feature4_desc'), delay: 400 },
  ];

  const stats = [
    { value: '10,000+', label: t('stats_farmers') },
    { value: '50+', label: t('stats_markets') },
    { value: '95%', label: t('stats_accuracy') },
    { value: '30+', label: t('stats_crops') }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-[#FDFCFB] opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-[#EADDB0] px-4 py-2 rounded-full mb-6">
                <Sprout className="text-[#214B24] w-4 h-4" />
                <span className="text-[#214B24] text-sm font-semibold">{t('ai_powered_badge') || 'AI-Powered Agriculture'}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#214B24] mb-6 leading-tight">
                {t('hero_title')}
              </h1>
              <p className="text-lg md:text-xl text-[#8E946F] mb-8 leading-relaxed">
                {t('hero_subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dashboard" className="btn-primary inline-flex items-center justify-center gap-2 group">
                  {t('hero_cta')}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about" className="btn-secondary inline-flex items-center justify-center">
                  {t('hero_cta2')}
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-[#EADDB0]">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center md:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-[#767922]">{stat.value}</div>
                    <div className="text-sm text-[#8E946F]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:block hidden">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Smart Farming"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#214B24]/20 to-transparent"></div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-[#FDFCFB] rounded-xl shadow-xl p-4 animate-float border border-[#EADDB0]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#EADDB0] rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-[#767922]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#8E946F]">{t('todays_price') || "Today's Price"}</div>
                    <div className="font-bold text-lg text-[#214B24]">₹2,500/{t('per_quintal') || 'quintal'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#FDFCFB] to-[#F5F2EA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('features_title')}</h2>
            <div className="w-20 h-1 bg-[#767922] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#767922] to-[#214B24] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta_title') || 'Ready to Transform Your Farming?'}</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">{t('cta_subtitle') || 'Join thousands of farmers already using Harvest Horizon'}</p>
          <Link to="/dashboard" className="inline-flex items-center gap-2 bg-[#FDFCFB] text-[#214B24] px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105">
            {t('hero_cta')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;