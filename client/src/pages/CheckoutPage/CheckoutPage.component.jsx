import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckoutItem } from "../../components";
import { selectCartItems } from "../../redux/cart/cartSlice";

import "./CheckoutPage.style.scss";

const CheckoutPage = () => {
  const cartItemState = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <div className="checkout__container">
      <div className="checkout__header">
        <h1 className="checkout__title">Products</h1>
        <div className="checkout-options__container">
          <h1 className="checkout__title">Price</h1>
          <h1 className="checkout__title">Quantity</h1>
          <h1 className="checkout__title">Total</h1>
        </div>
      </div>
      {cartItemState.length
        ? cartItemState.map((cartItem) => (
            <CheckoutItem key={cartItem._id} item={cartItem} />
          ))
        : null}
    </div>
  );
};

export default CheckoutPage;
