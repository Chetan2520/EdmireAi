// src/components/Form.jsx
import React, { useState } from 'react';

const Form = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '', phone: '', board: '', grade: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi! Free Demo Booking:\nName: ${formData.name}\nPhone: ${formData.phone}\nBoard: ${formData.board}\nGrade: ${formData.grade}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <>
      {/* Glassy Backdrop */}
      <div
        className="fixed inset-0 bg-white/60 backdrop-blur-2xl z-40"
        onClick={onClose}
        style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
      />

      {/* Premium Glass Card */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-4 lg:p-8 border border-white/30"
          style={{
            boxShadow: '0 32px 64px -12px rgba(0,0,0,0.25), 0 0 64px rgba(147,51,234,0.15)',
            animation: 'floatIn 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards'
          }}
        >
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 w-9 lg:w-11 lg:h-11 h-9 bg-white/90 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300 border border-white/40"
          >
            <span className="text-gray-700 text-2xl font-light">×</span>
          </button>

          <div className="text-center mb-5 lg:mb-8">
            <h2 className="text-xl lg:text-3xl font-bold bg-gray-700 bg-clip-text text-transparent">
              Book Free Demo
            </h2>
            <p className="text-gray-600 text-sm lg:text-sm mt-0 lg:mt-2 font-medium">
              Personalized learning starts here
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="text" name="name" placeholder="Student Name" required value={formData.name} onChange={handleChange}
              className="w-full px-5 py-2 lg:py-4 bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 outline-none transition-all duration-300" />
            <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange}
              className="w-full px-5 py-2 lg:py-4 bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 outline-none transition-all duration-300" />
            <select name="board" required value={formData.board} onChange={handleChange}
              className="w-full px-5 py-2 lg:py-4 bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 outline-none transition-all duration-300">
              <option value="">Select Board</option>
              <option>CBSE</option><option>ICSE</option><option>State Board</option><option>IB</option><option>Others</option>
            </select>
            <select name="grade" required value={formData.grade} onChange={handleChange}
              className="w-full px-5 py-2 lg:py-4 bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl focus:border-pink-500 focus:ring-4 focus:ring-pink-200 outline-none transition-all duration-300">
              <option value="">Select Grade</option>
              {[1,2,3,4,5,6,7,8,9,10,11,12].map(g => <option key={g}>{g}th</option>)}
            </select>

            <div className="flex gap-3 mt-0 lg:mt-8">
              <button type="submit"
                className="flex-1 bg-red-800 text-white font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                Book Demo
              </button>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-emerald-700 to-green-600 text-white font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                WhatsApp
              </a>
            </div>
          </form>

          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-b-3xl blur-xl opacity-70"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatIn {
          from { opacity: 0; transform: translateY(60px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
};

export default Form;