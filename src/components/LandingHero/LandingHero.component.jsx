import React from "react";
import { CustomButton } from "..";
import { HeroImage } from "../../assets";

import "./LandingHero.style.scss";

const LandingHero = () => (
  <div className="landing-hero__container">
    <div className="hero-text__container">
      <h2 className="landing-hero__title">Hewwo</h2>
      <CustomButton>Shop Now</CustomButton>
    </div>
    <div className="hero-image__container">
      <img
        src={HeroImage}
        alt="Provided by natasha_t on Unsplash"
        className="landing-hero__image"
      />
    </div>
  </div>
);

export default LandingHero;
