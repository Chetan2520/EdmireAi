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
import EdmirAiFAQ from "./FAQ.jsx";
// import PremiumVideoSection from './PremiumVideoSection';
import Form from './Form';
import BecomeTeacher from './Teacher';
import Program2 from './Program2';
import Program3 from './Program3';
import Program4 from './Program4';

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Har baar reload par 5 sec baad popup dikhega
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 50000);

    return () => clearTimeout(timer); // Cleanup
  }, []); // Sirf mount par

  return (
    <div className="relative">
      <Hero />
      {/* <PremiumVideoSection /> */}
      <KidsCourses />
      <WhyChooseUs />
      <WhatsAppIcon />
      <EdmirAiFAQ />

      {showForm && <Form onClose={() => setShowForm(false)} />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<BecomeTeacher />} />
        <Route path="/program1" element={<Program1 />} />
          <Route path="/program2" element={<Program2 />} />
            <Route path="/program3" element={<Program3 />} />
              <Route path="/program4" element={<Program4 />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;