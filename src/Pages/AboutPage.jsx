import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Eye, Heart, Users, TrendingUp, Shield, Award, Sprout } from 'lucide-react';

const AboutPage = () => {
  const { t } = useTranslation();

  const values = [
    { icon: Target, title: t('mission_title'), description: t('mission_desc') },
    { icon: Eye, title: t('vision_title'), description: t('vision_desc') },
    { icon: Heart, title: t('values_title'), description: t('values_desc') }
  ];

  const team = [
    { name: 'Rudrani Jangale', role: 'Cloud Expert', icon: Users },
    { name: ' Srushti Khatale', role: 'Software Developer', icon: Shield },
    { name: 'Riya Anthal', role: 'Data Analyst', icon: TrendingUp },
    { name: 'Srushti Kshirsagar', role: 'DevOps Engineer', icon: Award }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#767922] to-[#214B24] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Sprout className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">{t('about_title')}</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            {t('about_text1')}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#FDFCFB]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#214B24] mb-6">Our Story</h2>
            <p className="text-[#8E946F] mb-4 leading-relaxed">
              {t('about_text2')}
            </p>
            <p className="text-[#8E946F] leading-relaxed">
              {t('founded_text')}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#F5F2EA]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#214B24] mb-12">{t('core_values_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center group">
                <div className="w-16 h-16 bg-[#EADDB0] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4C48A] transition-colors">
                  <value.icon className="text-[#214B24] w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-[#214B24] mb-2">{value.title}</h3>
                <p className="text-[#8E946F]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#FDFCFB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#214B24] mb-12">{t('meet_team')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="card text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-[#EADDB0] to-[#D4C48A] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <member.icon className="text-[#214B24] w-10 h-10" />
                </div>
                <h3 className="text-lg font-semibold text-[#214B24]">{member.name}</h3>
                <p className="text-[#8E946F] text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;