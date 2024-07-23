import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="div__top">
      <div className="div__right">
        <div className="div__rightText">
          <h1>Welcome to</h1>
          <br />
          <span className="text-primary">BECCA</span>
          <span className="text-danger">KENI</span>
          <span className="text-primary">FEN</span>
        </div>

        <div>
          <p>
            Every book is judged by its cover at the first glance. Take your
            fashion sense to the ultimate level. How you look has an impact on
            how you feel!
          </p>
        </div>

        <div>
          <button>GET STARTED</button>
          <button>BUY IMMEDIATELY</button>
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
