import React, { useState } from 'react';
import { Play, Users, User } from 'lucide-react';

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  const videoUrl = "";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Video Section */}
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-8">
        <div className="max-w-6xl w-full mx-auto relative">
          {/* One-to-one Section */}
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 text-left z-10 transition-all duration-300"
            onMouseEnter={() => setHoveredSection('one-to-one')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className={`flex items-center gap-4 transition-all duration-300 ${hoveredSection === 'one-to-one' ? 'scale-110' : ''}`}>
              <div className="text-right">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-400 mb-2">
                  One-to-one
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-400">
                  Courses
                </h3>
              </div>
              <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                <User className="w-8 h-8 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Central Video Button */}
          <div className="flex justify-center items-center">
            <div 
              className="relative group cursor-pointer"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {!isPlaying ? (
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center relative overflow-hidden shadow-2xl shadow-purple-500/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-purple-500/70">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110">
                    <Play className="w-12 h-12 text-purple-900 ml-1" fill="currentColor" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 border-purple-400/30 animate-pulse"></div>
                </div>
              ) : (
                <div className="w-80 h-80 rounded-lg overflow-hidden shadow-2xl shadow-purple-500/50">
                  <iframe
                    width="100%"
                    height="100%"
                    src={videoUrl}
                    title="Course Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              )}
            </div>
          </div>

          {/* Cohort-based Section */}
          <div 
            className="absolute right-0 top-1/2 -translate-y-1/2 text-right z-10 transition-all duration-300"
            onMouseEnter={() => setHoveredSection('cohort')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className={`flex items-center gap-4 transition-all duration-300 ${hoveredSection === 'cohort' ? 'scale-110' : ''}`}>
              <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Users className="w-8 h-8 text-gray-400" />
              </div>
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-400 mb-2">
                  Cohort-based
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-gray-400">
                  Courses
                </h3>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Explore Programs Section */}
      <div className="bg-gradient-to-b from-amber-50 to-white py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Edmirai Programs
            </h2>
            <p className="text-lg text-gray-700">
              Personalised, AI-powered learning for every stage of your academic journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Edmirai Learn */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-8 h-8 border-3 border-white rounded-full relative">
                    <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-2 border-b-2 border-white rounded-b-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Edmirai Learn</h3>
                  <p className="text-gray-600">Personalised AI tutor for school studies</p>
                </div>
              </div>
              <button className="hover:bg-orange-600 text-orange-600 hover:text-white px-6 py-2.5 rounded-lg font-semibold  transition-colors hover:shadow-md">
                Know More →
              </button>
            </div>

            {/* One-to-One Classes */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">One-to-One Classes</h3>
                  <p className="text-gray-600">Live Individual classes for grades 6-12</p>
                </div>
              </div>
              <button className="hover:bg-orange-600 text-orange-600 hover:text-white px-6 py-2.5 rounded-lg font-semibold  transition-colors hover:shadow-md">
                Book a Free Demo
              </button>
            </div>

            {/* JEE */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="3" />
                    <path d="M12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">JEE</h3>
                  <p className="text-gray-600">Targeted preparation for the JEE exams</p>
                </div>
              </div>
              <button className="hover:bg-orange-600 text-orange-600 hover:text-white px-6 py-2.5 rounded-lg font-semibold  transition-colors hover:shadow-md">
                Know More →
              </button>
            </div>

            {/* Edmirai Connect */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="4" y="4" width="16" height="12" rx="2" />
                    <path d="M4 8h16M8 16h8" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Edmirai Connect</h3>
                  <p className="text-gray-600">Instant live one-on-one doubt solving</p>
                </div>
              </div>
              <button className="hover:bg-orange-600 text-orange-600 hover:text-white px-6 py-2.5 rounded-lg font-semibold  transition-colors hover:shadow-md">
                Know More →
              </button>
            </div>

            {/* Edmirai Mentor - Left */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="9" cy="9" r="7" />
                    <path d="M12 12l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Edmirai Mentor</h3>
                  <p className="text-gray-600">Personalised guidance and mentoring</p>
                </div>
              </div>
            </div>

            {/* Edmirai Mentor - Right */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Edmirai Mentor</h3>
                  <p className="text-gray-600">Personalised guidance and mentorship</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 text-gray-600">
            © Edmirai. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}