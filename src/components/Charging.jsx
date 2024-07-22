import React from "react";
import "./Vehicle.css";

function Charging() {
  const vehicles = [
    {
      heading: "Charging",
      imgSrc: "./charging/charging.jpg",
    },
    {
      heading: "Home Charging",
      imgSrc: "./charging/homecharging.jpg",
    },
    {
      heading: "SuperCharging",
      imgSrc: "./charging/super.jpg",
    }
  ];
  return (
    <>
      <div className="vehicle-container">
        <div className="vehicles">
          {vehicles.map((item, index) => (
            <div className="vehicle" key={index}>
              <img src={item.imgSrc} data-aos="zoom-in-down"  />
              <h3 data-aos="fade-down">{item.heading}</h3>
              <div className="btn">
                <p data-aos="fade-right">Learn</p>
                <p data-aos="fade-left">Shop</p>
              </div>
            </div>
          ))}
        </div>
        <div className="line"></div>
        <div className="right">
          <ul>
            <li data-aos="fade-right">
              <a href="#">Help Me Charge</a>
            </li>
            <li data-aos="fade-left">
              <a href="#">Charging Calculator</a>
            </li>
            <li data-aos="fade-right">
              <a href="#">Charging With NACS</a>
            </li>
            <li data-aos="fade-left">
              <a href="#">Supercharger Voting</a>
            </li>
            <li data-aos="fade-right">
              <a href="#">Host a Supercharger</a>
            </li>
            <li data-aos="fade-left">
              <a href="#">Commercial Charging</a>
            </li>
            <li data-aos="fade-right">
              <a href="#">Host Wall Connectors</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Charging;
