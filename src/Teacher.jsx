import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  FaUserGraduate, FaRupeeSign, FaUsers, FaTrophy, FaLaptop, FaBrain, 
  FaRocket, FaCheckCircle, FaStar, FaArrowRight, FaPhone, FaEnvelope,
  FaMapMarkerAlt, FaShieldAlt, FaChartLine, FaHeadset, FaMedal
} from 'react-icons/fa';

const JoinFaculty = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const heroY = useTransform(smoothProgress, [0, 0.3], [0, 120]);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.98]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email required';
    if (formData.phone.length < 10) newErrors.phone = 'Valid phone required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert('Application submitted! We’ll contact you within 24 hours.');
    console.log('Edmirai Faculty Application:', formData);
    setFormData({ name: '', email: '', phone: '' });
  };

  const benefits = [
    { icon: FaTrophy, title: 'Be part of a movement', desc: 'Redefining how students learn with human + AI expertise.' },
    { icon: FaLaptop, title: 'Flexible, rewarding engagement', desc: 'Teach from anywhere. Choose your hours & students.' },
    { icon: FaChartLine, title: 'Real impact = real rewards', desc: 'Performance bonuses, recognition & higher rates.' },
    { icon: FaBrain, title: 'Full support + resources', desc: 'AI dashboard, curriculum, training & community.' },
    { icon: FaMedal, title: 'Grow as a professional', desc: 'Build reputation, teach top exams, become a leader.' }
  ];

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
              <motion.h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Teach With Us, Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-red-600">Edmirai Teaching Revolution</span>
              </motion.h1>
              <motion.p className="text-xl lg:text-2xl font-medium mb-6 text-gray-700">
                Shape the Future. Earn Rewardingly. Teach With Purpose.
              </motion.p>
              <motion.p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
                At Edmirai, we’re transforming online learning in India with personalized 1-on-1 classes, AI tools, instant doubt solving & JEE/NEET prep. 
                Now we’re looking for passionate educators to lead this change.
              </motion.p>

              {/* <div className="flex flex-wrap gap-6 mb-10">
                <div className="bg-white/90 backdrop-blur p-5 rounded-2xl shadow-lg border border-red-100">
                  <div className="text-3xl font-black text-red-900 flex items-center gap-2">
                    <FaRupeeSign />1L – 3L
                  </div>
                  <div className="text-sm text-gray-600">per month</div>
                </div>
                <div className="bg-white/90 backdrop-blur p-5 rounded-2xl shadow-lg border border-red-100">
                  <div className="text-3xl font-black text-red-900 flex items-center gap-2">
                    <FaRupeeSign />1200–3000
                  </div>
                  <div className="text-sm text-gray-600">per hour</div>
                </div>
                <div className="bg-white/90 backdrop-blur p-5 rounded-2xl shadow-lg border border-red-100">
                  <div className="text-3xl font-black text-red-900 flex items-center gap-2">
                    <FaUsers />10K+
                  </div>
                  <div className="text-sm text-gray-600">Active Students</div>
                </div>
              </div> */}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800" alt="Passionate Teacher" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-6 right-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-lg font-semibold">500+ Elite Educators</span>
                  </div>
                  <p className="text-lg opacity-90">Teaching India’s brightest minds</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      {/* <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 text-gray-700">
            <div className="flex items-center gap-3"><FaShieldAlt className="text-red-900 text-2xl" /><span className="font-medium">Verified by IIT Alumni</span></div>
            <div className="flex items-center gap-3"><FaUserGraduate className="text-red-900 text-2xl" /><span className="font-medium">500+ Top Educators</span></div>
            <div className="flex items-center gap-3"><FaStar className="text-yellow-500 text-2xl" /><span className="font-medium">4.9/5 Faculty Rating</span></div>
          </div>
        </div>
      </section> */}

      {/* Why Join + Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-start">
            {/* Left: Why Join */}
            <div className="space-y-10">
              <motion.h2 className="text-4xl lg:text-5xl font-bold" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                Why Join <span className="text-red-900">Edmirai?</span>
              </motion.h2>
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex gap-5">
                    <div className="text-5xl text-red-900"><Icon /></div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right: Form */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="bg-gradient-to-br from-red-50 to-white p-10 rounded-3xl shadow-2xl border border-red-100">
              <h3 className="text-4xl font-bold text-center mb-8">Connect with us</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Full Name" className={`w-full px-6 py-4 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-red-900 focus:ring-4 focus:ring-red-100 transition`} />
                {errors.name && <p className="text-red-600 text-sm -mt-3 ml-2">{errors.name}</p>}

                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className={`w-full px-6 py-4 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-red-900 focus:ring-4 focus:ring-red-100 transition`} />
                {errors.email && <p className="text-red-600 text-sm -mt-3 ml-2">{errors.email}</p>}

                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" className={`w-full px-6 py-4 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:border-red-900 focus:ring-4 focus:ring-red-100 transition`} />
                {errors.phone && <p className="text-red-600 text-sm -mt-3 ml-2">{errors.phone}</p>}

                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full bg-gradient-to-r from-red-900 to-red-800 text-white font-bold py-5 rounded-xl text-xl shadow-xl flex items-center justify-center gap-3 hover:from-red-800 hover:to-red-700 transition">
                  <FaRocket /> Become a Teacher
                </motion.button>

                <p className="text-center text-gray-600 mt-4">
                  We’ll call you in <strong className="text-red-900">24 hours</strong> for a quick chat.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16">How It Works <span className="text-red-900">(Quick Steps)</span></h2>
          <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {['Apply', 'Screen & Demo', 'Onboard & Train', 'Teach & Earn', 'Grow & Lead'].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-5xl font-black text-red-900 mb-3">{i + 1}</div>
                <p className="font-bold text-gray-800">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-red-900 via-red-800 to-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-4xl lg:text-6xl font-bold mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            Join Us Today
          </motion.h2>
          <motion.p className="text-xl mb-12 max-w-3xl mx-auto opacity-90" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Become a part of Edmirai’s teaching community and help build the future of personalized learning in India.
          </motion.p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white text-red-900 px-16 py-6 rounded-2xl font-bold text-2xl shadow-2xl flex items-center gap-4 mx-auto">
            Apply Now & Start Earning <FaArrowRight className="text-3xl" />
          </motion.button>
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

export default JoinFaculty;