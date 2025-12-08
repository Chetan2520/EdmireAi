import React from 'react';
import { ArrowRight, BookOpen, CheckCircle, Users, Award } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ExamPrepHero = () => {
  // Updated services with new design structure
  const services = [
    { 
      icon: <BookOpen className="w-8 h-8 text-red-900" />, 
      title: 'Edmirai One',
      subtitle: 'One-to-One Live Classes',
      path: '/Program1'
    },
    { 
      icon: <CheckCircle className="w-8 h-8 text-red-900" />, 
      title: 'Edmirai Learn',
      subtitle: 'Personalised AI Tutor',
      path: '/Program3'
    },
    { 
      icon: <Users className="w-8 h-8 text-red-900" />, 
      title: 'Edmirai Connect',
      subtitle: 'Live Doubt Solving',
      path: '/Program2'
    },
    { 
      icon: <Award className="w-8 h-8 text-red-900" />, 
      title: 'Edmirai ExamEdge',
      subtitle: 'JEE & NEET  Prep ',
      path: '/Program4'
    },
  ];

  return (
    <>
      {/* ====================== HERO SECTION ====================== */}
      <div id="home" className="bg-white relative overflow-hidden flex items-center pb-12">
        {/* Decorative static blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-32 h-32 rounded-full opacity-40 blur-3xl ${
                i % 2 === 0 ? 'bg-red-900' : 'bg-red-200'
              }`}
              style={{
                top: i === 0 ? '5rem' : i === 1 ? '33%' : i === 2 ? 'auto' : '50%',
                bottom: i === 2 ? '8rem' : 'auto',
                left: i === 0 ? '2.5rem' : i === 2 ? '25%' : 'auto',
                right: i === 1 ? '5rem' : i === 3 ? '33%' : 'auto',
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 w-full">
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-16 items-center">
            {/* LEFT COLUMN */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-2 lg:mb-6">
                Smarter Learning.<br />
                <span className="text-red-900 font-bold">Better Results.</span>
              </h1>

              <p className="text-sm md:text-base text-gray-700 mb-5 lg:mb-8 leading-relaxed max-w-xl">
                <span className="font-semibold">
                  An AI-Powered, Personalised Learning Platform
                </span>{' '}
                for Grades 4-12 students and JEE & NEET aspirants.
              </p>

              {/* ========== 4 SERVICE BOXES (NEW DESIGN LIKE IMAGE) ========== */}
              <div className="grid grid-cols-2 gap-4 mb-6 lg:mb-10">
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    to={service.path}
                    className="block rounded-2xl transition-all"
                  >
                    <div className="bg-red-50 border border-red-100 rounded-2xl p-2 lg:p-4 flex flex-col lg:flex-row items-center gap-4 h-full cursor-pointer ">
                      {/* Icon Container */}
                      <div className="bg-red-100 rounded-xl p-3 flex-shrink-0">
                        {service.icon}
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex flex-col ">
                        <h3 className="font-bold text-gray-900 text-base leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 items-center text-sm mt-1">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* ========== CTA BUTTONS ========== */}
              <div className="flex flex-wrap gap-3 lg:gap-5">
                <Link
                  to="/contact"
                  className="group px-4 py-3 lg:px-10 lg:py-3 bg-red-900 text-white border-2 border-gray-300 rounded-2xl hover:border-red-900 transition-all font-semibold text-sm lg:text-base flex items-center space-x-3 shadow-2xl shadow-red-200 hover:shadow-red-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <span>Book a Free Demo</span>
                  <ArrowRight className="w-6 h-4 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://wa.me/917794078833?text=Hi%2C%20I'd%20like%20to%20know%20more%20about%20your%20products!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 lg:px-10 lg:py-3 bg-green-600 text-white rounded-2xl transition-all font-semibold text-sm lg:text-base flex items-center space-x-3 shadow-lg transform hover:-translate-y-1"
                >
                  <BsWhatsapp className="w-6 h-4 lg:w-6 lg:h-6" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <p className="mt-1 ml-2 text-gray-800">
                Trusted by parents for concept clarity, exam confidence, and real results.
              </p>
            </div>

            {/* RIGHT COLUMN - IMAGE */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src="/hero-d.png"
                  alt="Students studying together"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamPrepHero;