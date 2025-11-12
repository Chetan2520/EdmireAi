import React from 'react';
import { Star, MessageCircle, Calendar, Book } from 'lucide-react';

export default function HelpSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-red-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              <Star className="w-4 h-4" />
              <span>Every Student's Journey Is Different</span>
            </div>

            <h1 className="text-5xl font-bold leading-tight">
              Still Confused? Let Us Help
            </h1>

            <p className="text-lg text-white/90 leading-relaxed">
              We're here to help you figure out what works best, even if it's just one topic. Our Academic Counsellors will walk you through your needs and help you build your path.
            </p>

            <div className="flex items-center gap-2 text-sm">
              <MessageCircle className="w-5 h-5" />
              <span>Takes 2 Minutes to Book a Call</span>
            </div>

            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
              Need Help Deciding? Talk to Counselor
              <span>→</span>
            </button>

            <p className="text-sm text-white/80">
              We'll suggest a study plan in 60 seconds.
            </p>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm">97% parents found our guidance helpful</span>
            </div>
          </div>

          {/* Right Section - Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="bg-white rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
                ✓ Top Results. Top Teachers.<br />On Your Terms.
              </h2>

              <button className="w-full bg-white border-2 border-blue-600 text-blue-600 font-semibold py-4 rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                Book a Free Demo
              </button>

              <button className="w-full bg-white border-2 border-blue-600 text-blue-600 font-semibold py-4 rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                <Book className="w-5 h-5" />
                Explore Plans
              </button>

              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg">
                <MessageCircle className="w-5 h-5" />
                Chat with an Expert
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
    
    </div>
  );
}