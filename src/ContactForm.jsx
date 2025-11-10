import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { UserIcon, PhoneIcon, ArrowPathIcon, CheckIcon, XMarkIcon, SparklesIcon } from '@heroicons/react/24/outline';

const UniqueContactForm = () => {
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

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    emailjs.sendForm(
      'YOUR_SERVICE_ID',     // Replace with your EmailJS Service ID
      'YOUR_TEMPLATE_ID',    // Replace with your Template ID (must include name, phone, board, grade)
      e.target,
      'YOUR_PUBLIC_KEY'      // Replace with your Public Key
    )
      .then((result) => {
        console.log('Email sent!', result.text);
        setStatus('Message sent! We’ll get back soon.');
        setFormData({ name: '', phone: '', board: '', grade: '' });
      }, (error) => {
        console.log('Error:', error.text);
        setStatus('Failed to send. Please try again.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-white flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Side: Hero Image */}
        <div className="relative">
          <img
            src="/contact.png"
            alt="Let's connect creatively"
            className="w-full h-96 lg:h-full object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side: Form */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-red-900/20 space-y-6">
          <div className="text-center border-b border-red-900/30 pb-4">
            <h2 className="text-3xl font-bold text-red-900">Get in Touch</h2>
            <p className="text-gray-600 mt-1">Fill in your details and let's start learning!</p>
          </div>

          <form onSubmit={sendEmail} className="space-y-5">
            {/* Name Field */}
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 border-2 border-red-900/20 rounded-xl focus:outline-none focus:border-red-900/50 focus:ring-2 focus:ring-red-900/20 transition-all duration-300 placeholder-gray-400"
                placeholder="Your full name"
              />
              <UserIcon className="absolute left-3 top-11 w-5 h-5 text-red-900" />
            </div>

            {/* Phone Number Field */}
            <div className="relative">
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-3 border-2 border-red-900/20 rounded-xl focus:outline-none focus:border-red-900/50 focus:ring-2 focus:ring-red-900/20 transition-all duration-300 placeholder-gray-400"
                placeholder="+91 98765 43210"
              />
              <PhoneIcon className="absolute left-3 top-11 w-5 h-5 text-red-900" />
            </div>

            {/* Select Board */}
            <div>
              <label htmlFor="board" className="block text-sm font-semibold text-gray-700 mb-2">
                Select Board
              </label>
              <select
                id="board"
                name="board"
                required
                value={formData.board}
                onChange={handleChange}
                className="w-full px-3 py-3 border-2 border-red-900/20 rounded-xl focus:outline-none focus:border-red-900/50 focus:ring-2 focus:ring-red-900/20 transition-all duration-300 text-gray-700"
              >
                <option value="">Choose Board</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="State Board">State Board</option>
                <option value="IB">IB</option>
                <option value="IGCSE">IGCSE</option>
              </select>
            </div>

            {/* Select Grade */}
            <div>
              <label htmlFor="grade" className="block text-sm font-semibold text-gray-700 mb-2">
                Select Grade
              </label>
              <select
                id="grade"
                name="grade"
                required
                value={formData.grade}
                onChange={handleChange}
                className="w-full px-3 py-3 border-2 border-red-900/20 rounded-xl focus:outline-none focus:border-red-900/50 focus:ring-2 focus:ring-red-900/20 transition-all duration-300 text-gray-700"
              >
                <option value="">Choose Grade</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={`Class ${i + 1}`}>
                    Class {i + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-900 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-900/30 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <ArrowPathIcon className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <span>Submit Inquiry</span>
                  <SparklesIcon className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Status Message */}
          {status && (
            <div className={`p-4 rounded-xl text-center font-medium flex items-center justify-center space-x-2 ${
              status.includes('sent') || status.includes('soon')
                ? 'bg-green-100/80 text-green-800 border border-green-300/50'
                : 'bg-red-100/80 text-red-800 border border-red-300/50'
            }`}>
              {status.includes('sent') || status.includes('soon') ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                <XMarkIcon className="w-5 h-5" />
              )}
              <span>{status}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UniqueContactForm;