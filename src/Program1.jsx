import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  FaUser, FaLaptopCode, FaGraduationCap, FaSyncAlt, FaComments, FaBook, 
  FaBullseye, FaRocket, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPhoneAlt, 
  FaUserTie, FaClipboardCheck, FaRobot, FaCheck, FaCheckCircle, FaStar, 
  FaFire, FaArrowRight, 
  FaWhatsapp
} from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import { FaQ } from 'react-icons/fa6';
import FAQ from './FAQs';
import { Link, useNavigate } from 'react-router-dom';
const Program1 = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  // const instructorRef = useRef(null);
  const { scrollYProgress } = useScroll();
   const navigate = useNavigate();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const heroY = useTransform(smoothProgress, [0, 0.3], [0, 150]);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.98]);

  // Parallax for benefits
  const { scrollYProgress: benefitsProgress } = useScroll({
    target: benefitsRef,
    offset: ["start end", "end start"]
  });
  const benefitsParallax = useTransform(benefitsProgress, [0, 1], [50, -50]);

  // Parallax for instructor
  const { scrollYProgress: instructorProgress } = useScroll({
    // target: instructorRef,
    offset: ["start end", "end start"]
  });
  const instructorParallax = useTransform(instructorProgress, [0, 1], [-50, 50]);

  const benefits = [
    { icon: FaUser, title: 'Personalised 1-to-1 Teaching', description: 'Every class is tailored to the student’s pace, strengths, weaknesses & learning preferences.' },
    { icon: FaBook, title: 'Covers All Boards', description: 'We support CBSE, ICSE, State Boards, IB & IGCSE, personalising content to match school curriculum.' },
    { icon: FaGraduationCap, title: 'Concept-Level Mastery', description: 'Step-by-step concept clarity with guided practice and doubt-solving.' },
    { icon: FaSyncAlt, title: 'Customised Sessions Based on Student Needs', description: 'Classes can be personalised for school syllabus support, competitive exams, Olympiads & more, based on student goals and requests.' },
    { icon: FaComments, title: 'Interactive Sessions + Real-Time Feedback', description: 'Instant corrections & constructive feedback to improve accuracy & understanding.' },
    { icon: FaPhoneAlt, title: 'Direct Communication With Teachers', description: 'Students & parents can communicate directly with their assigned teachers for guidance, clarification & planning.' },
    { icon: FaUserTie, title: 'Dedicated Personal Mentor', description: 'Each student is assigned a mentor who tracks performance, monitors class quality, coordinates with teachers & parents, and ensures measurable results.' },
    { icon: FaClipboardCheck, title: 'Regular Tests + Weekly Progress Reports', description: 'Personalised assessments & weekly reports provide insight into strengths, gaps & improvement areas.' },
    { icon: FaRobot, title: 'Smart Learning Plan', description: 'AI-powered learning paths help students learn efficiently & stay ahead.' }
  ];

  const faqs = [
    { q: 'What are the prerequisites for this course?', a: 'No prior programming experience required! Just basic computer knowledge and enthusiasm to learn. We start from absolute basics and gradually progress to advanced topics.' },
    { q: 'How are the 1-on-1 sessions conducted?', a: 'Sessions are conducted via Google Meet or Zoom. You can schedule sessions at your convenient time. Each session is 1 hour long and focuses on your specific learning needs.' },
    { q: 'What if I miss a session?', a: 'No worries! All sessions are recorded and shared with you. You can reschedule sessions as per your convenience. We offer flexible timings to accommodate your schedule.' },
    { q: 'Will I get placement assistance?', a: 'Yes! We provide resume building, interview preparation, and guidance on job applications. However, placement is not guaranteed as it depends on individual performance and market conditions.' },
    { q: 'What projects will I build?', a: 'You will build 10+ projects including Calculator, Todo App, Weather App, Movie Database, E-commerce Cart, and more. All projects are deployed live and added to your portfolio.' },
    { q: 'Is EMI option available?', a: 'Yes! We offer flexible EMI options. You can pay in 2-3 installments. Contact us for customized payment plans that suit your budget.' },
    { q: 'What is the refund policy?', a: 'We offer a 7-day money-back guarantee. If you are not satisfied within the first 7 days, we will provide a full refund, no questions asked.' },
    { q: 'How do I access course materials?', a: 'All materials are available on our learning platform. You get access immediately after enrollment. Materials include video recordings, code files, notes, and assignments.' }
  ];

  const testimonials = [
    { name: 'Priya Sharma', role: 'Frontend Developer at TCS', location: 'Mumbai', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400', rating: 5, text: 'Best investment I made in my career! The 1-on-1 attention helped me learn at my own pace. Got placed within 3 months of course completion.', highlights: ['Got placed in 3 months', 'Salary: ₹6 LPA'] },
    { name: 'Rahul Verma', role: 'Full Stack Developer at Infosys', location: 'Bangalore', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400', rating: 5, text: 'Exceptional teaching quality! Complex concepts were explained so simply. The projects helped me build a strong portfolio. Highly recommend!', highlights: ['Built 12 projects', 'Salary: ₹7 LPA'] },
    { name: 'Ananya Singh', role: 'Software Engineer at Wipro', location: 'Pune', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', rating: 5, text: 'From zero coding knowledge to working professional - this course transformed my life. The mentor was very patient and supportive throughout.', highlights: ['Started from scratch', 'Now earning ₹5.5 LPA'] },
    { name: 'Amit Patel', role: 'Web Developer at Freelance', location: 'Ahmedabad', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400', rating: 5, text: 'The practical approach and real projects made all the difference. Now I am confidently freelancing and earning well. Thank you!', highlights: ['Freelancing successfully', 'Earning ₹40k/month'] }
  ];

  const instructor = {
    name: 'Aditya Kumar',
    title: 'Senior JavaScript Developer',
    company: 'Google India',
    experience: '10+ Years',
    students: '1000+',
    rating: '4.9/5',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    bio: 'Passionate educator with over a decade of experience in web development. Specialized in making complex JavaScript concepts simple and practical. Mentored 1000+ students who are now working in top companies.',
    expertise: ['JavaScript & ES6+', 'React & Node.js', 'System Design', 'Interview Preparation'],
    achievements: ['Worked on Google Search features', 'Published 50+ technical articles', 'Speaker at international conferences', '1000+ successful students placed']
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
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
                Edmirai One
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-600">One-on-One Personalised Live Classes</span>
              </motion.h1>
              <motion.p className="text-xl lg:text-xl text-gray-700 mb-10 leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
               <b>Guaranteed Results. Guided by Experts.</b> <br/> <br/>
                Edmirai One offers the most personalised learning experience through dedicated 1-to-1 live classes conducted by expert educators.
                Powered by AI-driven insights.
              </motion.p>
              <div className="flex flex-wrap gap-4">
                            <Link to={"/contact"} whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(127, 29, 29, 0.3)' }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-red-900 to-red-800 text-white py-2 px-4 lg:px-8 lg:py-4 rounded-xl font-bold text-lg hover:from-red-800 hover:to-red-700 transition-all shadow-lg flex items-center gap-3">
                              Book Free Trial Now <FaArrowRight />
                            </Link>
                            <motion.a href="https://wa.me/917794078833" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-green-600 text-white py-2 px-4 lg:px-8 lg:py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg flex items-center gap-3">
                              <FaWhatsapp className="text-2xl" /> Chat on WhatsApp
                            </motion.a>
                          </div>
            </motion.div>
            <motion.div className="relative" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <motion.div className="relative rounded-3xl overflow-hidden shadow-2xl" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <img src="/edmire-one.jpg" alt="Coding workspace" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-6 right-6 text-white">
         
                </div>
              </motion.div>
             
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-24 bg-gray-50 relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-5" style={{ y: benefitsParallax }}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </motion.div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-xl lg:text-5xl font-semibold mb-6">
              What Makes<span className="text-red-900"> Edmirai One Special?</span>
            </h2>
            <p className="text-xs lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Unlike group classes, Edmirai One ensures 100% individual attention, helping students learn faster, understand deeply, and stay consistently on track.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10, borderColor: '#7f1d1d' }}>
                  <motion.div className="text-6xl mb-6 text-red-900">
                    <Icon />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                  <p className="text-[18px] text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Who Is It For? + Learning Outcomes */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Who Is It For? */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-10">
              <div>
                <motion.h2 className="text-xl lg:text-5xl font-semibold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  Who is it for?
                </motion.h2>
                <motion.p className="text-xs lg:text-xl text-gray-600 leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  Perfectly designed for students who want personalised guidance and guaranteed results.
                </motion.p>
              </div>
              <div className="space-y-6">
                {["Grades 4–12","All Subjects", "All boards, CBSE, ICSE, State Boards, IB & IGCSE", "Students preparing for school exams, boards, Olympiads & beyond"].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="flex items-start gap-4">
                    <FaCheckCircle className="text-2xl text-red-900 mt-1 flex-shrink-0" />
                    <p className="text-base lg:text-lg text-gray-700 font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Learning Outcomes */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-10">
              <div>
                <motion.h2 className="text-xl lg:text-5xl font-semibold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  Learning <span className="text-red-900">Outcomes!</span>
                </motion.h2>
                <motion.p className="text-xs lg:text-xl text-gray-600 leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  What your child will achieve with Edmirai One
                </motion.p>
              </div>
              <div className="space-y-6">
                {["Deep conceptual understanding", "Consistent academic progress", "Better grades + real-world confidence", "Guaranteed measurable improvement"].map((outcome, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                    className="flex items-start gap-4 bg-red-50 p-6 rounded-2xl border border-red-100" whileHover={{ scale: 1.02, borderColor: '#7f1d1d' }}>
                    <FaCheck className="text-3xl text-red-900 mt-1 flex-shrink-0" />
                    <p className="text-base lg:text-lg text-gray-800 font-semibold">{outcome}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 -left-20 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
      </section>

  
    

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
     Ready to Start Your 1:1 Personalised <span className="bg-gradient-to-r from-red-300/90 to-orange-300/90 bg-clip-text text-transparent">Learning Journey.</span>
      </motion.h2>

   

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
          href="https://wa.me/917794078833" 
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

export default Program1;