import React from "react";
import "./components/Header/Header";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import From from "./components/Form/Form";
import { Services } from "./components/Services/Services";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <From />
    </div>
  );
};

export default App;
