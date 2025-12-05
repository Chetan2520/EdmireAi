import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

const WhatsAppIcon = () => {
  const phoneNumber = '917794078833'; // Replace with your actual WhatsApp number

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center justify-end gap-2 group">
      
      {/* Tooltip Text */}
      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 bg-gray-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap mr-2 hidden md:block">
        Chat on WhatsApp
      </span>

      {/* Main Anchor Tag */}
      <a 
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg border border-green-50 transition-transform duration-300 hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        {/* Soft Pulse Animation Ring (Green color for WhatsApp) */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-20 animate-ping duration-1000"></span>

        {/* Icon Container */}
       <div className="relative z-10 flex items-center justify-center w-full h-full rounded-full overflow-hidden">
           <img 
             src='/whatsapp.webp' 
             alt="Call Icon" 
             className="w-10 h-10 lg:w-20 lg:h-20   object-contain" // Size control aur aspect ratio maintain karne ke liye
           />
        </div>
      </a>
    </div>
  );
};

export default WhatsAppIcon;