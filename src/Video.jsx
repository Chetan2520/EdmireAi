import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Users, User } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  const videoUrl = "";
  const videoContainerRef = useRef(null);
  const leftSectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const cardsRef = useRef([]);
  const videoSectionRef = useRef(null);
  const programsSectionRef = useRef(null);

  useEffect(() => {
    // Kill existing ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Animate decorative elements when video section enters view
    gsap.utils.toArray('.decorative-blob').forEach((blob, i) => {
      ScrollTrigger.create({
        trigger: videoSectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(blob, 
            { scale: 0, opacity: 0 }, 
            { scale: 1, opacity: 1, duration: 2, ease: 'power2.out' }
          );
        }
      });
    });

    // Animate left and right sections from sides when video section enters view
    ScrollTrigger.create({
      trigger: videoSectionRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(leftSectionRef.current, 
          { x: -100, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 1.5, ease: 'power3.out' }
        );
        gsap.fromTo(rightSectionRef.current, 
          { x: 100, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.2 }
        );
      }
    });

    // Animate video container scale in when video section enters view
    ScrollTrigger.create({
      trigger: videoSectionRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(videoContainerRef.current, 
          { scale: 0.8, opacity: 0, y: 50 }, 
          { scale: 1, opacity: 1, y: 0, duration: 1, ease: 'back.out(1.7)' }
        );
      }
    });

    // Stagger animate cards when programs section enters view
    ScrollTrigger.create({
      trigger: programsSectionRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(cardsRef.current, 
          { y: 50, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
        );
      }
    });

    // Refresh ScrollTrigger on resize
    ScrollTrigger.refresh();
  }, []);

  const handleVideoClick = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Animate play to video transition
      gsap.to(videoContainerRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(videoContainerRef.current, { scale: 1, duration: 0.3 });
        }
      });
    }
  };

  const handleSectionHover = (section, isEnter) => {
    setHoveredSection(isEnter ? section : null);
    const tl = gsap.timeline();
    if (isEnter) {
      tl.to(section === 'one-to-one' ? leftSectionRef.current : rightSectionRef.current, {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      tl.to(section === 'one-to-one' ? leftSectionRef.current : rightSectionRef.current, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Video Section */}
      <div ref={videoSectionRef} className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl w-full mx-auto relative">
          {/* One-to-one Section - Adjusted for mobile */}
          <div 
            ref={leftSectionRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-left z-10 transition-all duration-300 xs:left-2 sm:left-4 lg:left-0 w-full sm:w-auto"
            onMouseEnter={() => handleSectionHover('one-to-one', true)}
            onMouseLeave={() => handleSectionHover('one-to-one', false)}
          >
            <div className="flex items-center gap-1 xs:gap-2 sm:gap-4 transition-all duration-300 ${hoveredSection === 'one-to-one' ? 'scale-110' : ''} w-full justify-start sm:justify-end">
              <div className="text-right flex-shrink-0 min-w-0 overflow-hidden">
                <h2 className="text-lg xs:text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-400 mb-0.5 sm:mb-1 lg:mb-2 leading-tight truncate sm:truncate-none">
                  One-to-one
                </h2>
                <h3 className="text-lg xs:text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-400 leading-tight truncate sm:truncate-none">
                  Courses
                </h3>
              </div>
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gray-700/50 rounded-full flex items-center justify-center backdrop-blur-sm flex-shrink-0 ml-1 sm:ml-0">
                <User className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Central Video Button - Responsive sizing */}
          <div className="flex justify-center items-center py-4 sm:py-8 md:py-12 relative z-20">
            <div 
              ref={videoContainerRef}
              className="relative group cursor-pointer"
              onClick={handleVideoClick}
            >
              {!isPlaying ? (
                <div className="w-40 h-40 xs:w-48 sm:w-56 md:w-64 lg:w-80 h-40 xs:h-48 sm:h-56 md:h-64 lg:h-80 rounded-full bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center relative overflow-hidden shadow-2xl shadow-purple-500/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-purple-500/70">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="w-12 h-12 xs:w-14 sm:w-16 md:w-20 lg:w-24 h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 rounded-full bg-white flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 xs:w-7 sm:w-8 md:w-10 lg:w-12 h-6 xs:h-7 sm:h-8 md:h-10 lg:h-12 text-purple-900 ml-0.5" fill="currentColor" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 border-purple-400/30 animate-pulse"></div>
                </div>
              ) : (
                <div className="w-40 h-40 xs:w-48 sm:w-56 md:w-64 lg:w-80 h-40 xs:h-48 sm:h-56 md:h-64 lg:h-80 rounded-lg overflow-hidden shadow-2xl shadow-purple-500/50 aspect-square">
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

          {/* Cohort-based Section - Adjusted for mobile */}
          <div 
            ref={rightSectionRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-right z-10 transition-all duration-300 xs:right-2 sm:right-4 lg:right-0 w-full sm:w-auto"
            onMouseEnter={() => handleSectionHover('cohort', true)}
            onMouseLeave={() => handleSectionHover('cohort', false)}
          >
            <div className={`flex items-center gap-1 xs:gap-2 sm:gap-4 transition-all duration-300 ${hoveredSection === 'cohort' ? 'scale-110' : ''} w-full justify-end sm:justify-start`}>
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gray-700/50 rounded-full flex items-center justify-center backdrop-blur-sm flex-shrink-0 mr-1 sm:mr-0">
                <Users className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gray-400" />
              </div>
              <div className="text-left flex-shrink-0 min-w-0 overflow-hidden">
                <h2 className="text-lg xs:text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-400 mb-0.5 sm:mb-1 lg:mb-2 leading-tight truncate sm:truncate-none">
                  Cohort-based
                </h2>
                <h3 className="text-lg xs:text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-400 leading-tight truncate sm:truncate-none">
                  Courses
                </h3>
              </div>
            </div>
          </div>

          {/* Decorative Elements - Responsive sizing */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-purple-500/10 rounded-full blur-3xl decorative-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl decorative-blob"></div>
          </div>
        </div>
      </div>

      {/* Explore Programs Section */}
      <div ref={programsSectionRef} className="bg-gradient-to-b from-amber-50 to-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-4 leading-tight">
              Explore Edmirai Programs
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-2">
              Personalised, AI-powered learning for every stage of your academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {/* Edmirai Learn */}
            <div 
              ref={(el) => cardsRef.current[0] = el}
              className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-3 border-white rounded-full relative">
                    <div className="absolute top-1 left-1 w-0.5 sm:w-1 md:w-1.5 h-0.5 sm:h-1 md:h-1.5 bg-white rounded-full"></div>
                    <div className="absolute top-1 right-1 w-0.5 sm:w-1 md:w-1.5 h-0.5 sm:h-1 md:h-1.5 bg-white rounded-full"></div>
                    <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-2 sm:w-3 md:w-4 h-1 sm:h-1.5 md:h-2 border-b-2 border-white rounded-b-full"></div>
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1 md:mb-2 leading-tight truncate">Edmirai Learn</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">Personalised AI tutor for school studies</p>
                </div>
              </div>
              <button className="hover:bg-orange-600 text-orange-600 hover:text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-lg font-semibold transition-colors hover:shadow-md text-xs sm:text-sm md:text-base w-full sm:w-auto">
                Know More →
              </button>
            </div>

            {/* One-to-One Classes */}
            <div 
              ref={(el) => cardsRef.current[1] = el}
              className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1 md:mb-2 leading-tight truncate">One-to-One Classes</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">Live Individual classes for grades 6-12</p>
                </div>
              </div>
              <button className="hover:bg-orange-600 text-orange-600 hover:text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-lg font-semibold transition-colors hover:shadow-md text-xs sm:text-sm md:text-base w-full sm:w-auto">
                Book a Free Demo
              </button>
            </div>

            {/* JEE */}
            <div 
              ref={(el) => cardsRef.current[2] = el}
              className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="3" />
                    <path d="M12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1 md:mb-2 leading-tight truncate">JEE</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">Targeted preparation for the JEE exams</p>
                </div>
              </div>
              <button className="hover:bg-orange-600 text-orange-600 hover:text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-lg font-semibold transition-colors hover:shadow-md text-xs sm:text-sm md:text-base w-full sm:w-auto">
                Know More →
              </button>
            </div>

            {/* Edmirai Connect */}
            <div 
              ref={(el) => cardsRef.current[3] = el}
              className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="4" y="4" width="16" height="12" rx="2" />
                    <path d="M4 8h16M8 16h8" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1 md:mb-2 leading-tight truncate">Edmirai Connect</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">Instant live one-on-one doubt solving</p>
                </div>
              </div>
              <button className="hover:bg-orange-600 text-orange-600 hover:text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-lg font-semibold transition-colors hover:shadow-md text-xs sm:text-sm md:text-base w-full sm:w-auto">
                Know More →
              </button>
            </div>

            {/* Edmirai Mentor - Left */}
            <div 
              ref={(el) => cardsRef.current[4] = el}
              className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="9" cy="9" r="7" />
                    <path d="M12 12l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1 md:mb-2 leading-tight truncate">Edmirai Mentor</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">Personalised guidance and mentoring</p>
                </div>
              </div>
            </div>

            {/* Edmirai Mentor - Right */}
            <div 
              ref={(el) => cardsRef.current[5] = el}
              className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1 md:mb-2 leading-tight truncate">Edmirai Mentor</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">Personalised guidance and mentorship</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-6 sm:mt-8 md:mt-12 text-xs sm:text-sm md:text-base text-gray-600">
            © Edmirai. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}