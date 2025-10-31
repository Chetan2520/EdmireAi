import React from 'react'
import Hero from './Hero'
import VedantuComparison from './VedantuComparison'
import Faq from './FAQ'
import HelpSection from './CTA'
import Footer from './Footer'
import Navbar from './Navbar'
import PremiumVideoSection from './PremiumVideoSection '
import WhyChooseUs from './WhyChooseUs'
import Programs from './Programs'
import KidsCourses from './KidsCourses'
import FAQ from './FAQ'
import Program1 from './Program1'

const App = () => {
  return ( 
    <div>
    <Navbar/>
    <Program1/>
    <Hero/>
      <PremiumVideoSection/>
    <KidsCourses/>
    <WhyChooseUs/>
      <VedantuComparison/>
    <FAQ/>
<Footer/> 
      
    </div>
  )
}

export default App