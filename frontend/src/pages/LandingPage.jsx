import React from 'react'
import Navbar from '../components/LandingPageComponents/Navbar'
import Hero from '../components/LandingPageComponents/Hero'
import FeaturesSection from '../components/LandingPageComponents/Features'
//import HoroscopeSection from '../components/LandingPageComponents/Horoscope'
import AIAdviceSection from '../components/LandingPageComponents/AIAdviceSection'
import SpiritualContent from '../components/LandingPageComponents/SpiritualSection'
import Footer from '../components/LandingPageComponents/Footer'
import TestimonialsSection from '../components/LandingPageComponents/TeamMembers'

export default function LandingPage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturesSection/>
      {/* <HoroscopeSection/> */}
      <AIAdviceSection/>
      <SpiritualContent/>
      <TestimonialsSection/>
      <Footer/>
    </div>
  )
}
