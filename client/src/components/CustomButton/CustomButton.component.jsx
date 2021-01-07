import React from "react";

import "./CustomButton.style.scss";

const CustomButton = ({ children, large, ...otherProps }) => (
  <button
    className={`${large ? "custom__button--large" : ""} custom__button`}
    // ...otherProps allows us to pass our onClick etc
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
