import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Footer from './Footer';
import Navbar from './Navbar';
import WhyChooseUs from './WhyChooseUs';
import KidsCourses from './KidsCourses';
import Program1 from './Program1';
import PremiumVideoSection from './PremiumVideoSection ';
import VedantuComparison from './VedantuComparison';
// Note: Removed unused imports like HelpSection and Programs for cleanliness

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
             
              <Hero />
              <PremiumVideoSection />
              <KidsCourses />
              <WhyChooseUs />
              <VedantuComparison/>
              {/* <FAQ */}
            </div>
          }
        />
        {/* Optional: Add more routes as needed, e.g., for specific sections */}
        <Route path="/program1" element={<Program1 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;