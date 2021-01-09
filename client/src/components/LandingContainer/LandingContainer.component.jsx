import React from "react";

import LandingImageBox from "../LandingImageBox/LandingImageBox.component";
import { IceCream, Burger, Kebab } from "../../assets";

import "./LandingContainer.style.scss";

const LandingContainer = () => {
  return (
    <div className="landing__container">
      <LandingImageBox image={Kebab} text="Come, we have Munchies!" />
      <LandingImageBox
        image={IceCream}
        secondImage={Burger}
        link="Join the Feast"
        linkRoute="/shop"
        left
        text={false}
        overlap
      />
    </div>
  );
};

export default LandingContainer;
