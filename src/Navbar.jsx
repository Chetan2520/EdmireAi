import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrograms, setShowPrograms] = useState(false);
  const [showMobilePrograms, setShowMobilePrograms] = useState(false);

  return (
    <>
      <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-xl sm:text-2xl font-bold">
                {/* <span className="text-orange-600" style={{ fontFamily: 'cursive' }}>Edmire</span>
                <span className="text-gray-800">Ai</span> */}
                <img src='/logo.jpg' className='w-36 h-12'></img>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
              <a
                href="#home"
                className="text-gray-800 hover:text-orange-600 transition font-semibold px-3 py-2 rounded-lg text-sm lg:text-base"
              >
                Home
              </a>
              <a
                href="#why"
                className="text-gray-800 hover:text-orange-600 transition font-semibold px-3 py-2 rounded-lg text-sm lg:text-base"
              >
                Why EdmireAI
              </a>

              {/* Programs Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowPrograms(true)}
                onMouseLeave={() => setShowPrograms(false)}
              >
                <button
                  className="text-gray-800 hover:text-orange-600 transition font-semibold px-3 py-2 rounded-lg text-sm lg:text-base flex items-center gap-1"
                >
                  Programs
                  <svg
                    className={`w-4 h-4 transition-transform ${showPrograms ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl py-2 min-w-[180px] transition-all duration-200 ${
                    showPrograms
                      ? 'opacity-100 translate-y-0 visible'
                      : 'opacity-0 -translate-y-2 invisible pointer-events-none'
                  }`}
                >
                  <a
                    href="#ai-basics"
                    className="block text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition font-semibold px-4 py-2 text-sm"
                  >
                    AI Basics
                  </a>
                  <a
                    href="#ml-program"
                    className="block text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition font-semibold px-4 py-2 text-sm"
                  >
                    ML Program
                  </a>
                  <a
                    href="#data-science"
                    className="block text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition font-semibold px-4 py-2 text-sm"
                  >
                    Data Science
                  </a>
                  <a
                    href="#ai-tools"
                    className="block text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition font-semibold px-4 py-2 text-sm"
                  >
                    AI Tools Mastery
                  </a>
                </div>
              </div>

              <a
                href="#teacher"
                className="text-gray-800 hover:text-orange-600 transition font-semibold px-3 py-2 rounded-lg text-sm lg:text-base"
              >
                Become a Teacher
              </a>
              <a
                href="#blog"
                className="text-gray-800 hover:text-orange-600 transition font-semibold px-3 py-2 rounded-lg text-sm lg:text-base"
              >
                Blog
              </a>
            </div>

            {/* Login Button - Desktop */}
            <div className="hidden md:flex items-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 lg:px-6 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all text-sm lg:text-base">
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-orange-600 hover:text-orange-700 transition p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="text-2xl font-bold">
              <span className="text-orange-600" style={{ fontFamily: 'cursive' }}>Edmire</span>
              <span className="text-gray-800">Ai</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-orange-600 hover:text-orange-700 transition p-2"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col space-y-1">
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition font-semibold py-3 px-4 rounded-lg"
              >
                Home
              </a>
              <a
                href="#why"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition font-semibold py-3 px-4 rounded-lg"
              >
                Why EdmireAI
              </a>

              {/* Programs Dropdown (Mobile) */}
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowMobilePrograms(!showMobilePrograms);
                  }}
                  className="w-full text-left text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition font-semibold py-3 px-4 rounded-lg flex items-center justify-between"
                >
                  Programs
                  <svg
                    className={`w-4 h-4 transition-transform ${showMobilePrograms ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    showMobilePrograms ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-4 space-y-1 mt-1">
                    <a
                      href="#ai-basics"
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition font-medium py-2 px-4 rounded-lg text-sm"
                    >
                      AI Basics
                    </a>
                    <a
                      href="#ml-program"
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition font-medium py-2 px-4 rounded-lg text-sm"
                    >
                      ML Program
                    </a>
                    <a
                      href="#data-science"
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition font-medium py-2 px-4 rounded-lg text-sm"
                    >
                      Data Science
                    </a>
                    <a
                      href="#ai-tools"
                      onClick={() => setIsOpen(false)}
                      className="block text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition font-medium py-2 px-4 rounded-lg text-sm"
                    >
                      AI Tools Mastery
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="#teacher"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition font-semibold py-3 px-4 rounded-lg"
              >
                Become a Teacher
              </a>
              <a
                href="#blog"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition font-semibold py-3 px-4 rounded-lg"
              >
                Blog
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-100">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all w-full">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}