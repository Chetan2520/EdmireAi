import React, { useEffect, useRef } from 'react';
import { ArrowRight, Star, CheckCircle, BookOpen, Users, Award, Play } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ExamPrepHero = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);
  const floatingRef = useRef([]); // ← JS válido

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.async = true;

    script.onload = () => {
      const { gsap } = window;

      gsap.from(headingRef.current, { opacity: 0, y: 60, duration: 1.2, ease: 'power3.out' });
      gsap.from(subheadingRef.current, { opacity: 0, y: 40, duration: 1, delay: 0.4, ease: 'power3.out' });
      gsap.from(ctaRef.current?.children, { opacity: 0, y: 30, duration: 0.8, delay: 0.7, stagger: 0.2, ease: 'power3.out' });
      gsap.from(imageRef.current, { opacity: 0, x: 100, duration: 1.3, delay: 0.6, ease: 'power3.out' });

      floatingRef.current.forEach((el, i) => {
        if (el) {
          gsap.to(el, {
            y: -25,
            duration: 2.5 + i * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: i * 0.4,
          });
        }
      });
    };

    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* ====================== HERO SECTION ====================== */}
      <div ref={heroRef} id='home' className="bg-white  relative overflow-hidden flex items-center pb-12">
        {/* Decorative floating blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              ref={(el) => (floatingRef.current[i] = el)}
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
              <h1
                ref={headingRef}
                className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-2 lg:mb-6"
              >
                Smarter Learning.<br />
                <span className="text-red-900 font-bold">Better Results.</span>
              </h1>

              <p
                ref={subheadingRef}
                className="text-sm md:text-base text-gray-700 mb-5 lg:mb-8 leading-relaxed max-w-xl"
              >
                <span className="font-semibold">
                  An AI-Powered, Premium Personalised Learning Platform
                </span>{' '}
                for Grades 4-12 students and JEE & NEET aspirants.
              </p>

              {/* ========== 4 SERVICE BOXES ========== */}
              <div className="grid grid-cols-2 gap-4 mb-6 lg:mb-10">
                {[
                  { icon: <BookOpen className="w-6 h-6 text-red-900" />, title: 'One-to-One Live Classes', desc: '' },
                  { icon: <CheckCircle className="w-6 h-6 text-red-900" />, title: 'Personalised Ai Tutor', desc: '' },
                  { icon: <Users className="w-6 h-6 text-red-900" />, title: 'Live Doubt Solving', desc: '' },
                  { icon: <Award className="w-6 h-6 text-red-900" />, title: 'JEE & NEET Exam Prep Support', desc: '' },
                ].map((service, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-start hover:shadow-lg transition-shadow"
                  >
                    <div className="mb-2">{service.icon}</div>
                    <h3 className="font-semibold text-gray-900 text-sm">{service.title}</h3>
                    <p className="text-xs text-gray-600 mt-1">{service.desc}</p>
                  </div>
                ))}
              </div>

              {/* ========== CTA BUTTONS ========== */}
              <div ref={ctaRef} className="flex flex-wrap gap-3 lg:gap-5">
                <Link
                  to="/contact"
                  className="group px-4 py-3 lg:px-10 lg:py-3 bg-red-900 text-white border-2 border-gray-300 rounded-2xl hover:border-red-900 transition-all font-semibold text-sm lg:text-base flex items-center space-x-3 shadow-2xl shadow-red-200 hover:shadow-red-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <span>Book a Free Demo</span>
                  <ArrowRight className="w-6 h-4 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://wa.me/918867270931?text=Hi%2C%20I'd%20like%20to%20know%20more%20about%20your%20exam%20prep%20courses!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 lg:px-10 lg:py-3 bg-green-600 text-white rounded-2xl transition-all font-semibold text-sm lg:text-base flex items-center space-x-3 shadow-lg transform hover:-translate-y-1"
                >
                  <BsWhatsapp className="w-6 h-4 lg:w-6 lg:h-6" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
              <p className='mt-1 ml-2'>Trusted by parents for concept clarity, exam confidence, and real results.</p>
            </div>

            {/* RIGHT COLUMN - IMAGE */}
            <div ref={imageRef} className="relative">
              <div className="rounded-3xl overflow-hidden ">
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

      {/* ====================== FLOATING STATS STRIP (OVERLAPS HERO) ====================== */}
      {/* <div className="relative z-20 -mt-8 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 ">
          
          <p>
            <span className='font-bold text-gray-800 '>Why Parents Choose Edmirai :</span> Curriculum-aligned K-12 support | Expert JEE/NEET faculty | Actionable progress insights | Safe learning from Home
          </p>
        </div>
      </div> */}
    </>
  );
};

export default ExamPrepHero;