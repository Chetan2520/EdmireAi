import React, { useState } from 'react';

export default function CueMathFooter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="w-full bg-gray-50">
      {/* Top Section - Game Cards */}
      {/* <div className="bg-gray-200 py-3 md:py-4 lg:py-8 px-3 md:px-4 lg:px-6">
        <div className="max-w-6xl mx-auto flex justify-center items-center gap-3 md:gap-4 lg:gap-12 flex-wrap">
          <div className="text-center cursor-pointer transition-transform hover:-translate-y-3 flex-shrink-0">
            <div className="w-20 h-20 md:w-22 md:h-22 lg:w-28 lg:h-28 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-2 md:mb-3 lg:mb-4 overflow-hidden">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png" 
                alt="Strategy Games"
                className="w-10 h-10 md:w-11 md:h-11 lg:w-14 lg:h-14 object-contain"
              />
            </div>
            <h3 className="text-xs md:text-sm lg:text-xs font-semibold uppercase tracking-wider text-gray-700 px-1">Strategy Games</h3>
          </div>

          <div className="text-center cursor-pointer transition-transform hover:-translate-y-3 flex-shrink-0">
            <div className="w-20 h-20 md:w-22 md:h-22 lg:w-28 lg:h-28 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-2 md:mb-3 lg:mb-4 overflow-hidden">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3875/3875172.png" 
                alt="Logic Puzzles"
                className="w-10 h-10 md:w-11 md:h-11 lg:w-14 lg:h-14 object-contain"
              />
            </div>
            <h3 className="text-xs md:text-sm lg:text-xs font-semibold uppercase tracking-wider text-gray-700 px-1">Logic Puzzles</h3>
          </div>

          <div className="text-center cursor-pointer transition-transform hover:-translate-y-3 flex-shrink-0">
            <div className="w-20 h-20 md:w-22 md:h-22 lg:w-28 lg:h-28 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-2 md:mb-3 lg:mb-4 overflow-hidden">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2645/2645891.png" 
                alt="Mental Math"
                className="w-10 h-10 md:w-11 md:h-11 lg:w-14 lg:h-14 object-contain"
              />
            </div>
            <h3 className="text-xs md:text-sm lg:text-xs font-semibold uppercase tracking-wider text-gray-700 px-1">Mental Math</h3>
          </div>
        </div>
      </div> */}

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row bg-white">
        {/* Left Section - Newsletter */}
        <div className="w-full lg:w-1/3 bg-gray-50 p-3 md:p-4 lg:p-8">
          <div className="max-w-md mx-auto">
            <h2 className="text-base md:text-lg font-bold mb-3 md:mb-4 uppercase tracking-wider">Join Our Newsletter</h2>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-2 md:px-3 py-2 md:py-3 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-500"
              />
              <button 
                onClick={handleSubscribe}
                className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 bg-black text-white rounded text-sm font-semibold hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="w-full lg:w-2/3 p-3 md:p-4 lg:p-8 flex flex-col lg:flex-row lg:flex-wrap gap-3 md:gap-4 lg:gap-8">
          <div className="flex-1 min-w-0 lg:min-w-[140px]">
            <h3 className="text-xs md:text-sm font-bold mb-2 md:mb-3 uppercase tracking-wider">About CueMath</h3>
            <ul className="space-y-1.5 md:space-y-2">
              <li><a href="#" className="text-xs md:text-sm text-gray-700 hover:text-red-900 transition-colors block py-0.5">About Us</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-700 hover:text-red-900 transition-colors block py-0.5">Our Journey</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-700 hover:text-red-900 transition-colors block py-0.5">FAQs</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-700 hover:text-red-900 transition-colors block py-0.5">Pricing</a></li>
            </ul>
          </div>

          <div className="flex-1 min-w-0 lg:min-w-[140px]">
            <h3 className="text-xs md:text-sm font-bold mb-2 md:mb-3 uppercase tracking-wider">Our Programs</h3>
            <ul className="space-y-1.5 md:space-y-2">
              <li><a href="#" className="text-xs md:text-sm text-gray-700 hover:text-red-900 transition-colors block py-0.5">Math Tutors</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-700 hover:text-red-900 transition-colors block py-0.5">English</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-700 hover:text-red-900 transition-colors block py-0.5">Science</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-700 hover:text-red-900 transition-colors block py-0.5">Coding</a></li>
            </ul>
          </div>

          <div className="flex-1 min-w-0 lg:min-w-[140px]">
            <h3 className="text-xs md:text-sm font-bold mb-2 md:mb-3 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-1.5 md:space-y-2">
              <li><a href="#" className="text-xs md:text-sm text-gray-700 hover:text-red-900 transition-colors block py-0.5">Blogs</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-700 hover:text-red-900 transition-colors block py-0.5">Math Puzzles</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-700 hover:text-red-900 transition-colors block py-0.5">MathFit 100 Puzzles</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Second Row of Links */}
      <div className="flex flex-col lg:flex-row bg-white border-t border-gray-100">
        <div className="w-full lg:w-1/3 bg-gray-50 p-3 md:p-4 lg:p-8"></div>
        
        <div className="w-full lg:w-2/3 p-3 md:p-4 lg:p-8 flex flex-col lg:flex-row lg:flex-wrap gap-3 md:gap-4 lg:gap-8">
          <div className="flex-1 min-w-0 lg:min-w-[140px]">
            <h3 className="text-xs md:text-sm font-bold mb-2 md:mb-3 uppercase tracking-wider">Events</h3>
            <ul className="space-y-1.5 md:space-y-2">
              <li><a href="#" className="text-xs md:text-sm text-gray-700 hover:text-red-900 transition-colors block py-0.5">Math Fests</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-700 hover:text-red-900 transition-colors block py-0.5">Math Webinars</a></li>
            </ul>
          </div>

          <div className="flex-1 min-w-0 lg:min-w-[140px]">
            <h3 className="text-xs md:text-sm font-bold mb-2 md:mb-3 uppercase tracking-wider">Math Tutoring</h3>
            <ul className="space-y-1.5 md:space-y-2">
              <li><a href="#" className="text-xs md:text-sm text-gray-700 hover:text-red-900 transition-colors block py-0.5">Online Math Classes</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-700 hover:text-red-900 transition-colors block py-0.5">Online Math Courses</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-700 hover:text-red-900 transition-colors block py-0.5">Online Math Tutors</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-700 hover:text-red-900 transition-colors block py-0.5">Math Tuition</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-700 hover:text-red-900 transition-colors block py-0.5">Math Tutors India</a></li>
            </ul>
          </div>

          <div className="flex-1 min-w-0 lg:min-w-[140px]">
            <h3 className="text-xs md:text-sm font-bold mb-2 md:mb-3 uppercase tracking-wider">Partner With Us</h3>
            <ul className="space-y-1.5 md:space-y-2">
              <li><a href="#" className="text-xs md:text-sm text-gray-700 hover:text-red-900 transition-colors block py-0.5">Become a volunteer/affiliate</a></li>
              <li><a href="#" className="text-xs md:text-sm text-gray-700 hover:text-red-900 transition-colors block py-0.5">Become a Tutor</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Get Started Button */}
      <div className="text-center py-4 md:py-6 bg-white border-t border-gray-100">
        <button className="px-6 md:px-10 py-3 md:py-4 bg-yellow-400 text-black rounded font-bold text-sm md:text-base uppercase tracking-wider hover:bg-yellow-500 transition-colors">
          Get Started
        </button>
      </div>

      {/* Bottom Section - Office Info */}
      <div className="bg-gray-900 text-white py-4 md:py-6 px-3 md:px-4 lg:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-around gap-4 md:gap-6">
          <div className="flex-1 min-w-[250px] md:min-w-0">
            <h3 className="text-xs md:text-sm font-bold mb-1 md:mb-2 uppercase tracking-wider">India Office</h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              Plot No. F-17/5, Golf Course Rd, Sector 42,<br />
              Gurugram, Haryana 122009
            </p>
          </div>

          <div className="flex-1 min-w-[250px] md:min-w-0">
            <h3 className="text-xs md:text-sm font-bold mb-1 md:mb-2 uppercase tracking-wider">US Office</h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              CueLearn Inc, 1013 Centre Road, Suite 403-B,<br />
              Wilmington, Delaware 19805
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}