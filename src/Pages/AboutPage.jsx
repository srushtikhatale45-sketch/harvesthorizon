import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Eye, Heart, Users, Leaf, TrendingUp, Shield, Award } from 'lucide-react';

const AboutPage = () => {
  const { t } = useTranslation();

  const values = [
    { icon: Target, title: 'Our Mission', description: 'To empower farmers with data-driven insights for sustainable and profitable farming.' },
    { icon: Eye, title: 'Our Vision', description: 'Creating a future where every farmer makes informed decisions using technology.' },
    { icon: Heart, title: 'Our Values', description: 'Integrity, innovation, and farmer-first approach in everything we do.' }
  ];

  const team = [
    { name: 'Dr. Rajesh Kumar', role: 'Agricultural Expert', icon: Users },
    { name: 'Priya Sharma', role: 'Data Scientist', icon: TrendingUp },
    { name: 'Amit Patel', role: 'Tech Lead', icon: Shield },
    { name: 'Sneha Desai', role: 'Farmer Liaison', icon: Award }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">{t('about_title')}</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            {t('about_text1')}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('about_text2')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2026, Harvest Horizon emerged from the need to bridge the gap between traditional farming practices and modern technology. We believe that every farmer deserves access to accurate market information and predictive insights to maximize their profits.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <value.icon className="text-primary-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="card text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <member.icon className="text-primary-600 w-10 h-10" />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;