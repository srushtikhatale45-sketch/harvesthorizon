import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, TrendingUp, Shield, Clock, BarChart3, Sprout, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import { Recording } from '../assets';

const Home = () => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
      <section className="relative py-12 md:py-20 lg:py-28">
        <div className="absolute inset-0 bg-[#FDFCFB] opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-up order-1 lg:order-none">
              <div className="inline-flex items-center gap-2 bg-[#EADDB0] px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6">
                <Sprout className="text-[#214B24] w-3 h-3 md:w-4 md:h-4" />
                <span className="text-[#214B24] text-xs md:text-sm font-semibold">
                  {t('ai_powered_badge') || 'AI-Powered Agriculture'}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#214B24] mb-4 md:mb-6 leading-tight">
                {t('hero_title')}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#8E946F] mb-6 md:mb-8 leading-relaxed">
                {t('hero_subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/dashboard" className="btn-primary inline-flex items-center justify-center gap-2 group text-sm sm:text-base">
                  {t('hero_cta')}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about" className="btn-secondary inline-flex items-center justify-center text-sm sm:text-base">
                  {t('hero_cta2')}
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[#EADDB0]">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#767922]">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-[#8E946F]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Video with Demo Badge */}
            <div className="relative order-2 lg:order-none mt-8 lg:mt-0">
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl group">
                <video
                  ref={videoRef}
                  className="w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-none object-cover"
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  poster="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                >
                  <source src={Recording} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* 🆕 Demo Badge - Top Left */}
                <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 z-10">
                  <div className="bg-black/70 backdrop-blur-sm text-white text-[10px] sm:text-xs md:text-sm font-medium px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <Play size={12} className="text-yellow-400" />
                    {t('video_demo_label') || '📊 Dashboard Demo'}
                  </div>
                </div>

                {/* Control Buttons Container */}
                <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 flex justify-between items-center z-10">
                  <button
                    onClick={toggleMute}
                    className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 shadow-lg hover:scale-110 transition-transform touch-manipulation"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? (
                      <VolumeX size={16} className="sm:w-5 sm:h-5 text-[#214B24]" />
                    ) : (
                      <Volume2 size={16} className="sm:w-5 sm:h-5 text-[#214B24]" />
                    )}
                  </button>

                  <button
                    onClick={togglePlay}
                    className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 shadow-lg hover:scale-110 transition-transform touch-manipulation"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? (
                      <Pause size={16} className="sm:w-5 sm:h-5 text-[#214B24]" />
                    ) : (
                      <Play size={16} className="sm:w-5 sm:h-5 text-[#214B24]" />
                    )}
                  </button>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#214B24]/20 to-transparent pointer-events-none"></div>
              </div>

              {/* Floating Card - hidden on small screens, visible on md+ */}
              <div className="hidden md:block absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-[#FDFCFB] rounded-xl shadow-xl p-3 md:p-4 animate-float border border-[#EADDB0]">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#EADDB0] rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-[#767922] w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] md:text-xs text-[#8E946F]">{t('todays_price') || "Today's Price"}</div>
                    <div className="font-bold text-sm md:text-lg text-[#214B24]">₹2,500/{t('per_quintal') || 'quintal'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#FDFCFB] to-[#F5F2EA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="section-title text-2xl md:text-3xl lg:text-4xl">{t('features_title')}</h2>
            <div className="w-20 h-1 bg-[#767922] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#767922] to-[#214B24] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            {t('cta_title') || 'Ready to Transform Your Farming?'}
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90 px-4">
            {t('cta_subtitle') || 'Join thousands of farmers already using Harvest Horizon'}
          </p>
          <Link to="/dashboard" className="inline-flex items-center gap-2 bg-[#FDFCFB] text-[#214B24] px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 text-sm md:text-base">
            {t('hero_cta')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;