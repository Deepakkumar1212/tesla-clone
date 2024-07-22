import React, {useEffect} from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Vehicles from "./components/Vehicles";
import Energy from "./components/Energy";
import Charging from "./components/Charging";
import Discover from "./components/Discover";
import Shop from "./components/Shop";
import Home from "./components/Home";
import Footer from "./components/Footer";

import Aos from "aos";
import "aos/dist/aos.css";


function App() {
   
  useEffect(() => {
    Aos.init({
      offset: 200, 
      delay: 0, 
      duration: 1500, 
      easing: "ease", 
      once: true, 
    });

    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicle" element={<Vehicles />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/charging" element={<Charging />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
