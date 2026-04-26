import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, TrendingUp, DollarSign, Calendar, MapPin } from 'lucide-react';

const DashboardPage = () => {
  const { t } = useTranslation();

  // Power BI Embed URL - Replace with your actual embed URL
  const powerBIEmbedUrl = "https://app.powerbi.com/reportEmbed?reportId=1c658195-c231-4ca5-9003-793c39adb5d5&autoAuth=true&ctid=becad549-3cfb-4feb-9ccb-360ab604b3b7";

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{t('dashboard_title')}</h1>
          <p className="text-gray-600">{t('dashboard_subtitle')}</p>
        </div>

        {/* Power BI Dashboard Embed */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">Agriculture Analytics Dashboard</h2>
            <p className="text-primary-100 text-sm mt-1">Real-time crop prices, market trends, and predictive insights</p>
          </div>
          
          {/* Responsive Iframe Container */}
          <div className="relative" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
            <iframe
              title="Agriculture Dashboard - Harvest Horizon"
              src={powerBIEmbedUrl}
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen={true}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-popups-to-escape-sandbox"
            ></iframe>
          </div>
          
          
        </div>

        {/* Alternative: Open in New Window Button */}
        <div className="text-center">
          <a 
            href={powerBIEmbedUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Open Full Dashboard in New Tab
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;