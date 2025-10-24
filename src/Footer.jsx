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
      <div className="bg-gray-200 py-16 px-10">
        <div className="max-w-6xl mx-auto flex justify-center items-center gap-20 flex-wrap">
          <div className="text-center cursor-pointer transition-transform hover:-translate-y-3">
            <div className="w-36 h-36 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-5 overflow-hidden">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png" 
                alt="Strategy Games"
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-700">Strategy Games</h3>
          </div>

          <div className="text-center cursor-pointer transition-transform hover:-translate-y-3">
            <div className="w-36 h-36 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-5 overflow-hidden">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3875/3875172.png" 
                alt="Logic Puzzles"
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-700">Logic Puzzles</h3>
          </div>

          <div className="text-center cursor-pointer transition-transform hover:-translate-y-3">
            <div className="w-36 h-36 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-5 overflow-hidden">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2645/2645891.png" 
                alt="Mental Math"
                className="w-20 h-20 object-contain"
              />
            </div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-700">Mental Math</h3>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-wrap bg-white">
        {/* Left Section - Newsletter */}
        <div className="w-full lg:w-1/3 bg-gray-50 p-16">
          <div className="max-w-md">
            <h2 className="text-lg font-bold mb-8 uppercase tracking-wider">Join Our Newsletter</h2>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-4 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-500"
              />
              <button 
                onClick={handleSubscribe}
                className="px-10 py-4 bg-black text-white rounded text-sm font-semibold hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="w-full lg:w-2/3 p-16 flex flex-wrap gap-16">
          <div className="flex-1 min-w-[150px]">
            <h3 className="text-sm font-bold mb-5 uppercase tracking-wider">About CueMath</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">Our Journey</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div className="flex-1 min-w-[150px]">
            <h3 className="text-sm font-bold mb-5 uppercase tracking-wider">Our Programs</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">Math Tutors</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">English</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">Science</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">Coding</a></li>
            </ul>
          </div>

          <div className="flex-1 min-w-[150px]">
            <h3 className="text-sm font-bold mb-5 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">Blogs</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">Math Puzzles</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">MathFit 100 Puzzles</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Second Row of Links */}
      <div className="flex flex-wrap bg-white border-t border-gray-100">
        <div className="w-full lg:w-1/3 bg-gray-50 p-16"></div>
        
        <div className="w-full lg:w-2/3 p-16 flex flex-wrap gap-16">
          <div className="flex-1 min-w-[150px]">
            <h3 className="text-sm font-bold mb-5 uppercase tracking-wider">Events</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">Math Fests</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">Math Webinars</a></li>
            </ul>
          </div>

          <div className="flex-1 min-w-[150px]">
            <h3 className="text-sm font-bold mb-5 uppercase tracking-wider">Math Tutoring</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">Online Math Classes</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">Online Math Courses</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">Online Math Tutors</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">Math Tuition</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">Math Tutors India</a></li>
            </ul>
          </div>

          <div className="flex-1 min-w-[150px]">
            <h3 className="text-sm font-bold mb-5 uppercase tracking-wider">Partner With Us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">Become a volunteer/affiliate</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-orange-600 transition-colors">Become a Tutor</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Get Started Button */}
      <div className="text-center py-10 bg-white border-t border-gray-100">
        <button className="px-16 py-5 bg-yellow-400 text-black rounded font-bold text-base uppercase tracking-wider hover:bg-yellow-500 transition-colors">
          Get Started
        </button>
      </div>

      {/* Bottom Section - Office Info */}
      <div className="bg-gray-900 text-white py-12 px-10">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-around gap-10">
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">India Office</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Plot No. F-17/5, Golf Course Rd, Sector 42,<br />
              Gurugram, Haryana 122009
            </p>
          </div>

          <div className="flex-1 min-w-[250px]">
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">US Office</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              CueLearn Inc, 1013 Centre Road, Suite 403-B,<br />
              Wilmington, Delaware 19805
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}