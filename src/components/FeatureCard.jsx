import React from 'react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <div 
      className="card group cursor-pointer animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 bg-gradient-to-br from-[#EADDB0] to-[#D4C48A] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-[#214B24] w-7 h-7" />
      </div>
      <h3 className="text-xl font-semibold text-[#214B24] mb-2 group-hover:text-[#767922] transition-colors">
        {title}
      </h3>
      <p className="text-[#8E946F] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;