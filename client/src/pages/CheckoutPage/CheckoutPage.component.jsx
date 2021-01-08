import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { CheckoutItem, CustomButton } from "../../components";
import { clearEntireCart, selectCartItems } from "../../redux/cart/cartSlice";

import "./CheckoutPage.style.scss";

const CheckoutPage = () => {
  const cartItemState = useSelector(selectCartItems);
  const dispatch = useDispatch();
  let history = useHistory();

  const [showMessage, setShowMessage] = useState(false);

  const itemTotals = cartItemState.map(
    (cartItem, index) => cartItem.price * cartItem.quantity
  );

  const subtotal = itemTotals.reduce((a, b) => a + b, 0);

  const simulatePayment = () => {
    setShowMessage(true);
    setTimeout(() => {
      // Cosmetic Timeout; staggered the cart clear in a separate timeout to make the
      // process seem less jarring
      dispatch(clearEntireCart(cartItemState));
    }, 500);
    setTimeout(() => {
      history.push("/shop");
    }, 1000);
  };

  return (
    <div className="checkout__container">
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <div className="alert__container">
          <div className="alert__message">Payment Accepted!</div>
        </div>
      </CSSTransition>
      <div className="checkout__header">
        <h1 className="checkout__title">Products</h1>

        <h1 className="checkout__title">Price</h1>
        <h1 className="checkout__title">Quantity</h1>
        <h1 className="checkout__title">Total</h1>
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
          customClass={`${
            !cartItemState.length ? "custom__button--disabled" : ""
          }`}
        >
          Pay Now
        </CustomButton>
      </div>
    </div>
  );
};

export default CheckoutPage;
