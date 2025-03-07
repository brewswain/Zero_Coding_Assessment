import React from "react";
import { CustomButton } from "..";
import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/cart/cartSlice";

import "./CustomCard.style.scss";

const CustomCard = ({ item }) => {
  const dispatch = useDispatch();

  const { _id, backgroundColor, imageUrl, price, subtitle, title } = item;
  return (
    <div className="card__container">
      <div className="card-image__container" style={{ backgroundColor }}>
        <img
          className="card__media"
          src={imageUrl}
          alt={`Food item for sale: ${title} `}
        />
      </div>
      <div className="card-text__container">
        <h3 className="card__title">{title}</h3>
        <div className="card__subtitle">{subtitle}</div>

        <div className="card-price__container">
          <div className="card__price">${price}.00</div>
          <CustomButton
            onClick={async () => {
              dispatch(addToCart({ title, price, _id, imageUrl, quantity: 1 }));
            }}
          >
            Add Now
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
