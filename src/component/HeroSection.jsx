import React, { useState, useEffect } from 'react';
import '../styles/HeroSection.css';
import Img1 from '../assets/Hero1.png';
import Img2 from '../assets/Hero2.jpg';
import Img3 from '../assets/Hero3.jpg';
import Img4 from '../assets/Hero4.png';

const HeroSection = () => {
  const images = [Img1, Img2, Img3, Img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-full-wrapper">
      <div 
        className="hero-slider-track" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="hero-slide-item" key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="hero-full-img" />
          </div>
        ))}
      </div>

      <div className="hero-navigation-dots">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`hero-dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;