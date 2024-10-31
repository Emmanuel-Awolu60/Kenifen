import React from "react";
import "./Hero.css";
// import "../scrollreveal.js"
{/* <script src="https://unpkg.com/scrollreveal"></script> */ }
const Hero = () => {
  return (
    <div className="div__top">
      <div className="div__right">
        <div className="div__rightText">
          <h2>
            <span className="font-semibold">WELCOME TO</span>
            <br />
            {/* <span className="text-primary bbb headline">BECCA</span> */}
            <span className="font-semibold">KENI</span>
            <span className="font-semibold">FEN</span>
          </h2>
        </div>

        <div className="textp">
          <p>
            Every book is judged by its cover at the first glance. Take your
            fashion sense to the ultimate level. <br /> How you look has an impact on
            how you feel!
          </p>
        </div>

        <div className="div_btn">
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
