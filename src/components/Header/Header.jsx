import React, { useState } from "react";
import "./Header.css";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  return (
    <div className="top__dev">
      {/* NAVBAR ST */}
      <div className="navbar">
        <div className="hearding__nav">
          <h1>
            <span className="text-primary">BECCA</span>
            <span className="text-danger">KENI</span>
            <span className="text-primary">FEN</span>
          </h1>
        </div>
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="div__anchor">
            <a className="active">Home</a>
            <a>About</a>
            <a>Service</a>
            <a>Portfolio</a>
            <a>Testimonials</a>
            <a>Contact Us</a>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        ></div>
      </div>
      {/* NAVBAR ED */}
    </div>
  );
};

export default Header;
