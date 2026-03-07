import React from 'react'
import Marquee from '../component/Marquee'
import Navbar from '../component/Navbar'
import HeroSection from '../component/HeroSection'
import InquirySection from '../component/InquirySection'
import MarketArea from '../component/MarketArea'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div>
        <Marquee />
        <Navbar />
        <HeroSection />
        <InquirySection />
        <MarketArea />
        <Footer />
    </div>
  )
}

export default Home