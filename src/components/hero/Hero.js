import React from "react";
import "./HeroStyles.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <h3>My Name is </h3>
          <h2 className="blue">Dede Nurdiyanto</h2>
          <h3>Web Developer</h3>
          <div>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
