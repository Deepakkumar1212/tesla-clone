import React from "react";
import "./Vehicle.css";

function Vehicles() {
  const vehicles = [
    {
      heading: "Model 3",
      imgSrc: "./vehicles/model-3.jpg",
    },
    {
      heading: "Model x",
      imgSrc: "./vehicles/model-x.png",
    },
    {
      heading: "Model s",
      imgSrc: "./vehicles/model-s.jpg",
    },
    {
      heading: "Model y",
      imgSrc: "./vehicles/model-y.jpg",
    },
    {
      heading: "Cybertruck",
      imgSrc: "./vehicles/cybertruck.jpg",
    },
    {
      heading: "Help Me Choose",
      imgSrc: "./vehicles/help.jpg",
    },
  ];

  return (
    <>
      <div className="vehicle-container">
        <div className="vehicles">
          {vehicles.map((item, index) => (
            <div className="vehicle" key={index} >
              <img src={item.imgSrc} data-aos="zoom-in-down" />
              <h3 data-aos="fade-down">{item.heading}</h3>
              <div className="btn">
                <p data-aos="fade-right">Learn</p>
                <p data-aos="fade-left">Order</p>
              </div>
            </div>
          ))}
        </div>
        <div className="line"></div>
        <div className="right">
          <ul>
            <li data-aos="fade-right">
              <a href="#">Inventry</a>
            </li>
            <li  data-aos="fade-left">
              <a href="#">Used Cars</a>
            </li>
            <li data-aos="fade-right">
              <a href="#">Demo Drive</a>
            </li>
            <li  data-aos="fade-left">
              <a href="#">Trade-in</a>
            </li>
            <li data-aos="fade-right">
              <a href="#">Compare</a>
            </li>
            <li  data-aos="fade-left">
              <a href="#">Fleet</a>
            </li>
            <li data-aos="fade-right">
              <a href="#">Semi</a>
            </li>
            <li data-aos="fade-left">
              <a href="#">Roadster</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Vehicles;
