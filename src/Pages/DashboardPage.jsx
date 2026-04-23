import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, TrendingUp, DollarSign, Calendar, MapPin } from 'lucide-react';

const DashboardPage = () => {
  const { t } = useTranslation();

  // Power BI Embed URL - Replace with your actual embed URL
  const powerBIEmbedUrl = "https://app.powerbi.com/reportEmbed?reportId=9611261b-17dc-4fbc-8c57-4ac463ea7682&autoAuth=true&ctid=becad549-3cfb-4feb-9ccb-360ab604b3b7";

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
          
          {/* Note about authentication */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 m-4 rounded">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  You need to be logged into your Power BI account to view the dashboard. 
                  <a href="#" className="font-semibold underline ml-1 hover:text-blue-800">
                    Sign in here
                  </a>
                </p>
              </div>
            </div>
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