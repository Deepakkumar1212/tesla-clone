import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="left">
          <h4>Company</h4>
          <a href="#">Tesla © 2024</a>
          <a href="#">Privacy & Legal</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
          <a href="#">News</a>
          <a href="#">Locations</a>
        </div>
        <div className="middle">
          <h4>Resorces</h4>
          <a href="#">Demo Drive</a>
          <a href="#">Events</a>
          <a href="#">Insurance</a>
          <a href="#">Video Guides</a>
          <a href="#">Customer Stories</a>
        </div>
        <div className="right">
          <h4>Location Services</h4>
          <a href="#">Find Us</a>
          <a href="#">Find a Collision Center</a>
          <a href="#">Find a Certified Installer</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
