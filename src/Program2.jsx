import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  FaUser, FaBook, FaGraduationCap, FaSyncAlt, FaComments, FaPhoneAlt, 
  FaUserTie, FaClipboardCheck, FaRobot, FaCheckCircle, FaStar, 
  FaFire, FaArrowRight, FaWhatsapp, FaClock, FaInfinity, FaHeadset, 
  FaShieldAlt, FaBrain, FaChartLine,  
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

import { BsChevronDown } from 'react-icons/bs';
import FAQ from './FAQ';
import { useNavigate } from 'react-router-dom';

const Program2 = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const { scrollYProgress } = useScroll();
 
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const heroY = useTransform(smoothProgress, [0, 0.3], [0, 150]);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.98]);

  const { scrollYProgress: benefitsProgress } = useScroll({
    target: benefitsRef,
    offset: ["start end", "end start"]
  });
  const benefitsParallax = useTransform(benefitsProgress, [0, 1], [50, -50]);
   const navigate = useNavigate();
  const benefits = [
    { icon: FaClock, title: 'Instant Tutor Access (< 90 Seconds)', description: 'Get on a live session with a subject-expert tutor in less time than it takes to refresh a page.' },
    { icon: FaInfinity, title: 'Unlimited Doubts, Zero Hassle', description: 'Ask as many questions across Maths, Science & all K-12 subjects, until you’re fully clear.' },
    { icon: FaHeadset, title: 'Clarify Concepts Anytime', description: 'Available live when you need it: after school, during homework, right before your test.' },
    { icon: FaBrain, title: 'Expert Explanations + Follow-Up Support', description: 'Not just answers: tutors don’t stop until you understand. If you’re still unsure, follow-up help is provided.' },
    { icon: FaRobot, title: 'Integrated with Edmirai Ecosystem', description: 'Syncs with your personalised learning plan and trackers, our AI logs doubt history, suggests extra practice & helps you improve.' },
    { icon: FaShieldAlt, title: 'Transparent & Trustworthy', description: 'Fully online, safe, monitored sessions with live tracking and performance insights for students & parents.' }
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section - Edmirai Connect */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-red-50 via-white to-blue-50 py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ y: heroY }}>
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div style={{ y: heroY, scale: heroScale }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1 className="text-xl lg:text-5xl font-medium mb-6 leading-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                Edmirai Connect
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-600">Instant Live Doubt-Solving, Anytime, Anywhere</span>
              </motion.h1>
              <motion.p className="text-xl lg:text-xl text-gray-700 mb-10 leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                Stuck on a tricky question? With Edmirai Connect, you’re never left waiting. Connect to expert tutors in under 90 seconds from home, and get clear, step-by-step solutions, because learning shouldn’t pause.
              </motion.p>
              <div className="flex flex-wrap gap-4">
                <motion.button whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(127, 29, 29, 0.3)' }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-red-900 to-red-800 text-white py-2 px-4 lg:px-8 lg:py-4 rounded-xl font-bold text-lg hover:from-red-800 hover:to-red-700 transition-all shadow-lg flex items-center gap-3">
                  Book Free Trial Now <FaArrowRight />
                </motion.button>
                <motion.a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-green-600 text-white py-2 px-4 lg:px-8 lg:py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg flex items-center gap-3">
                  <FaWhatsapp className="text-2xl" /> Chat on WhatsApp
                </motion.a>
              </div>
            </motion.div>
            <motion.div className="relative" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <motion.div className="relative rounded-3xl overflow-hidden shadow-2xl" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800" alt="Student solving doubt" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-6 right-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-lg font-semibold">Live Doubt Session</span>
                  </div>
                  <p className="text-lg opacity-90">5000+ doubts solved today</p>
                </div>
              </motion.div>
              <motion.div className="absolute -top-6 -right-6 bg-white/90 p-5 rounded-2xl shadow-2xl border border-gray-100" style={{ y: useTransform(scrollYProgress, [0, 0.1], [0, -20]) }} animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                <div className="text-xl lg:text-3xl font-black text-red-900">90s</div>
                <div className="text-xs lg:text-sm text-gray-600">Avg. Connect Time</div>
              </motion.div>
              <motion.div className="absolute -bottom-6 -left-6 bg-white/90 p-5 rounded-2xl shadow-2xl border border-gray-100" style={{ y: useTransform(scrollYProgress, [0, 0.1], [0, 20]) }} animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}>
                <div className="text-xl lg:text-3xl font-black text-red-900">4.9 <FaStar className="inline text-yellow-500" /></div>
                <div className="text-xs lg:text-sm text-gray-600">Parent Rating</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section ref={benefitsRef} className="py-24 bg-gray-50 relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-5" style={{ y: benefitsParallax }}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </motion.div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-xl lg:text-5xl font-semibold mb-6">
              Key <span className="text-red-900">Highlights</span>
            </h2>
            <p className="text-xs lg:text-base text-gray-600 max-w-3xl mx-auto">
              Why thousands of students trust Edmirai Connect for instant doubt solving
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10, borderColor: '#7f1d1d' }}>
                  <motion.div className="text-6xl mb-6 text-red-900">
                    <Icon />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Is It For? + Outcomes */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Who Is It For? */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-10">
              <div>
                <motion.h2 className="text-xl lg:text-5xl font-semibold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  Who Is It <span className="text-red-900">For?</span>
                </motion.h2>
                <motion.p className="text-xs lg:text-base text-gray-600 leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  Perfect for students who get stuck and need instant clarity
                </motion.p>
              </div>
              <div className="space-y-6">
                {["Students in Grades 4–12", "All boards: CBSE, ICSE, State Boards, IB & IGCSE", "Learners doing school homework, board exams, Olympiads, or exam prep"].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="flex items-start gap-4">
                    <FaCheckCircle className="text-2xl text-red-900 mt-1 flex-shrink-0" />
                    <p className="text-base lg:text-lg text-gray-700 font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Outcome You’ll Get */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-10">
              <div>
                <motion.h2 className="text-xl lg:text-5xl font-semibold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  Outcome You’ll <span className="text-red-900">Get</span>
                </motion.h2>
                <motion.p className="text-xs lg:text-base text-gray-600 leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  Real results that keep you moving forward
                </motion.p>
              </div>
              <div className="space-y-6">
                {["Clear any concept, whenever it blocks you", "Faster homework & test prep", "Reduced frustration, greater confidence", "More consistent learning momentum"].map((outcome, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                    className="flex items-start gap-4 bg-red-50 p-6 rounded-2xl border border-red-100" whileHover={{ scale: 1.02, borderColor: '#7f1d1d' }}>
                    <FaChartLine className="text-3xl text-red-900 mt-1 flex-shrink-0" />
                    <p className="text-base lg:text-lg text-gray-800 font-semibold">{outcome}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 -left-20 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
      </section>

      {/* FAQ Component */}
      <FAQ />

      {/* Final CTA */}
      <section className="py-5 lg:py-10 bg-gradient-to-br from-red-900 via-red-800 to-gray-900 text-white relative overflow-hidden">
       {/* Subtle background elements for premium feel */}
       <div className="absolute inset-0 opacity-5">
         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-full mix-blend-soft-light blur-3xl animate-pulse"></div>
         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-red-400/20 to-pink-400/20 rounded-full mix-blend-soft-light blur-3xl animate-pulse delay-1000"></div>
       </div>
       
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <motion.div 
           className="max-w-4xl mx-auto text-center" 
           initial={{ opacity: 0, y: 30 }} 
           whileInView={{ opacity: 1, y: 0 }} 
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
         >
           {/* Premium badge with subtle animation */}
           <motion.div 
             className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-xs font-medium mb-6 gap-2 backdrop-blur-md border border-white/20" 
             animate={{ scale: [1, 1.05, 1] }} 
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
           >
             <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
             Limited Time: Free Trial Available
           </motion.div>
     
           {/* Hero headline with refined typography */}
           <motion.h2 
             className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             Ready to Solve Any Doubt <span className="bg-gradient-to-r from-red-300/90 to-orange-300/90 bg-clip-text text-transparent">Instantly?</span>
           </motion.h2>
     
           {/* Descriptive paragraph */}
           <motion.p 
             className="text-lg md:text-xl mb-10 text-gray-300 leading-relaxed max-w-3xl mx-auto"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.4 }}
           >
             Book a free trial now or tap Chat-on-WhatsApp and experience instant help with Edmirai Connect.
           </motion.p>
     
           {/* CTA Buttons with premium styling */}
           <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center mb-8">
           <motion.button
                 onClick={() => navigate("/contact")}
                 whileHover={{ scale: 1.02, y: -2, boxShadow: "0 20px 50px rgba(0,0,0,0.4)" }}
                 whileTap={{ scale: 0.98 }}
                 className="bg-white text-red-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl flex items-center gap-3 mx-auto sm:mx-0 min-w-[200px] border-0"
               >
                 Book Free Trial Now
                 <FaArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
               </motion.button>
             
             <motion.a 
               href="https://wa.me/919876543210" 
               target="_blank" 
               rel="noopener noreferrer" 
               whileHover={{ scale: 1.02, y: -2 }} 
               whileTap={{ scale: 0.98 }} 
               className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-xl flex items-center gap-3 mx-auto sm:mx-0 min-w-[200px] backdrop-blur-sm"
             >
               <FaWhatsapp className="text-xl" /> 
               Chat on WhatsApp
             </motion.a>
           </div>
         </motion.div>
       </div>
     </section>
     

    

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default Program2;