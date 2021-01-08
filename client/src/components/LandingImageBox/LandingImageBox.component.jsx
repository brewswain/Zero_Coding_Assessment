import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton.component";

import "./LandingImageBox.style.scss";

const LandingImageBox = ({
  left,
  image,
  secondImage,
  link,
  linkRoute,
  text,
  overlap,
}) => {
  return (
    <div className="landing-image__container">
      {left ? null : text ? (
        <h1 className="landing__title">{text}</h1>
      ) : (
        <Link to={linkRoute}>
          <CustomButton customClass="landing__button">{link}</CustomButton>
        </Link>
      )}
      {overlap ? (
        <div
          className={`${
            overlap ? "landing-image__container--overlap" : ""
          } landing-image__container`}
        >
          <img
            src={image}
            alt={`Thumbnail of  ${image}`}
            className="landing__image landing__image--primary"
          />
          <img
            src={secondImage}
            alt={`Thumbnail of  ${secondImage}`}
            className="landing__image landing__image--secondary"
          />
        </div>
      ) : (
        <img
          src={image}
          alt={`Thumbnail of  ${image}`}
          className="landing__image"
        />
      )}
      {left ? (
        <h1 className="landing__title">
          {link ? (
            <Link to={linkRoute}>
              <CustomButton customClass="landing__button">{link}</CustomButton>{" "}
            </Link>
          ) : (
            <h1 className="landing__title">{text}</h1>
          )}
        </h1>
      ) : null}
    </div>
  );
};

export default LandingImageBox;
