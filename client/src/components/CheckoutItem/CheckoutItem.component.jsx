import React from "react";

import "./CheckoutItem.style.scss";

const CheckoutItem = ({ item }) => {
  const { title, price, imageUrl, quantity } = item;
  console.log(item);
  return (
    <div className="checkout-item__container">
      <div className="checkout-image__container">
        <img
          src={imageUrl}
          alt={`Checkout thumbnail of ${title}`}
          className="checkout__image"
        />
        <div className="checkout__title">{title}</div>
      </div>
      <div className="checkout-description__container">
        <div className="checkout__price">${price}.00</div>
        <div className="checkout-quantity__container">
          <div className="quantity__arrow">&#10094;</div>
          <span className="checkout__quantity">{quantity}</span>
          <div className="quantity__arrow">&#10095;</div>
        </div>
        <div className="checkout-total">${price * quantity}</div>
      </div>
      <div className="remove-button__container">
        <div className="remove__button">&#10005;</div>
      </div>
    </div>
  );
};

export default CheckoutItem;
