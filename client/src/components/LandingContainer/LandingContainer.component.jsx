import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../CustomButton/CustomButton.component";
import LandingImageBox from "../LandingImageBox/LandingImageBox.component";
import { Lemons, Medley, Oranges } from "../../assets";

import "./LandingContainer.style.scss";

const LandingContainer = () => {
  return (
    <div className="landing__container">
      <LandingImageBox image={Oranges} text="Eden's bounty awaits." />
      <LandingImageBox
        image={Lemons}
        secondImage={Medley}
        link="Enter the Garden"
        linkRoute="/shop"
        left
        text={false}
        overlap
      />
    </div>
  );
};

export default LandingContainer;
