import React from 'react';
import { Check, X } from 'lucide-react';

export default function VedantuComparison() {
  const features = [
    { name: '1:1 Personal Attention', vedantu: true, traditional: false, other: false, highlight: false },
    { name: 'Flexible Scheduling', vedantu: true, traditional: false, other: true, highlight: true },
    { name: 'Personalized Learning', vedantu: true, traditional: false, other: false, highlight: false },
    { name: 'Live Doubt Clearing', vedantu: true, traditional: true, other: false, highlight: true },
    { name: 'Progress Tracking', vedantu: true, traditional: false, other: true, highlight: false },
    { name: 'Parent Involvement', vedantu: true, traditional: false, other: false, highlight: true },
    { name: 'Interactive Tools', vedantu: true, traditional: false, other: true, highlight: false },
    { name: 'Affordable Pricing', vedantu: true, traditional: false, other: true, highlight: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Why Vedantu 1:1 Stands Apart
          </h1>
          <p className="text-gray-600 text-lg">
            See how we compare to traditional coaching and other platforms
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-4 bg-gradient-to-r from-orange-500 to-orange-600">
            <div className="px-6 py-4 font-semibold text-white">Features</div>
            <div className="px-6 py-4 font-semibold text-white text-center">Vedantu 1:1</div>
            <div className="px-6 py-4 font-semibold text-white text-center bg-slate-700">Traditional</div>
            <div className="px-6 py-4 font-semibold text-white text-center bg-slate-800">Other Online</div>
          </div>

          {/* Rows */}
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-4 border-b border-gray-200 ${
                feature.highlight ? 'bg-amber-50' : 'bg-white'
              }`}
            >
              <div className="px-6 py-4 font-medium text-gray-900">
                {feature.name}
              </div>
              <div className="px-6 py-4 flex justify-center items-center">
                {feature.vedantu ? (
                  <Check className="text-green-500 w-6 h-6" />
                ) : (
                  <X className="text-red-500 w-6 h-6" />
                )}
              </div>
              <div className="px-6 py-4 flex justify-center items-center bg-slate-50">
                {feature.traditional ? (
                  <Check className="text-green-500 w-6 h-6" />
                ) : (
                  <X className="text-red-500 w-6 h-6" />
                )}
              </div>
              <div className="px-6 py-4 flex justify-center items-center bg-slate-100">
                {feature.other ? (
                  <Check className="text-green-500 w-6 h-6" />
                ) : (
                  <X className="text-red-500 w-6 h-6" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-8 text-right">
          <button className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
            Find your personal tutor
          </button>
        </div> */}
      </div>
    </div>
  );
}