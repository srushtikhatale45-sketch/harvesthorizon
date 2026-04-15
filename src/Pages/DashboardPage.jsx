import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, TrendingUp, DollarSign, Calendar, MapPin } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const DashboardPage = () => {
  const { t } = useTranslation();

  // Mock data for charts
  const priceData = [
    { month: 'Jan', price: 2100, predicted: 2150 },
    { month: 'Feb', price: 2150, predicted: 2200 },
    { month: 'Mar', price: 2250, predicted: 2280 },
    { month: 'Apr', price: 2300, predicted: 2350 },
    { month: 'May', price: 2280, predicted: 2320 },
    { month: 'Jun', price: 2350, predicted: 2400 },
  ];

  const marketComparison = [
    { market: 'Pune', price: 2450, distance: 15 },
    { market: 'Mumbai', price: 2600, distance: 120 },
    { market: 'Nashik', price: 2380, distance: 85 },
    { market: 'Solapur', price: 2300, distance: 45 },
  ];

  const cropData = [
    { name: 'Wheat', currentPrice: 2250, predictedPrice: 2400, profit: '+6.7%' },
    { name: 'Rice', currentPrice: 2100, predictedPrice: 2180, profit: '+3.8%' },
    { name: 'Soybean', currentPrice: 3800, predictedPrice: 4200, profit: '+10.5%' },
    { name: 'Cotton', currentPrice: 5500, predictedPrice: 5800, profit: '+5.5%' },
  ];

  const plantingData = [
    { crop: 'Wheat', bestMonth: 'November', harvestMonth: 'March', profitMargin: 'High' },
    { crop: 'Rice', bestMonth: 'June', harvestMonth: 'October', profitMargin: 'Medium' },
    { crop: 'Soybean', bestMonth: 'July', harvestMonth: 'October', profitMargin: 'High' },
  ];

  const pieData = [
    { name: 'Wheat', value: 35, color: '#22c55e' },
    { name: 'Rice', value: 28, color: '#16a34a' },
    { name: 'Soybean', value: 22, color: '#15803d' },
    { name: 'Cotton', value: 15, color: '#14532d' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{t('dashboard_title')}</h1>
          <p className="text-gray-600">{t('dashboard_subtitle')}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-primary-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Avg. Wheat Price</p>
                <p className="text-2xl font-bold text-gray-900">₹2,250</p>
                <p className="text-green-600 text-sm mt-1">↑ +5.2%</p>
              </div>
              <DollarSign className="text-primary-500 w-8 h-8" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Best Market</p>
                <p className="text-2xl font-bold text-gray-900">Mumbai</p>
                <p className="text-green-600 text-sm mt-1">₹2,600/quintal</p>
              </div>
              <MapPin className="text-green-500 w-8 h-8" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Recommended Crop</p>
                <p className="text-2xl font-bold text-gray-900">Soybean</p>
                <p className="text-green-600 text-sm mt-1">↑ +10.5% profit</p>
              </div>
              <TrendingUp className="text-blue-500 w-8 h-8" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Best Planting Time</p>
                <p className="text-2xl font-bold text-gray-900">November</p>
                <p className="text-gray-600 text-sm mt-1">For Wheat</p>
              </div>
              <Calendar className="text-purple-500 w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Price Trend Chart */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">{t('price_trend')}</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={priceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#22c55e" name="Current Price" strokeWidth={2} />
                <Line type="monotone" dataKey="predicted" stroke="#16a34a" name="Predicted Price" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Market Comparison */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">{t('market_comparison')}</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={marketComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="market" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="price" fill="#22c55e" name="Price (₹/quintal)" />
                <Bar yAxisId="right" dataKey="distance" fill="#16a34a" name="Distance (km)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Crop Distribution */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Crop Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Crop Recommendations */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">{t('crop_recommendation')}</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold">Crop</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold">Current Price</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold">Predicted</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold">Profit</th>
                  </tr>
                </thead>
                <tbody>
                  {cropData.map((crop, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-3 font-medium">{crop.name}</td>
                      <td className="px-4 py-3">₹{crop.currentPrice}</td>
                      <td className="px-4 py-3">₹{crop.predictedPrice}</td>
                      <td className="px-4 py-3 text-green-600">{crop.profit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Planting Advice */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">{t('planting_advice')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plantingData.map((advice, index) => (
              <div key={index} className="bg-gradient-to-r from-primary-50 to-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">{advice.crop}</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Best Planting:</span> {advice.bestMonth}</p>
                  <p><span className="font-medium">Harvest:</span> {advice.harvestMonth}</p>
                  <p><span className="font-medium">Profit Margin:</span> 
                    <span className={`ml-2 ${advice.profitMargin === 'High' ? 'text-green-600' : 'text-yellow-600'}`}>
                      {advice.profitMargin}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Dashboard Link */}
        <div className="text-center">
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
          >
            {t('view_full_dashboard')}
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;