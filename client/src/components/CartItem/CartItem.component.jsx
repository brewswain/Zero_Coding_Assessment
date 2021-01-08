import React from "react";

import "./CartItem.style.scss";

const CartItem = ({ itemProps }) => {
  const { title, price, quantity, imageUrl } = itemProps;
  console.log(itemProps);
  return (
    <div className="cart-item__container">
      <img
        className="cart-item__image"
        src={imageUrl}
        alt={`thumbnail of ${title}`}
      />
      <div className="cart-text__container">
        <div className="cart-item__title">{title}</div>
        <div className="cart-price__container">
          <div className="cart-item__price">${price}.00</div>
          <div className="cart-item__quantity">x{quantity}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
