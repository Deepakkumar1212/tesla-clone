import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
  const [icon, setIcon] = useState(true);

  const handleIcon = () => {
    setIcon(!icon);
  }

  return (
    <>
      <nav className="nav">
        <div className="left-nav">
          <img src="./logo.svg" alt="logo" />
        </div>
        <div className={icon ? "nav-items" : "new-nav-items" }>
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/vehicle">Vehicles</Link>
            </li>
            <li>
              <Link to="/energy">Energy</Link>
            </li>
            <li>
              <Link to="/Charging">Charging</Link>
            </li>
            <li>
              <Link to="/discover">Discover</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>
        <button>
          <CgProfile />
        </button>

        <div className="icons">
            <i onClick={handleIcon}> { icon ? <IoMenu /> : <FaXmark />}</i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
