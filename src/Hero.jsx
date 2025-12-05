import React from 'react';
import { ArrowRight, BookOpen, CheckCircle, Users, Award } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ExamPrepHero = () => {
  // Yahan maine 'path' add kiya hai har service ke liye.
  // Aap '/live-classes', '/ai-tutor' ko apne actual routes se replace kar lein.
  const services = [
    { 
      icon: <BookOpen className="w-6 h-6 text-red-900" />, 
      title: 'One-to-One Live Classes',
      path: '/Program1' // <-- Yahan apna URL dalein
    },
    { 
      icon: <CheckCircle className="w-6 h-6 text-red-900" />, 
      title: 'Personalised AI Tutor',
      path: '/Program3' // <-- Yahan apna URL dalein
    },
    { 
      icon: <Users className="w-6 h-6 text-red-900" />, 
      title: 'Live Doubt Solving',
      path: '/Program2' // <-- Yahan apna URL dalein
    },
    { 
      icon: <Award className="w-6 h-6 text-red-900" />, 
      title: 'JEE & NEET Exam Prep Support',
      path: '/Program4' // <-- Yahan apna URL dalein
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

              {/* ========== 4 SERVICE BOXES (NOW CLICKABLE WITH CUSTOM LINKS) ========== */}
              <div className="grid grid-cols-2 gap-4 mb-6 lg:mb-10">
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    to={service.path} // <-- Ab ye service object se path lega
                    className="block rounded-xl transition-all hover:shadow-xl hover:scale-105"
                  >
                    <div className="bg-[#ff00001a] border border-gray-200 rounded-xl p-4 flex flex-col items-start h-full cursor-pointer">
                      <div className="mb-2">{service.icon}</div>
                      <h3 className="font-bold text-gray-900 text-sm">{service.title}</h3>
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
                  href="https://wa.me/917794078833?text=Hi%2C%20I'd%20like%20to%20know%20more%20about%20your%20exam%20prep%20courses!"
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