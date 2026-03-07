import React from 'react';
import '../styles/InquirySection.css';
import { Circle } from 'lucide-react'; 

const InquirySection = () => {
  return (
    <section className="inquiry-wrapper">
      <div className="inquiry-grid">
        
        {/* Left Side: Text Content */}
        <div className="text-content">
          <h2 className="title-text">
            "Are you searching for the solutions ? WE deliver the Solutions in easy way"
          </h2>
          
          <ul className="points-list">
            <li>
              <Circle className="dot-icon" size={10} strokeWidth={4} />
              <span>Shul Ventures Pvt. Ltd. is a team of skilled and experienced workforce in respective domain.</span>
            </li>
            <li>
              <Circle className="dot-icon" size={10} strokeWidth={4} />
              <span>For each domain, we have a team of qualified professionals.</span>
            </li>
            <li>
              <Circle className="dot-icon" size={10} strokeWidth={4} />
              <span>At Shul, we find the root cause of your problems and we focus on the solution.</span>
            </li>
            <li>
              <Circle className="dot-icon" size={10} strokeWidth={4} />
              <span>We render high quality results with descent techniques.</span>
            </li>
            <li>
              <Circle className="dot-icon" size={10} strokeWidth={4} />
              <span>We at Shul, ascertain client satisfaction and work on it diligently.</span>
            </li>
            <li>
              <Circle className="dot-icon" size={10} strokeWidth={4} />
              <span>We are always open for feedback suggestions to make our system stronger.</span>
            </li>
          </ul>
        </div>

        {/* Right Side: Small Inquiry Form */}
        <div className="form-container-box">
          <div className="form-card">
            <h3 className="form-header">Quick Inquiry</h3>
            <form className="actual-form">
              <select className="small-input">
                <option>Select Service</option>
                <option>HR Consulting</option>
                <option>Business Solutions</option>
              </select>
              <input type="text" placeholder="Name" className="small-input" />
              <input type="text" placeholder="Phone Number" className="small-input" />
              <input type="email" placeholder="Email Address" className="small-input" />
              <input type="text" placeholder="Address" className="small-input" />
              <textarea placeholder="Message" className="small-input small-textarea"></textarea>
              <button type="submit" className="green-submit-btn">SUBMIT</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InquirySection;