import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Hero = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="bg-amber-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-orange-600">Edmirai</h1>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-gray-700 relative">
            <div className="relative">
              <span 
                className="hover:text-orange-600 cursor-pointer flex items-center gap-1" 
                onClick={toggleDropdown}
              >
                Programs
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </span>
              <div className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
                isDropdownOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Program 1</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Program 2</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Program 3</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Program 4</a>
              </div>
            </div>
            <span className="hover:text-orange-600 cursor-pointer">Why Edmirai?</span>
            <span className="hover:text-orange-600 cursor-pointer">Become a Teacher</span>
            <span className="hover:text-orange-600 cursor-pointer">Blogs</span>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMobile}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <button className="hidden sm:inline-block bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition text-sm">
            Login
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-4 space-y-4 text-gray-700 relative">
              <div className="relative">
                <span 
                  className="flex items-center gap-1 cursor-pointer" 
                  onClick={toggleDropdown}
                >
                  Programs
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </span>
                <div className={`mt-2 w-full bg-gray-50 rounded-md py-2 z-10 border border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
                  isDropdownOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Program 1</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Program 2</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Program 3</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">Program 4</a>
                </div>
              </div>
              <span className="block hover:text-orange-600 cursor-pointer">Why Edmirai?</span>
              <span className="block hover:text-orange-600 cursor-pointer">Become a Teacher</span>
              <span className="block hover:text-orange-600 cursor-pointer">Blogs</span>
              <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
                Login
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 sm:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
        {/* Left Text Content */}
        <div className="lg:w-1/2 space-y-4 sm:space-y-6 relative z-10 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            India&apos;s Leading
            <br className="hidden sm:block" />
            <span className="block sm:inline">Online Learning</span>
            <br className="hidden lg:block" />
            <span className="block lg:inline">Platform</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 font-medium">Smarter Learning, Better Results.</p>
          
          {/* Feature Bubbles - Responsive positioning */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            {/* Bubble 1: One-to-One - Top right */}
            <div className="absolute top-[-20px] right-[-100px] w-28 h-28 bg-orange-100 rounded-full flex items-center justify-center text-xs font-medium text-orange-600 shadow-lg transform -rotate-12">
              One-to-One
            </div>
            {/* Bubble 2: Live Classes - Upper right */}
            <div className="absolute top-[120px] right-[-60px] w-28 h-28 bg-orange-100 rounded-full flex items-center justify-center text-xs font-medium text-orange-600 shadow-lg transform rotate-8">
              Live Classes
            </div>
            {/* Bubble 3: Live Doubt Solving - Mid right */}
            <div className="absolute top-[280px] right-[-120px] w-28 h-28 bg-orange-100 rounded-full flex items-center justify-center text-xs font-medium text-orange-600 shadow-lg transform -rotate-6">
              Live Doubt
              <br />
              Solving
            </div>
            {/* Bubble 4: Personalised AI Tutor - Bottom right */}
            <div className="absolute bottom-[20px] right-[20px] w-28 h-28 bg-orange-100 rounded-full flex items-center justify-center text-xs font-medium text-orange-600 shadow-lg">
              Personalised
              <br />
              AI Tutor
            </div>
            {/* Simple curve lines using SVG for connection */}
            <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 800 600">
              {/* Curve to One-to-One */}
              <path d="M 200 100 Q 400 50 600 100" stroke="orange" strokeWidth="2" fill="none" />
              {/* Curve to Live Classes */}
              <path d="M 200 250 Q 450 200 600 280" stroke="orange" strokeWidth="2" fill="none" />
              {/* Curve to Live Doubt Solving */}
              <path d="M 200 350 Q 500 320 550 420" stroke="orange" strokeWidth="2" fill="none" />
              {/* Curve to AI Tutor */}
              <path d="M 200 450 Q 400 480 600 500" stroke="orange" strokeWidth="2" fill="none" />
            </svg>
          </div>

          <div className="space-y-4 pt-4 sm:pt-8">
            <p className="text-lg sm:text-xl font-semibold text-gray-800">JEE & NEET Exam Prep App</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold w-full sm:w-auto hover:bg-orange-600 transition">
                Book a Free Demo Now
              </button>
              <button className="bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold flex items-center justify-center space-x-2 w-full sm:w-auto hover:bg-green-600 transition">
                <span>💬</span>
                <span className="hidden sm:inline">Chat on WhatsApp</span>
                <span className="sm:hidden">WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 relative mt-8 lg:mt-0 w-full">
          <img
            src="https://thumbs.dreamstime.com/b/portrait-cute-asian-teen-long-hair-wearing-white-shirt-sitting-online-studying-laptop-computer-table-camera-to-234886535.jpg"
            alt="Young Asian woman using laptop for online learning"
            className="w-full h-auto rounded-lg shadow-xl max-w-md mx-auto lg:max-w-none"
          />
          {/* Overlay Badge: Exam Prep App */}
          <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 bg-white p-2 sm:p-3 rounded-lg shadow-lg border border-gray-200">
            <p className="text-xs sm:text-sm font-semibold text-gray-800">Exam Prep App</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;