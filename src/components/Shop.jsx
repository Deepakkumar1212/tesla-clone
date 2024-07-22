import React from "react";
import "./Vehicle.css";

function Shop() {
  const vehicles = [
    {
      heading: "Charging",
      imgSrc: "./shop/charging.jpg",
    },
    {
      heading: "Vehicle Accessories",
      imgSrc: "./shop/vehicle.jpg",
    },
    {
      heading: "Apparel",
      imgSrc: "./shop/apparel.png",
    },
    {
      heading: "Lifestyle",
      imgSrc: "./shop/lifestyle.jpg",
    }
  ];
  return (
    <>
      <div className="vehicle-container">
        <div className="vehicles">
          {vehicles.map((item, index) => (
            <div className="vehicle" key={index}>
              <img src={item.imgSrc} data-aos="zoom-in-down" />
              <h3 data-aos = "fade-down">{item.heading}</h3>
              <div className="btn">
                <p data-aos="fade-right">Learn</p>
                <p data-aos="fade-left">Shop</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop;
