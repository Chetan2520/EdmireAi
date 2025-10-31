import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function VedantuComparison() {
  const features = [
    { name: '1:1 Personal Attention', vedantu: true, traditional: false, other: false, highlight: false },
    { name: 'Flexible Scheduling', vedantu: true, traditional: false, other: true, highlight: true },
    { name: 'Personalized Learning', vedantu: true, traditional: false, other: false, highlight: false },
    { name: 'Live Doubt Clearing', vedantu: true, traditional: true, other: false, highlight: true },
    { name: 'Progress Tracking', vedantu: true, traditional: false, other: true, highlight: false },
    { name: 'Parent Involvement', vedantu: true, traditional: false, other: false, highlight: true },
    { name: 'Interactive Tools', vedantu: true, traditional: false, other: true, highlight: false },
    { name: 'Affordable Pricing', vedantu: true, traditional: false, other: true, highlight: true },
  ];

  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
    // Kill existing ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Animate header when section enters view
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(headerRef.current,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
        );
      }
    });

    // Stagger animate rows when section enters view
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.fromTo(rowsRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
        );
      }
    });

    // Refresh ScrollTrigger on resize
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
            Why Vedantu 1:1 Stands Apart
          </h1>
          <p className="text-sm xs:text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-2">
            See how we compare to traditional coaching and other platforms
          </p>
        </div>

        <div ref={containerRef} className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div ref={headerRef} className="grid grid-cols-1 sm:grid-cols-4 bg-gradient-to-r from-slate-500 to-zinc-900">
            <div className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-white text-left">Features</div>
            <div className="hidden sm:table-cell px-4 sm:px-6 py-3 sm:py-4 font-semibold text-white text-center">Vedantu 1:1</div>
            <div className="hidden sm:table-cell px-4 sm:px-6 py-3 sm:py-4 font-semibold text-white text-center bg-slate-700">Traditional</div>
            <div className="hidden sm:table-cell px-4 sm:px-6 py-3 sm:py-4 font-semibold text-white text-center bg-slate-800">Other Online</div>
            {/* Mobile header */}
            <div className="sm:hidden col-span-1 grid grid-cols-3 gap-1 px-4 py-3">
              <div className="font-semibold text-white text-center text-xs col-span-1">Vedantu</div>
              <div className="font-semibold text-white text-center text-xs col-span-1 bg-slate-700">Trad.</div>
              <div className="font-semibold text-white text-center text-xs col-span-1 bg-slate-800">Other</div>
            </div>
          </div>

          {/* Rows */}
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => rowsRef.current[index] = el}
              className={`grid grid-cols-1 sm:grid-cols-4 border-b border-gray-200 last:border-b-0 ${
                feature.highlight ? 'bg-amber-50' : 'bg-white'
              }`}
            >
              <div className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base leading-relaxed">
                {feature.name}
              </div>
              {/* Desktop cells */}
              <div className="hidden sm:flex justify-center items-center px-4 sm:px-6 py-3 sm:py-4">
                {feature.vedantu ? (
                  <Check className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <X className="text-red-900 w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </div>
              <div className="hidden sm:flex justify-center items-center px-4 sm:px-6 py-3 sm:py-4 bg-slate-50">
                {feature.traditional ? (
                  <Check className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <X className="text-red-900 w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </div>
              <div className="hidden sm:flex justify-center items-center px-4 sm:px-6 py-3 sm:py-4 bg-slate-100">
                {feature.other ? (
                  <Check className="text-green-500 w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <X className="text-red-900 w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </div>
              {/* Mobile row */}
              <div className="sm:hidden col-span-1 grid grid-cols-3 gap-1 px-4 py-3">
                <div className="flex justify-center items-center col-span-1">
                  {feature.vedantu ? (
                    <Check className="text-green-500 w-5 h-5" />
                  ) : (
                    <X className="text-red-900 w-5 h-5" />
                  )}
                </div>
                <div className="flex justify-center items-center col-span-1 bg-slate-50">
                  {feature.traditional ? (
                    <Check className="text-green-500 w-5 h-5" />
                  ) : (
                    <X className="text-red-900 w-5 h-5" />
                  )}
                </div>
                <div className="flex justify-center items-center col-span-1 bg-slate-100">
                  {feature.other ? (
                    <Check className="text-green-500 w-5 h-5" />
                  ) : (
                    <X className="text-red-900 w-5 h-5" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-8 text-right">
          <button className="bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
            Find your personal tutor
          </button>
        </div> */}
      </div>
    </div>
  );
}