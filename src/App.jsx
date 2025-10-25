import React from 'react'
import Hero from './Hero'
import VedantuComparison from './VedantuComparison'
import Faq from './Faq'
import HelpSection from './CTA'
import Footer from './Footer'
import Navbar from './Navbar'
import PremiumVideoSection from './PremiumVideoSection '
import WhyChooseUs from './WhyChooseUs'
import Programs from './Programs'
import KidsCourses from './KidsCourses'

const App = () => {
  return ( 
    <div>
    <Navbar/>
    <Hero/>
    <KidsCourses/>
    <WhyChooseUs/>
    <Programs/>
      <PremiumVideoSection/>
      {/* 
      <VedantuComparison/>
      <Faq/>
<HelpSection/>
<Footer/> */}
    </div>
  )
}

export default App