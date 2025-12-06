import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Programs State
  const [showPrograms, setShowPrograms] = useState(false);
  const [showMobilePrograms, setShowMobilePrograms] = useState(false);
  const [hideTimeout, setHideTimeout] = useState(null);

  // More State
  const [showMore, setShowMore] = useState(false);
  const [showMobileMore, setShowMobileMore] = useState(false);
  const [moreHideTimeout, setMoreHideTimeout] = useState(null);

  return (
    <>
      <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-[1450px] mx-auto ">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-xl sm:text-2xl font-bold" >
                <Link to="/">
                  <img
                    src="/logo.png"
                    className="w-36 h-full ml-5 cursor-pointer"
                    alt="Logo"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
              <Link
                to="/"
                className="text-gray-800 hover:text-red-900 transition font-semibold px-3 py-2 rounded-lg text-sm lg:text-base"
              >
                Home
              </Link>

              {/* ================= PROGRAMS DROPDOWN ================= */}
              <div
                className="relative"
                onMouseEnter={() => {
                  if (hideTimeout) {
                    clearTimeout(hideTimeout);
                    setHideTimeout(null);
                  }
                  setShowPrograms(true);
                }}
                onMouseLeave={() => {
                  const timeoutId = setTimeout(() => {
                    setShowPrograms(false);
                  }, 150);
                  setHideTimeout(timeoutId);
                }}
              >
                <button
                  className="text-gray-800 hover:text-red-900 transition font-semibold px-3 py-2 rounded-lg text-sm lg:text-base flex items-center gap-1"
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
                  className={`absolute top-full left-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl py-4 min-w-[600px] transition-all duration-200 z-50 ${showPrograms
                      ? 'opacity-100 translate-y-0 visible'
                      : 'opacity-0 -translate-y-2 invisible pointer-events-none'
                    }`}
                >
                  <div className="grid grid-cols-2 gap-2 px-3">
                    <Link to="/Program1" className="group flex items-start gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                        <svg className="w-6 h-6 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-red-900">Edmirai One</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">One-on-One Live Classes</p>
                      </div>
                    </Link>
                    <Link to="/Program3" className="group flex items-start gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-red-900">Edmirai Learn</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">AI-Powered Personal Tutor</p>
                      </div>
                    </Link>
                    <Link to="/Program2" className="group flex items-start gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <svg className="w-6 h-6 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-red-900">Edmirai Connect</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">Instant Live Doubt Solving</p>
                      </div>
                    </Link>
                    <Link to="/Program4" className="group flex items-start gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <svg className="w-6 h-6 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" /></svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-red-900">Edmirai ExamEdge</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">JEE & NEET Preparation</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/#why"
                className="cursor-pointer text-gray-800 hover:text-red-900 transition font-semibold px-3 py-2 rounded-lg"
              >
                Why Edmirai
              </Link>

              <Link
                to="/teacher"
                className="text-gray-800 hover:text-red-900 transition font-semibold px-3 py-2 rounded-lg text-sm lg:text-base"
              >
                Become a Teacher
              </Link>

              <Link
                to="/contact"
                className="text-gray-800 hover:text-red-900 transition font-semibold px-3 py-2 rounded-lg text-sm lg:text-base"
              >
                Contact Us
              </Link>

              {/* ================= MORE DROPDOWN (Now at the End) ================= */}
              <div
                className="relative"
                onMouseEnter={() => {
                  if (moreHideTimeout) {
                    clearTimeout(moreHideTimeout);
                    setMoreHideTimeout(null);
                  }
                  setShowMore(true);
                }}
                onMouseLeave={() => {
                  const timeoutId = setTimeout(() => {
                    setShowMore(false);
                  }, 150);
                  setMoreHideTimeout(timeoutId);
                }}
              >
                <button
                  className="text-gray-800 hover:text-red-900 transition font-semibold px-3 py-2 rounded-lg text-sm lg:text-base flex items-center gap-1"
                >
                  More
                  <svg
                    className={`w-4 h-4 transition-transform ${showMore ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Note: Because this is the last item, 'right-0' might be safer than 'left-0' 
                   to prevent it from going off-screen on smaller desktop screens.
                   Changed left-0 to right-0 for this specific dropdown.
                */}
                <div
                  className={`absolute top-full right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl py-4 min-w-[600px] transition-all duration-200 z-50 ${showMore
                      ? 'opacity-100 translate-y-0 visible'
                      : 'opacity-0 -translate-y-2 invisible pointer-events-none'
                    }`}
                >
                  <div className="grid grid-cols-2 gap-2 px-3">
                    {/* 1. About Us */}
                    <Link to="/#about" className="group flex items-start gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                        <svg className="w-6 h-6 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-red-900">About Us</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">Our mission and vision</p>
                      </div>
                    </Link>

                    {/* 2. Blog */}
                    <Link to="/blog" className="group flex items-start gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                        <svg className="w-6 h-6 text-cyan-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-red-900">Blog</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">Latest news and insights</p>
                      </div>
                    </Link>

                    {/* 3. FAQs */}
                    <Link    to="/#faq" className="group flex items-start gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                        <svg className="w-6 h-6 text-pink-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-red-900">FAQs</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">Common questions</p>
                      </div>
                    </Link>

                    {/* 4. Testimonials */}
                    <Link to="/testimonials" className="group flex items-start gap-3 p-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all duration-300">
                      <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                        <svg className="w-6 h-6 text-indigo-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-red-900">Testimonials</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">Student success stories</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            {/* Login Button - Desktop */}
            <div className="hidden md:flex items-center">
              <button className="bg-gradient-to-r from-red-900 to-red-900 text-white px-4 lg:px-6  py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all text-sm lg:text-base">
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-red-900 hover:text-red-700 transition p-2"
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
        className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="text-2xl font-bold">
              <img src='/logo.png' className='w-24 h-full' alt="Logo"></img>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-red-900 hover:text-red-700 transition p-2"
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
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:bg-red-50 hover:text-red-900 transition font-semibold py-3 px-4 rounded-lg"
              >
                Home
              </Link>


              {/* Programs Dropdown (Mobile) */}
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowMobilePrograms(!showMobilePrograms);
                  }}
                  className="w-full text-left text-gray-800 hover:bg-red-50 hover:text-red-900 transition font-semibold py-3 px-4 rounded-lg flex items-center justify-between"
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
                  className={`overflow-hidden transition-all duration-300 ${showMobilePrograms ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="pl-2 space-y-2 mt-1">
                    <Link to="/Program1" onClick={() => setIsOpen(false)} className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition">
                      <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-sm">Edmirai One</h3>
                        <p className="text-xs text-gray-600">One-to-one live classes</p>
                      </div>
                    </Link>
                    <Link to="/Program3" onClick={() => setIsOpen(false)} className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-sm">Edmirai Learn</h3>
                        <p className="text-xs text-gray-600">Personalized AI tutor</p>
                      </div>
                    </Link>
                    <Link to="/Program2" onClick={() => setIsOpen(false)} className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-sm">Edmirai Connect</h3>
                        <p className="text-xs text-gray-600">Live doubt solving</p>
                      </div>
                    </Link>
                    <Link to="/Program4" onClick={() => setIsOpen(false)} className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" /></svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-sm">Edmirai ExamEdge</h3>
                        <p className="text-xs text-gray-600">JEE & NEET prep</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/#why"
                className="cursor-pointer text-gray-800 hover:text-red-900 transition font-semibold px-3 py-2 rounded-lg"
              >
                Why Edmirai
              </Link>

              <Link
                to="/teacher"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:bg-red-50 hover:text-red-900 transition font-semibold py-3 px-4 rounded-lg"
              >
                Become a Teacher
              </Link>
              <Link
                to="contact"
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:bg-red-50 hover:text-red-900 transition font-semibold py-3 px-4 rounded-lg"
              >
                Contact Us
              </Link>

              {/* ================= MORE DROPDOWN (Mobile) - NOW AT END ================= */}
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowMobileMore(!showMobileMore);
                  }}
                  className="w-full text-left text-gray-800 hover:bg-red-50 hover:text-red-900 transition font-semibold py-3 px-4 rounded-lg flex items-center justify-between"
                >
                  More
                  <svg
                    className={`w-4 h-4 transition-transform ${showMobileMore ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${showMobileMore ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="pl-2 space-y-2 mt-1">
                    {/* About Us Mobile */}
                    <Link to="/#about" onClick={() => setIsOpen(false)} className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition">
                      <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-sm">About Us</h3>
                        <p className="text-xs text-gray-600">Our mission</p>
                      </div>
                    </Link>
                    
                    {/* Blog Mobile */}
                    <Link to="/blog" onClick={() => setIsOpen(false)} className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition">
                      <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-cyan-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-sm">Blog</h3>
                        <p className="text-xs text-gray-600">Latest news</p>
                      </div>
                    </Link>

                    {/* FAQs Mobile */}
                    <Link    to="/#faq" onClick={() => setIsOpen(false)} className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition">
                      <div className="flex-shrink-0 w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-pink-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-sm">FAQs</h3>
                        <p className="text-xs text-gray-600">Common questions</p>
                      </div>
                    </Link>

                    {/* Testimonials Mobile */}
                    <Link to="/testimonials" onClick={() => setIsOpen(false)} className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition">
                      <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-indigo-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-sm">Testimonials</h3>
                        <p className="text-xs text-gray-600">Success stories</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-100">
            <button className="bg-gradient-to-r from-red-900 to-red-900 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all w-full">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}