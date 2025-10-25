import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin once
gsap.registerPlugin(ScrollTrigger);

const Programs = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // Updated data for 4 cards representing educational programs
const cardData = [
  { 
    id: 1, 
    title: 'JEE & NEET Classes', 
    description: 'Comprehensive preparation for competitive exams with expert faculty, personalized strategies, and interactive learning.' 
  },
  { 
    id: 2, 
    title: 'Edmirai Mentor', 
    description: 'Personalized mentorship to track progress, set goals, and stay motivated throughout your academic journey.' 
  },
  { 
    id: 3, 
    title: 'One-to-One Classes', 
    description: 'Dedicated one-on-one classes designed to strengthen concepts, clarify doubts, and build confidence.' 
  },
  { 
    id: 4, 
    title: 'One-on-One Doubt Solving', 
    description: 'Instant doubt resolution with expert guidance to ensure continuous learning and concept clarity.' 
  },
];


  // Effect for GSAP animations and ScrollTrigger setup
  useEffect(() => {
    // Wait for refs to be populated
    if (cardsRef.current.length === 0) return;

    // Determine layout based on screen size (matching Tailwind's lg breakpoint at 1024px)
    const isDesktop = window.innerWidth >= 1024;
    
    // Create GSAP context for easy cleanup
    let ctx = gsap.context(() => {
      // Set initial state for cards: positioned below and invisible
      const validCards = cardsRef.current.filter(Boolean);
      gsap.set(validCards, { yPercent: 100, opacity: 0 });

      // Create a timeline controlled by ScrollTrigger for scroll-based animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          // Pin the container during the animation to hold it in place while scrolling vertically
          pin: true,
          // Scrub ties the animation progress directly to scroll position for smooth scroll-linked effect
          scrub: 1,  // Standard scrub for smooth following
          // Start pinning/animating when top of container hits top of viewport
          start: 'top top',
          // Adjusted end distance for balanced animation speed (100% per card)
          end: `+=${cardData.length * 100}%`,
          // Invalidate on refresh for responsive changes
          invalidateOnRefresh: true,
        },
      });

      if (validCards.length > 0) {
        // Animate all cards with stagger for sequential reveal
        // Each card slides in from bottom, fades in with smooth easing
        tl.to(  // Use .to since initial state is set
          validCards,
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.5,  // Balanced duration
            ease: 'power3.out',  // Smooth easing: starts fast, ends slow for natural stop
            stagger: 0.3,  // Balanced stagger for sequential appearance
          },
          0  // All start from timeline position 0, staggered
        );
      }
    }, containerRef);  // Scope context to containerRef for targeted cleanup

    // Cleanup: Revert all GSAP animations and ScrollTriggers on unmount
    return () => ctx.revert();
  }, []);  // Empty deps: Run once on mount, but refs are checked inside

  return (
    <div className="relative w-full">
      {/* Main container: Pinned during animation, responsive height */}
      <section ref={containerRef} className="w-full min-h-screen relative bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col items-center justify-center py-8 px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">
          Our Programs
        </h2>
        
        {/* Responsive layout container: Grid for better responsiveness - 1 col mobile, 2 on tablet, 4 on desktop */}
        <div className="container mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 place-items-center">
            {cardData.map((card, index) => {
              const tiltDirection = index % 2 === 0 ? 'left' : 'right';
              const rotation = tiltDirection === 'left' ? -1 : 1;
              return (
                // Each card gets a ref for GSAP targeting
                <div
                  key={card.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  style={{ transform: `rotate(${rotation}deg)` }}
                  className="bg-white shadow-xl rounded-2xl p-4 sm:p-6 flex flex-col items-start justify-between w-full max-w-xs transform-gpu transition-all duration-300 border border-gray-100 hover:border-orange-200 hover:shadow-2xl relative z-10 origin-center text-left"
                >
                  {/* Top row: Icon and heading */}
                  <div className="flex items-center mb-3 w-full">
                    {card.id === 1 && (
                      <img src="/Jee.png" alt="JEE & NEET Icon" className="w-28 h-28 " />
                    )}
                    {card.id === 2 && (
                      <img src="/Mentor.png" alt="JEE & NEET Icon" className="w-28 h-28 " />
                    )}
                    {card.id === 3 && (
                      <img src="/onetoone.png" alt="JEE & NEET Icon" className="w-28 h-28 " />
                    )}
                    {card.id === 4 && (
                       <img src="/ai.png" alt="JEE & NEET Icon" className="w-28 h-28 " />
                    )}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">{card.title}</h3>
                  </div>
                  
                  {/* Paragraph */}
                  <p className="text-gray-600 leading-relaxed text-xs lg:text-sm mb-4 flex-grow">{card.description}</p>
                  
                  {/* Optional: Add a call-to-action button */}
                  <button className="mt-auto px-4 sm:px-6 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 text-sm sm:text-base self-start">
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;