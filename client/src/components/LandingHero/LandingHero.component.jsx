import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../CustomButton/CustomButton.component";
// import { HeroImage } from "../../assets";

import "./LandingHero.style.scss";

const LandingHero = () => (
  <div className="landing-hero__container">
    <div className="hero-text__container">
      <h2 className="landing-hero__title">Hey this is a test component!</h2>
      <h2 className="landing-hero__title">
        I might do some simple routing from this hero
      </h2>
      <Link to="/shop">
        <CustomButton large>Shop Now</CustomButton>
      </Link>
    </div>
    {/* TODO: Implement proper Hero Image On Friday once draft is sent in. */}
    {/* <div className="hero-image__container"></div> */}
  </div>
);

export default LandingHero;
