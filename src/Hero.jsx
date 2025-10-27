import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';
import { FaWhatsappSquare } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

const ExamPrepHero = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);
  const floatingRef = useRef([]);

  useEffect(() => {
    // Load GSAP from CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.async = true;
    
    script.onload = () => {
      const { gsap } = window;
      
      // Initial animations
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out'
      });

      gsap.from(subheadingRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out'
      });

      gsap.from(ctaRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.7,
        stagger: 0.2,
        ease: 'power3.out'
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.3,
        delay: 0.6,
        ease: 'power3.out'
      });

      // Floating animation for decorative elements
      floatingRef.current.forEach((el, i) => {
        if (el) {
          gsap.to(el, {
            y: -25,
            duration: 2.5 + i * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: i * 0.4
          });
        }
      });
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={heroRef} className=" bg-white relative overflow-hidden flex items-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          ref={el => floatingRef.current[0] = el}
          className="absolute top-20 left-10 w-32 h-32 bg-orange-100 rounded-full opacity-40 blur-3xl"
        />
        <div 
          ref={el => floatingRef.current[1] = el}
          className="absolute top-1/3 right-20 w-40 h-40 bg-orange-200 rounded-full opacity-30 blur-3xl"
        />
        <div 
          ref={el => floatingRef.current[2] = el}
          className="absolute bottom-32 left-1/4 w-36 h-36 bg-orange-100 rounded-full opacity-40 blur-3xl"
        />
        <div 
          ref={el => floatingRef.current[3] = el}
          className="absolute top-1/2 right-1/3 w-28 h-28 bg-orange-50 rounded-full opacity-50 blur-2xl"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 w-full">
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-orange-50 px-5 py-2.5 rounded-full mb-8">
              <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span className="text-orange-600 font-semibold text-sm">India's #1 Exam Prep Platform</span>
            </div>

            <h1 
              ref={headingRef}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-2 lg:mb-6"
            >
              Crack Your Dream Exam with
              {/* <span className="text-orange-500">  Edmire Ai</span> */}
     <span class="text-orange-500 font-bold"> Edmire Ai</span>
            </h1>

            <p 
              ref={subheadingRef}
              className="text-sm md:text-base text-gray-600 mb-5 lg:mb-8 leading-relaxed max-w-xl"
            >
              Join thousands of successful students. Get personalized learning paths, live classes from top educators, and comprehensive test series to excel in your exams.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-3 lg:gap-5">
             <button className="group px-4 py-3 lg:px-10 lg:py-5 bg-white text-gray-900 border-2 border-gray-300 rounded-2xl hover:border-orange-600 transition-all font-bold text-sm lg:text-lg flex items-center space-x-3 shadow-2xl shadow-orange-200 hover:shadow-orange-300 transform hover:-translate-y-1 hover:scale-105">
  <span>Book a Free Demo</span>
  <ArrowRight className="w-6 h-4 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
</button>

              <button className="px-4 py-3 lg:px-10 lg:py-5 bg-white text-gray-900 border-2 border-gray-300 rounded-2xl hover:border-green-600 hover:bg-orange-50 transition-all font-bold text-sm lg:text-lg flex items-center space-x-3 shadow-lg transform hover:-translate-y-1">
                <BsWhatsapp className="w-6 h-4 lg:w-6 lg:h-6 text-green-600" />
                <span>Chat on Whatsapp</span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-5 lg:mt-12 flex flex-wrap items-center gap-3 lg:gap-8 text-gray-600">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-3">
                  <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="User" className="w-7 h-7 lg:w-10 lg:h-10 rounded-full border-2 border-white object-cover" />
                  <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="User" className="w-7 h-7 lg:w-10 lg:h-10 rounded-full border-2 border-white object-cover" />
                  <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="User" className="w-7 h-7 lg:w-10 lg:h-10 rounded-full border-2 border-white object-cover" />
                  <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="User" className="w-7 h-7 lg:w-10 lg:h-10 rounded-full border-2 border-white object-cover" />
                  <div className="w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white flex items-center justify-center text-white text-[8px] lg:text-xs font-bold">
                    50K+
                  </div>
                </div>
                <span className="text-sm font-medium">Joined this month</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 lg:w-5 lg:h-10 text-yellow-500 " />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9/5 from 10,000+ reviews</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div ref={imageRef} className="relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden ">
                <img 
                  src="/Hero.png" 
                  alt="Students studying together"
                  className="w-full h-auto object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPrepHero;