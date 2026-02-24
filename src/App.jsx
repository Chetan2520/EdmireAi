// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Footer from './Footer';
import Navbar from './Navbar';
import WhyChooseUs from './WhyChooseUs';
import KidsCourses from './KidsCourses';
import Program1 from './Program1';
import ContactForm from './ContactForm';
import WhatsAppIcon from './WhatsAppIcon';
// import PremiumVideoSection from './PremiumVideoSection';
import Form from './Form';
import BecomeTeacher from './Teacher';
import Program2 from './Program2';
import Program3 from './Program3';
import Program4 from './Program4';
import ScrollToTop from './ScrollToTop';
import FAQ from './FAQs';
import CallIcon from './CallIcon';
import Blogs from './Blogs';
import BlogDetail from './BlogDetail';
import AdminPanel from './AdminPanel';

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 12000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div className="relative">
      <Hero />
      {/* <PremiumVideoSection /> */}
      <KidsCourses />
      <WhyChooseUs />
      <WhatsAppIcon />
      <CallIcon />
      <FAQ />
      {showForm && <Form onClose={() => setShowForm(false)} />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<BecomeTeacher />} />
        <Route path="/program1" element={<Program1 />} />
        <Route path="/program2" element={<Program2 />} />
        <Route path="/program3" element={<Program3 />} />
        <Route path="/program4" element={<Program4 />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/adminedmirai" element={<AdminPanel />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;