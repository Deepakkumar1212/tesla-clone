import React from "react";
import "./Section.css";

function Section({ heading, imgSrc }) {
  return (
    <div className="section" style={{ backgroundImage: `url(${imgSrc})` }} >
      <div className="model">
        <h2 data-aos="fade-down">{heading}</h2>
        <p data-aos="fade-right">Order Online for Touchless Delivery</p>
      </div>
      <div className="btn">
        <button data-aos="fade-right">Order Now</button>
        <button data-aos="fade-left">Demo Drive</button>
      </div>
    </div>
  );
}

export default Section;
