import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { FaUser, FaLaptopCode, FaGraduationCap, FaSyncAlt, FaComments, FaBook, FaBullseye, FaRocket, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';

const Program1 = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const syllabusRef = useRef(null);
  const instructorRef = useRef(null);
  const { scrollYProgress } = useScroll();
 
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

  // Parallax for syllabus
  const { scrollYProgress: syllabusProgress } = useScroll({
    target: syllabusRef,
    offset: ["start end", "end start"]
  });
  const syllabusParallax = useTransform(syllabusProgress, [0, 1], [0, 100]);

  // Parallax for instructor
  const { scrollYProgress: instructorProgress } = useScroll({
    target: instructorRef,
    offset: ["start end", "end start"]
  });
  const instructorParallax = useTransform(instructorProgress, [0, 1], [-50, 50]);

  const courseDetails = {
    duration: '12 Weeks',
    sessions: '48 Live Sessions',
    level: 'Beginner to Advanced',
    language: 'Hindi & English',
    timing: 'Flexible Schedule',
    support: '24/7 Doubt Support',
    certificate: 'Industry Recognized',
    projects: '10+ Real Projects'
  };
  const modules = [
    {
      id: 1,
      week: 'Week 1-3',
      title: 'JavaScript Fundamentals & ES6+',
      duration: '12 Hours',
      sessions: 12,
      topics: [
        'Variables, Data Types & Operators',
        'Control Flow: if-else, switch, loops',
        'Functions: Regular, Arrow, IIFE',
        'Objects & Arrays in depth',
        'ES6: let, const, template literals',
        'Destructuring & Spread operator',
        'Default parameters & Rest operator',
        'Array methods: map, filter, reduce',
      ],
      projects: ['Calculator App', 'Todo List', 'Quiz Application'],
      learningOutcomes: [
        'Write clean, modern JavaScript code',
        'Understand scope and closures',
        'Master ES6+ features',
        'Work with complex data structures'
      ]
    },
    {
      id: 2,
      week: 'Week 4-6',
      title: 'DOM Manipulation & Browser APIs',
      duration: '12 Hours',
      sessions: 12,
      topics: [
        'DOM Selection: querySelector, getElementById',
        'Creating & Modifying Elements',
        'Event Handling & Event Delegation',
        'Form Validation & Handling',
        'Local Storage & Session Storage',
        'Cookies & Browser Storage',
        'Window & Document Object',
        'Timers: setTimeout, setInterval',
      ],
      projects: ['Dynamic Form Builder', 'Image Gallery', 'Notes Application'],
      learningOutcomes: [
        'Build interactive web pages',
        'Handle user events efficiently',
        'Persist data in browser',
        'Create dynamic UIs'
      ]
    },
    {
      id: 3,
      week: 'Week 7-9',
      title: 'Asynchronous JavaScript & APIs',
      duration: '12 Hours',
      sessions: 12,
      topics: [
        'Callback Functions & Callback Hell',
        'Promises: Creation & Chaining',
        'Async/Await Syntax',
        'Fetch API & HTTP Methods',
        'REST API Integration',
        'Error Handling: try-catch',
        'JSON Data Manipulation',
        'AJAX & XMLHttpRequest',
      ],
      projects: ['Weather App', 'Movie Database', 'Currency Converter'],
      learningOutcomes: [
        'Handle asynchronous operations',
        'Integrate third-party APIs',
        'Manage API errors properly',
        'Build data-driven applications'
      ]
    },
    {
      id: 4,
      week: 'Week 10-12',
      title: 'Advanced Concepts & Modern Tools',
      duration: '12 Hours',
      sessions: 12,
      topics: [
        'Object-Oriented Programming in JS',
        'Classes & Prototypes',
        'Modules: Import/Export',
        'NPM & Package Management',
        'Webpack Basics',
        'Git & GitHub Workflow',
        'Code Quality: ESLint, Prettier',
        'Testing Fundamentals',
      ],
      projects: ['E-commerce Cart', 'Social Media Dashboard', 'Portfolio Website'],
      learningOutcomes: [
        'Write scalable code architecture',
        'Use modern development tools',
        'Implement best practices',
        'Deploy production-ready apps'
      ]
    },
  ];
  const benefits = [
    {
      icon: FaUser,
      title: 'Personalized 1-on-1 Sessions',
      description: 'Get individual attention with customized learning pace. Each session is tailored to your understanding level and career goals.'
    },
    {
      icon: FaLaptopCode,
      title: 'Hands-on Project Building',
      description: 'Build 10+ real-world projects from scratch. Deploy live applications and create an impressive portfolio.'
    },
    {
      icon: FaGraduationCap,
      title: 'Industry-Recognized Certificate',
      description: 'Receive a verified certificate upon completion. Boost your resume and LinkedIn profile with recognized credentials.'
    },
    {
      icon: FaSyncAlt,
      title: 'Lifetime Access & Updates',
      description: 'Get lifetime access to all course materials, recordings, and future updates. Learn at your own pace forever.'
    },
    {
      icon: FaComments,
      title: '24/7 Doubt Clearing Support',
      description: 'Stuck on a problem? Get instant help through WhatsApp, email, or scheduled doubt sessions anytime.'
    },
    {
      icon: FaBook,
      title: 'Comprehensive Learning Material',
      description: 'Access detailed notes, code snippets, cheat sheets, and reference materials for every topic covered.'
    },
    {
      icon: FaBullseye,
      title: 'Interview Preparation',
      description: 'Practice with 100+ interview questions, coding challenges, and mock interview sessions to ace your interviews.'
    },
    {
      icon: FaRocket,
      title: 'Job Assistance',
      description: 'Get help with resume building, portfolio optimization, and guidance on applying to companies.'
    }
  ];
  const faqs = [
    {
      q: 'What are the prerequisites for this course?',
      a: 'No prior programming experience required! Just basic computer knowledge and enthusiasm to learn. We start from absolute basics and gradually progress to advanced topics.'
    },
    {
      q: 'How are the 1-on-1 sessions conducted?',
      a: 'Sessions are conducted via Google Meet or Zoom. You can schedule sessions at your convenient time. Each session is 1 hour long and focuses on your specific learning needs.'
    },
    {
      q: 'What if I miss a session?',
      a: 'No worries! All sessions are recorded and shared with you. You can reschedule sessions as per your convenience. We offer flexible timings to accommodate your schedule.'
    },
    {
      q: 'Will I get placement assistance?',
      a: 'Yes! We provide resume building, interview preparation, and guidance on job applications. However, placement is not guaranteed as it depends on individual performance and market conditions.'
    },
    {
      q: 'What projects will I build?',
      a: 'You will build 10+ projects including Calculator, Todo App, Weather App, Movie Database, E-commerce Cart, and more. All projects are deployed live and added to your portfolio.'
    },
    {
      q: 'Is EMI option available?',
      a: 'Yes! We offer flexible EMI options. You can pay in 2-3 installments. Contact us for customized payment plans that suit your budget.'
    },
    {
      q: 'What is the refund policy?',
      a: 'We offer a 7-day money-back guarantee. If you are not satisfied within the first 7 days, we will provide a full refund, no questions asked.'
    },
    {
      q: 'How do I access course materials?',
      a: 'All materials are available on our learning platform. You get access immediately after enrollment. Materials include video recordings, code files, notes, and assignments.'
    }
  ];
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Frontend Developer at TCS',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      rating: 5,
      text: 'Best investment I made in my career! The 1-on-1 attention helped me learn at my own pace. Got placed within 3 months of course completion.',
      highlights: ['Got placed in 3 months', 'Salary: ₹6 LPA']
    },
    {
      name: 'Rahul Verma',
      role: 'Full Stack Developer at Infosys',
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      rating: 5,
      text: 'Exceptional teaching quality! Complex concepts were explained so simply. The projects helped me build a strong portfolio. Highly recommend!',
      highlights: ['Built 12 projects', 'Salary: ₹7 LPA']
    },
    {
      name: 'Ananya Singh',
      role: 'Software Engineer at Wipro',
      location: 'Pune',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      rating: 5,
      text: 'From zero coding knowledge to working professional - this course transformed my life. The mentor was very patient and supportive throughout.',
      highlights: ['Started from scratch', 'Now earning ₹5.5 LPA']
    },
    {
      name: 'Amit Patel',
      role: 'Web Developer at Freelance',
      location: 'Ahmedabad',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      rating: 5,
      text: 'The practical approach and real projects made all the difference. Now I am confidently freelancing and earning well. Thank you!',
      highlights: ['Freelancing successfully', 'Earning ₹40k/month']
    }
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
    achievements: [
      'Worked on Google Search features',
      'Published 50+ technical articles',
      'Speaker at international conferences',
      '1000+ successful students placed'
    ]
  };
  return (
    <div className="bg-white text-gray-900">
      {/* Sticky Header */}
      <motion.header
        className="sticky top-0 z-50 bg-white shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-10 h-10 bg-red-900 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                JS
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-red-900">JavaScript Masterclass</h1>
                <p className="text-xs text-gray-600">1-on-1 Live Training</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-4 text-sm">
                <span className="text-gray-600">Duration: 12 Weeks</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-600">48 Sessions</span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-red-900">₹4,999</div>
                <div className="text-xs text-gray-500 line-through">₹9,999</div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
              >
                Enroll Now
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>
      {/* Enhanced Hero Section with Parallax Background */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-red-50 via-white to-blue-50 py-32 overflow-hidden">
        {/* Parallax Background Elements */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{ y: heroY }}
        >
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              style={{ y: heroY, scale: heroScale }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
           
             
              <motion.h1 
                className="text-xl lg:text-5xl  font-medium mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Master JavaScript with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-600">1-on-1 Live Classes</span>
              </motion.h1>
             
              <motion.p 
                className="text-xs lg:text-base text-gray-700 mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transform from beginner to professional JavaScript developer in just 12 weeks. Get personalized attention, build real projects, and launch your tech career.
              </motion.p>
             
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(127, 29, 29, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-900 to-red-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-red-800 hover:to-red-700 transition-all shadow-lg"
                >
                  Start Learning Today →
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-red-900 text-red-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-all"
                >
                  Download Syllabus
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
                  alt="Coding workspace"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-6 right-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-lg font-semibold">Live Session in Progress</span>
                  </div>
                  <p className="text-lg opacity-90">Join 1000+ students learning JavaScript</p>
                </div>
              </motion.div>
              {/* Floating Stats with Parallax */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white/90 p-5 rounded-2xl shadow-2xl border border-gray-100"
                style={{ y: useTransform(scrollYProgress, [0, 0.1], [0, -20]) }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-3xl font-black text-red-900">1000+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white/90 p-5 rounded-2xl shadow-2xl border border-gray-100"
                style={{ y: useTransform(scrollYProgress, [0, 0.1], [0, 20]) }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <div className="text-3xl font-black text-red-900">4.9⭐</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Benefits Section with Parallax */}
      <section ref={benefitsRef} className="py-24 bg-gray-50 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ y: benefitsParallax }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </motion.div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl lg:text-5xl font-semibold mb-6">
              Why Choose <span className="text-red-900">This Course?</span>
            </h2>
            <p className="text-xs lg:text-base text-gray-600 max-w-3xl mx-auto">
              Get everything you need to become a professional JavaScript developer
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10, borderColor: '#7f1d1d' }}
                >
                  <motion.div
                    className="text-6xl mb-6 text-red-900"
                    // animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  >
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
      {/* Detailed Syllabus with Parallax */}
      <section ref={syllabusRef} className="py-24 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-3"
          style={{ y: syllabusParallax }}
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        </motion.div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl lg:text-5xl font-semibold mb-6">
              Complete <span className="text-red-900">Course Curriculum</span>
            </h2>
            <p className="text-xl text-gray-600">
              12 weeks • 48 sessions • 10+ projects • Lifetime access
            </p>
          </motion.div>
          <div className="max-w-6xl mx-auto space-y-8">
            {modules.map((module, i) => (
              <motion.div
                key={module.id}
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <button
                  onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
                  className="w-full p-8 text-left hover:bg-gray-50/50 transition-colors flex justify-between items-center"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-4 py-2 bg-red-100 text-red-900 rounded-full text-sm font-semibold">
                        {module.week}
                      </span>
                      <span className="text-base text-gray-600">
                        {module.sessions} Sessions • {module.duration}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{module.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {module.topics.slice(0, 3).map((topic, idx) => (
                        <span key={idx} className="text-sm bg-gray-100 text-gray-700 px-3 py-2 rounded-lg">
                          {topic}
                        </span>
                      ))}
                      {module.topics.length > 3 && (
                        <span className="text-sm bg-gray-100 text-gray-700 px-3 py-2 rounded-lg">
                          +{module.topics.length - 3} more topics
                        </span>
                      )}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: activeModule === module.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-red-900 ml-4"
                  >
                    <BsChevronDown />
                  </motion.div>
                </button>
                {activeModule === module.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="border-t border-gray-200 overflow-hidden"
                  >
                    <div className="p-8 bg-gray-50">
                      <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                          <h4 className="font-bold text-xl mb-6 text-red-900 flex items-center gap-2">
                            <FaBook /> Topics Covered
                          </h4>
                          <ul className="space-y-3">
                            {module.topics.map((topic, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start gap-3 text-gray-700"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <span className="text-red-900 mt-1 flex-shrink-0">✓</span>
                                <span>{topic}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-xl mb-6 text-red-900 flex items-center gap-2">
                            <FaBullseye /> Learning Outcomes
                          </h4>
                          <ul className="space-y-3 mb-8">
                            {module.learningOutcomes.map((outcome, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start gap-3 text-gray-700"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <span className="text-red-900 mt-1 flex-shrink-0">→</span>
                                <span>{outcome}</span>
                              </motion.li>
                            ))}
                          </ul>
                          <h4 className="font-bold text-xl mb-6 text-red-900 flex items-center gap-2">
                            <FaLaptopCode /> Projects
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {module.projects.map((project, idx) => (
                              <span key={idx} className="px-4 py-2 bg-white border-2 border-red-200 text-red-900 rounded-xl text-base font-medium shadow-sm">
                                {project}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Instructor Section with Parallax */}
      <section ref={instructorRef} className="py-24 bg-gray-50 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ x: instructorParallax }}
        >
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </motion.div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl lg:text-5xl font-semibold mb-6">
              Meet Your <span className="text-red-900">Mentor</span>
            </h2>
            <p className="text-xs lg:text-base text-gray-600">
              Learn from industry expert with 10+ years of experience
            </p>
          </motion.div>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full rounded-3xl shadow-2xl"
                  />
                  <div className="absolute bottom-8 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-red-900">{instructor.experience}</div>
                        <div className="text-sm text-gray-600">Experience</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-red-900">{instructor.students}</div>
                        <div className="text-sm text-gray-600">Students</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-red-900">{instructor.rating}</div>
                        <div className="text-sm text-gray-600">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-4xl font-black mb-2">{instructor.name}</h3>
                  <p className="text-2xl text-red-900 font-semibold">{instructor.title}</p>
                  <p className="text-xl text-gray-600">{instructor.company}</p>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{instructor.bio}</p>
                <div>
                  <h4 className="font-bold text-xl mb-4 text-gray-900 flex items-center gap-2">
                    <FaRocket /> Expertise
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {instructor.expertise.map((skill, idx) => (
                      <span key={idx} className="px-6 py-3 bg-red-100 text-red-900 rounded-xl font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-4 text-gray-900 flex items-center gap-2">
                    <FaGraduationCap /> Achievements
                  </h4>
                  <ul className="space-y-3">
                    {instructor.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <span className="text-red-900 mt-1 flex-shrink-0">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl lg:text-5xl font-semibold mb-6">
              Success <span className="text-red-900">Stories</span>
            </h2>
            <p className="text-xs lg:text-base text-gray-600">
              Hear from students who transformed their careers
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {testimonials.map((test, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={test.image} alt={test.name} className="w-16 h-16 rounded-full object-cover shadow-lg" />
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg">{test.name}</h4>
                      <p className="text-sm text-gray-600">{test.role}</p>
                      <p className="text-sm text-gray-500">{test.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed mb-6 italic">"{test.text}"</p>
                  <div className="space-y-3 pt-6 border-t border-gray-100">
                    {test.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-red-900 font-semibold">
                        <span>✓</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl lg:text-5xl font-semibold mb-6">
              Frequently Asked <span className="text-red-900">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Got questions? We've got answers
            </p>
          </motion.div>
          <div className="max-w-5xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-8 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
                >
                  <span className="font-semibold text-xl text-gray-900 flex-1">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: activeFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-red-900 flex-shrink-0 ml-4"
                  >
                    <BsChevronDown />
                  </motion.div>
                </button>
                {activeFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200 overflow-hidden"
                  >
                    <div className="p-8 text-gray-700 leading-relaxed bg-gray-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-red-900 via-red-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-sm font-semibold mb-8 gap-2 backdrop-blur-sm"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
              🔥 Limited Time Offer - 50% OFF
            </motion.div>
            <h2 className="text-xl lg:text-5xl font-semibold mb-8">
              Ready to Start Your JavaScript Journey?
            </h2>
            <p className="text-base mb-10 opacity-90">
              Join 1000+ students who have successfully transformed their careers with us
            </p>
            <div className="flex items-center justify-center gap-8 mb-10">
              <div>
                <div className="text-6xl font-cursive">₹4,999</div>
                <div className="text-base opacity-75">One-time payment</div>
              </div>
              <div className="text-4xl opacity-50">|</div>
              <div>
                <div className="text-4xl font-bold line-through opacity-50">₹9,999</div>
                <div className="text-lg text-green-300 font-semibold">Save ₹5,000</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mb-10">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-900 px-12 py-6 rounded-2xl font-semibold text-2xl hover:bg-gray-100 transition-all shadow-2xl"
              >
                Enroll Now & Save 50% 🚀
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-12 py-6 rounded-2xl font-semibold text-2xl hover:bg-white/10 transition-all"
              >
                Talk to Mentor
              </motion.button>
            </div>
            <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl">✓</span>
                <span className="text-lg">7-day money-back guarantee</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl">✓</span>
                <span className="text-lg">Lifetime access to materials</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl">✓</span>
                <span className="text-lg">Certificate upon completion</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-900 rounded-xl flex items-center justify-center font-bold text-xl">JS</div>
                <span className="font-bold text-2xl">JavaScript Masterclass</span>
              </div>
              <p className="text-gray-400 text-base">Transform your career with professional JavaScript training.</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-red-400 transition-colors">About Course</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Syllabus</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Instructor</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-red-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Refund Policy</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-red-400" />
                  support@jsmaster.com
                </li>
                <li className="flex items-center gap-3">
                  <FaPhone className="text-red-400" />
                  +91 98765 43210
                </li>
                <li className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-red-400" />
                  Indore, Madhya Pradesh
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-base">
            <p>&copy; 2025 JavaScript Masterclass. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Program1;