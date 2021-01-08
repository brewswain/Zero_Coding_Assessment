import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckoutItem, CustomButton } from "../../components";
import { useHistory } from "react-router-dom";

import { clearEntireCart, selectCartItems } from "../../redux/cart/cartSlice";

import "./CheckoutPage.style.scss";

const CheckoutPage = () => {
  const cartItemState = useSelector(selectCartItems);
  const dispatch = useDispatch();
  let history = useHistory();

  const itemTotals = cartItemState.map(
    (cartItem, index) => cartItem.price * cartItem.quantity
  );

  const subtotal = itemTotals.reduce((a, b) => a + b, 0);

  const simulatePayment = () => {
    alert("Congrats! you just made a payment like the cool kids :O");
    dispatch(clearEntireCart(cartItemState));
    history.push("/shop");
  };

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

      <div className="checkout-payment__container">
        <h1 className="checkout__title checkout__subtotal">
          Subtotal: ${subtotal}.00
        </h1>
        <CustomButton
          large
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
          onClick={simulatePayment}
        >
          Pay Now
        </CustomButton>
      </div>
    </div>
  );
};

export default CheckoutPage;
