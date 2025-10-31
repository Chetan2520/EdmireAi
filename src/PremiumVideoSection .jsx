import React, { useEffect, useRef, useState } from 'react';
import { Play, Sparkles, ArrowRight } from 'lucide-react';

const PremiumVideoSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (animatedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            startAnimations();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startAnimations = () => {
    if (textRef.current) {
      const children = textRef.current.querySelectorAll('.animate-item');
      children.forEach((child, i) => {
        child.style.opacity = '0';
        child.style.transform = 'translateY(30px)';
        setTimeout(() => {
          child.style.transition = 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)';
          child.style.opacity = '1';
          child.style.transform = 'translateY(0)';
        }, i * 150);
      });
    }

    if (videoRef.current) {
      videoRef.current.style.opacity = '0';
      videoRef.current.style.transform = 'scale(0.9)';
      setTimeout(() => {
        videoRef.current.style.transition = 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)';
        videoRef.current.style.opacity = '1';
        videoRef.current.style.transform = 'scale(1)';
      }, 400);
    }
  };

  return (
    <div ref={containerRef} className="relative bg-white py-10 lg:py-32 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30" 
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Soft gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Content - Takes 5 columns */}
          <div ref={textRef} className="lg:col-span-5">
      
            

            {/* Heading */}
            <h2 className="animate-item text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Learn.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">
                Transform.
              </span>
              <br />
              Excel.
            </h2>

            {/* Description */}
            <p className="animate-item text-sm lg:text-lg text-gray-600 mb-0 lg:mb-10 leading-relaxed">
              Where innovation meets education. Experience live classes reimagined for the modern learner.
            </p>

           

          
          </div>

          {/* Right Video - Takes 7 columns */}
          <div ref={videoRef} className="lg:col-span-7">
            <div 
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Main video frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-gray-200 shadow-2xl">
                <div className="aspect-video relative bg-gradient-to-br from-gray-100 to-gray-50">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop" 
                    alt="Learning experience"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/10 to-transparent"></div>
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                      <Play className="w-10 h-10 text-gray-900 ml-2" fill="currentColor" />
                    </div>
                  </div>

                  {/* Floating info card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white bg-opacity-95 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-2 h-2 bg-red-900 rounded-full animate-pulse"></div>
                          <span className="text-gray-900 text-sm font-medium">LIVE NOW</span>
                        </div>
                        <h3 className="text-gray-900 text-xl font-bold mb-1">Advanced Mathematics</h3>
                        <p className="text-gray-600 text-sm">Prof. Amit Kumar • 12,547 watching</p>
                      </div>
                      <div className="hidden md:block">
                        <div className="text-right">
                          <div className="text-gray-900 text-2xl font-bold">4.9</div>
                          <div className="text-gray-600 text-xs">Rating</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-200 rounded-2xl rotate-12 opacity-40 blur-xl group-hover:opacity-60 transition-opacity"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-100 rounded-2xl -rotate-12 opacity-40 blur-xl group-hover:opacity-60 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </div>
  );
};

export default PremiumVideoSection;