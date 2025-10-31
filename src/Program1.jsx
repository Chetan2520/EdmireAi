import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Program1 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const syllabus = [
    { id: 0, title: 'Introduction to JavaScript', duration: '2 hours', content: 'Basics of JS, variables, functions.' },
    { id: 1, title: 'DOM Manipulation', duration: '3 hours', content: 'Interacting with HTML elements.' },
    { id: 2, title: 'Advanced Topics', duration: '4 hours', content: 'Async JS, APIs, and more.' },
  ];

  const testimonials = [
    { id: 0, name: 'Alice Johnson', text: 'This course transformed my coding skills!', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { id: 1, name: 'Bob Smith', text: 'Excellent instructor and practical examples.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
    { id: 2, name: 'Carol Davis', text: 'Highly recommend for beginners to advanced.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <motion.div
              className="w-8 h-8 bg-[#7F1D1D] rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <h1 className="text-xl font-semibold text-[#7F1D1D]">One to One Live Classes </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">₹4999</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#7F1D1D] text-white px-6 py-2 rounded-lg font-medium hover:bg-red-900 transition-colors"
            >
              Enroll Now
            </motion.button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Diverse students in modern classroom"
          className="w-full h-[600px] object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center text-white px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            variants={itemVariants}
          >
            Mastering JavaScript for Web Development
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-6 max-w-2xl"
            variants={itemVariants}
          >
            Unlock the power of JavaScript with hands-on projects and expert guidance.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center space-x-4 text-lg"
            variants={itemVariants}
          >
            <span>12 Weeks • Intermediate • Live Sessions</span>
          </motion.div>
        </motion.div>
        {/* Floating creative element */}
        <motion.div
          className="absolute top-20 right-10 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center"
          variants={floatingVariants}
          animate="animate"
        >
          <span className="text-white text-2xl">⭐</span>
        </motion.div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 className="text-4xl font-bold text-center text-[#7F1D1D] mb-12" variants={itemVariants}>
              Course Overview
            </motion.h2>
            <motion.div className="grid md:grid-cols-2 gap-12" variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Student studying"
                  className="w-full rounded-2xl shadow-lg mb-6"
                />
                <p className="text-lg leading-relaxed">
                  Dive deep into JavaScript fundamentals and advanced concepts. Build real-world applications with confidence. Perfect for aspiring web developers looking to elevate their skills.
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#7F1D1D] mb-2">What You'll Learn</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Core JavaScript syntax and ES6+</li>
                    <li>• DOM manipulation and event handling</li>
                    <li>• Asynchronous programming with Promises and async/await</li>
                    <li>• Building interactive web apps</li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-[#7F1D1D] mb-2">Benefits</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Lifetime access to materials</li>
                    <li>• Certificate upon completion</li>
                    <li>• 24/7 doubt clearing support</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Syllabus */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center text-[#7F1D1D] mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Syllabus
          </motion.h2>
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="space-y-4">
              {syllabus.map((module) => (
                <motion.div
                  key={module.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                  variants={itemVariants}
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => toggleSection(module.id)}
                    className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-[#7F1D1D]">{module.title}</h3>
                      <p className="text-gray-600">{module.duration}</p>
                    </div>
                    <span className={`transform transition-transform ${openSections[module.id] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <AnimatePresence>
                    {openSections[module.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-gray-700">
                          {module.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instructor Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center text-[#7F1D1D] mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Meet Your Instructor
          </motion.h2>
          <motion.div
            className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Instructor"
                className="w-full rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-[#7F1D1D]">John Doe</h3>
              <p className="text-xl text-gray-600">Senior JavaScript Developer at TechCorp</p>
              <p className="text-lg leading-relaxed">
                With over 10 years of experience in web development, John has mentored hundreds of students. His teaching style is engaging and practical, focusing on real-world applications.
              </p>
              <div className="flex space-x-4 text-sm text-gray-500">
                <span>• 500+ Students Taught</span>
                <span>• 4.9 Rating</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center text-[#7F1D1D] mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Students Say
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-md text-center"
                variants={itemVariants}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <h4 className="font-semibold text-[#7F1D1D]">{testimonial.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-20 bg-[#7F1D1D] text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of students who have mastered JavaScript with us.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <span className="block text-3xl font-bold mb-4">₹4999</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#7F1D1D] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Enroll Now & Save 20%
            </motion.button>
          </motion.div>
          {/* Floating element */}
          {/* <motion.img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Group discussion"
            className="absolute bottom-0 left-10 w-32 h-32 rounded-full object-cover opacity-20"
            variants={floatingVariants}
            animate="animate"
          /> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 EduPlatform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Program1;