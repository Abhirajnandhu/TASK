import React from "react";
// import { Link } from "react-router-dom";
import "../Styles/navbar.css";

function Navbar() {
  return (
    <>
      <img src="../images/Group 921.jpg" alt="error" />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Destination</li>
          <li>Philippines Cruises</li>
          <li>Mice & Wedding</li>
          <li>Ultra Luxury</li>
          <li>Contact</li>
          {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Destination</Link>
        </li>
        <li>
          <Link to="/contact">Philippines Cruises</Link>
        </li>
        <li>
          <Link to="/contact">Mice & Wedding</Link>
        </li>
        <li>
          <Link to="/contact">Ultra Luxury</Link>
        </li>
        <li>
          <Link to="/contact">Contac</Link>
        </li> */}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
