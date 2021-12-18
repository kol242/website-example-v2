import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-5.mp4" autoPlay loop muted />
      <h1>Welcome!</h1>
      <p>This website was designed and developed by Valentino Kolinger</p>
      <p>using React.js framework</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
         Visit my portfolio
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
