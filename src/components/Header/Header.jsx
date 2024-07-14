import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="top__dev">
      {/* NAVBAR ST */}
      <div className="navbar">
        <div className="hearding__nav">
          <h1>BECCA Kenifen</h1>
        </div>
        <div className="div__anchor">
          <a className="active">Home</a>
          <a>About</a>
          <a>Service</a>
          <a>Portfolio</a>
          <a>Testimonials</a>
          <a>Contact Us</a>
        </div>
      </div>
      {/* NAVBAR ED */}
    </div>
  );
};

export default Header;
