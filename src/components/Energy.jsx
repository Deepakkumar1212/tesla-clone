import React from "react";
import "./Vehicle.css"

function Energy() {
  const vehicles = [
    {
      heading: "Solar Pannel",
      imgSrc: "./energy/solar-panels.jpg",
    },
    {
      heading: "Power Wall",
      imgSrc: "./energy/power-wall.jpg",
    },
    {
      heading: "Solar Roof",
      imgSrc: "./energy/solar-roof.jpg",
    },
    {
      heading: "Megapack",
      imgSrc: "./energy/megapack.jpg",
    },
  ];
  return (
    <>
      <div className="vehicle-container">
        <div className="vehicles">
          {vehicles.map((item, index) => (
            <div className="vehicle" key={index}>
              <img src={item.imgSrc}  data-aos="zoom-in-down" />
              <h3 data-aos="fade-down" >{item.heading}</h3>
              <div className="btn">
                <p data-aos="fade-right" >Learn</p>
                <p data-aos="fade-left" >Order</p>
              </div>
            </div>
          ))}
        </div>
        <div className="line"></div>
        <div className="right">
          <ul>
            <li data-aos="fade-right" >
              <a href="#">Why Solar</a>
            </li>
            <li data-aos="fade-left" >
              <a href="#">Incentives</a>
            </li>
            <li data-aos="fade-right" >
              <a href="#">Partner with Tesla</a>
            </li>
            <li data-aos="fade-left" >
              <a href="#">Commercial</a>
            </li>
            <li data-aos="fade-right" >
              <a href="#">Utilities</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Energy;
