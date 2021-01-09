import React from "react";
import { useDispatch } from "react-redux";

import {
  addToCart,
  clearFromCart,
  removeFromCart,
} from "../../redux/cart/cartSlice";

import "./CheckoutItem.style.scss";

const CheckoutItem = ({ item }) => {
  const { title, price, imageUrl, quantity, _id } = item;
  const dispatch = useDispatch();

  return (
    <div className="checkout-item__container">
      <img
        src={imageUrl}
        alt={`Checkout thumbnail of ${title}`}
        className="checkout__image"
      />
      <div className="checkout__title">{title}</div>
      <div className="checkout__price">${price}.00</div>
      <div className="checkout-quantity__container">
        <div
          className="quantity__arrow"
          onClick={() => {
            dispatch(removeFromCart({ title, price, _id, imageUrl, quantity }));
          }}
        >
          &#10094;
        </div>
        <span className="checkout__quantity">{quantity}</span>
        <div
          className="quantity__arrow"
          onClick={() => {
            dispatch(addToCart({ title, price, _id, imageUrl, quantity: 1 }));
          }}
        >
          &#10095;
        </div>
      </div>
      <div className="checkout__total">${price * quantity}.00</div>
      <div
        className="remove-button__container"
        onClick={() => dispatch(clearFromCart({ title }, _id))}
      >
        <div className="remove__button">&#10005;</div>
      </div>
    </div>
  );
};

export default CheckoutItem;
