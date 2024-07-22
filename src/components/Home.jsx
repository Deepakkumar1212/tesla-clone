import React from "react";
import "./Home.css";
import Section from "./Section";

function Home() {
  const model = [
    {
      heading: "Model 3",
      imgSrc: "./model-3.jpg"
    },
    {
      heading: "Model x",
      imgSrc: "./model-x.jpg"
    },
    {
      heading: "Model s",
      imgSrc: "./model-s.jpg"
    },
    {
      heading: "Model y",
      imgSrc: "./model-y.jpg"
    },
    {
      heading: "Solar Roof",
      imgSrc: "./solar-roof.jpg"
    },
    {
      heading: "Solar Panels",
      imgSrc: "./solar-panel.jpg"
    },
    {
      heading: "Accessories",
      imgSrc: "./accessories.jpg"
    },
    
  ];

  return (
    <div className="home">
      {
        model.map((item, index) => (
          <Section key={index} heading={item.heading} imgSrc={item.imgSrc} />
        ))
      
      }
    </div>
  );
}

export default Home;
