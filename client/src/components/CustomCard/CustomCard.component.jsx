import React from "react";
import { CustomButton } from "..";

import "./CustomCard.style.scss";

const CustomCard = ({ item }) => {
  const { backgroundColor, image, price, subtitle, title } = item;

  return (
    <div className="card__container">
      <div className="card-image__container" style={{ backgroundColor }}>
        <img
          className="card__media"
          src={image}
          alt={`Food item for sale: ${title} `}
        />
      </div>
      <div className="card-text__container">
        <h3 className="card__title">{title}</h3>
        <div className="card__subtitle">{subtitle}</div>

        <div className="card-price__container">
          <div className="cart__price">${price}.00</div>
          <CustomButton>Add Now</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
