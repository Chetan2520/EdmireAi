import React, { useState } from 'react';

const Form = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    board: '',
    grade: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('https://edmirai-backend.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(data.message || 'Message sent! We’ll get back soon.');
        setFormData({ name: '', phone: '', board: '', grade: '' });
        setTimeout(() => onClose(), 1500); // Close after showing success
      } else {
        setStatus(data.message || 'Failed to send. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const msg = `Hi! Free Demo Booking:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nBoard: ${formData.board || 'Not selected'}\nGrade: ${formData.grade || 'Not selected'}`;

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
          className="relative w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 lg:p-8 border border-white/30"
          style={{
            boxShadow: '0 32px 64px -12px rgba(0,0,0,0.25), 0 0 64px rgba(147,51,234,0.15)',
            animation: 'floatIn 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards'
          }}
        >
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 w-11 h-11 bg-white/90 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300 border border-white/40"
          >
            <span className="text-gray-700 text-3xl font-light leading-none">×</span>
          </button>

          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-red-900 to-pink-800 bg-clip-text text-transparent">
              Book Your Free Demo Now !!
            </h2>
            <p className="text-gray-600 text-sm lg:text-base mt-2 font-medium">
              Personalised learning starts here.
            </p>
          </div>

          <form onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Student Name *"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-200 outline-none transition-all duration-300"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-200 outline-none transition-all duration-300"
            />

            <select
              name="board"
              required
              value={formData.board}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200 outline-none transition-all duration-300"
            >
              <option value="">Select Board *</option>
              <option value="CBSE">CBSE</option>
              <option value="ICSE">ICSE</option>
              <option value="State Board">State Board</option>
              <option value="IB">IB</option>
              <option value="IGCSE">IGCSE</option>
            </select>

            {/* FIXED GRADE SELECT – Ab sahi value jayegi WhatsApp pe */}
            <select
              name="grade"
              required
              value={formData.grade}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl focus:border-pink-500 focus:ring-4 focus:ring-pink-200 outline-none transition-all duration-300"
            >
              <option value="">Select Grade *</option>
              {[4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                <option key={num} value={`Class ${num}`}>
                  Class {num}
                </option>
              ))}
            </select>

            {/* Status Message */}
            {status && (
              <div className={`p-4 rounded-2xl text-center font-semibold flex items-center justify-center gap-3 ${
                status.includes('sent') || status.includes('soon')
                  ? 'bg-green-100/90 text-green-800 border border-green-300'
                  : 'bg-red-100/90 text-red-800 border border-red-300'
              }`}>
                <span className="text-2xl">
                  {status.includes('sent') || status.includes('soon') ? '✓' : '✕'}
                </span>
                <span>{status}</span>
              </div>
            )}

            <div className="flex gap-4 mt-8">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-red-800 to-red-900 text-white font-bold py-4 rounded-2xl shadow-2xl hover:shadow-red-500/30 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <span className="animate-spin text-xl">⟳</span>
                    Sending...
                  </>
                ) : (
                  'Book Free Demo'
                )}
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="flex-1 bg-gradient-to-r from-emerald-600 to-green-700 text-white font-bold py-4 rounded-2xl shadow-2xl hover:shadow-green-500/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span className="text-2xl">WhatsApp</span>
                WhatsApp Now
              </button>
            </div>
          </form>

          <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-b-3xl blur-2xl opacity-60"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default Form;