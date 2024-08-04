import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="div__top">
      <div className="div__right">
        <div className="div__rightText">
          <h2>
            <span className="welcome__text">WELCOME TO</span>
            <br />
            <span className="text-primary">BECCA</span>
            <span className="text-danger">KENI</span>
            <span className="text-primary">FEN</span>
          </h2>
        </div>

        <div className="textp">
          <p>
            Every book is judged by its cover at the first glance. Take your
            fashion sense to the ultimate level. How you look has an impact on
            how you feel!
          </p>
        </div>

        <div className="dev_btn">
          <button className="btn__start">GET STARTED</button>
          <button className="btn__buy">BUY IMMEDIATELY</button>
        </div>
      </div>

      <div className="div__left">
        <div className="left__img">
          <ul className="glide__slides">
            <li className="glide__slide">
              <img src="./img/hero.jpg" alt="" className="hero__img" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
