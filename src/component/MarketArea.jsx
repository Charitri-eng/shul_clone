import React from 'react';
import '../styles/MarketArea.css';
// Import your 6 images here
import Img1 from '../assets/Training.jpg';
import Img2 from '../assets/Fabrication.jpg';
import Img3 from '../assets/Pest.jpg';
import Img4 from '../assets/HouseKeeping.jpg';
import Img5 from '../assets/Electrical.jpg';
import Img6 from '../assets/Gardeing.jpg';

const MarketArea = () => {
  const services = [
    {
      img: Img1,
      title: "Training And Development",
      desc: "SHUL with a vision to Train the best IT Professionals. Our Training program provides result orientated quality training in the IT field."
    },
    {
      img: Img2,
      title: "Fabrication And Manufacturing",
      desc: "We provide fabrication structure as per client requirement. Our structure widely used in industrial, commercial and Restaurant sectors."
    },
    {
      img: Img3,
      title: "Pest Control",
      desc: "Our Commercial and Residential Pest Management Service offers the highest level of Protection to the Food, Pharmaceutical, Non-Food Industries, Warehouses, Offices, etc."
    },
    {
      img: Img4,
      title: "Housekeeping Services",
      desc: "We will provide you the housekeeping service with experience and professional team."
    },
    {
      img: Img5,
      title: "Electrical Services",
      desc: "From Residential to Commercial property we provide all electrical work services."
    },
    {
      img: Img6,
      title: "Gardening Services",
      desc: "We create healthy and luxuriant garden - Be close to nature."
    }
  ];

  return (
    <section className="market-section">
      <div className="market-header">
        <h2 className="market-main-title">Our Capturing Market Area</h2>
        <p className="market-subtitle">Who are in extremely love with eco friendly system..</p>
      </div>

      <div className="market-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-img-container">
              <img src={service.img} alt={service.title} />
            </div>
            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketArea;