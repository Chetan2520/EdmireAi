import React from 'react';

const CallIcon = () => {
  const phoneNumber = '917794078833'; 

  return (
    <div className="fixed bottom-24 right-5 z-50 flex items-center justify-end gap-2 group">
      
      {/* Tooltip Text (Hover karne par dikhega) */}
      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 bg-gray-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap mr-2 hidden md:block">
        Call Us
      </span>

      {/* Main Anchor Tag */}
      <a
        href={`tel:+${phoneNumber}`}
        className="relative flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg border border-blue-50 transition-transform duration-300 hover:scale-110 active:scale-95"
        aria-label="Call Us"
      >
        {/* Soft Pulse Animation Ring (Background me halka blink) */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-20 animate-ping duration-1000"></span>

        {/* Image Container & Styling */}
        {/* z-10 ensure karta hai ki image animation ke upar rahe */}
        <div className="relative z-10 flex items-center justify-center w-full h-full rounded-full overflow-hidden">
           <img 
             src='/call.webp' 
             alt="Call Icon" 
             className="w-7 h-7 object-contain" // Size control aur aspect ratio maintain karne ke liye
           />
        </div>
      </a>
    </div>
  );
};

export default CallIcon;