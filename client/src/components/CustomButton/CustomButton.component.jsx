import React from "react";

import "./CustomButton.style.scss";

const CustomButton = ({ children, large, customClass, ...otherProps }) => (
  <button
    className={`${
      large ? "custom__button--large" : ""
    } custom__button ${customClass}`}
    // ...otherProps allows us to pass our onClick etc
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
