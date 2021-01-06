import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cart/cartSlice";

import "./Cart.style.scss";

const Cart = () => {
  const cart = useSelector(selectCart);

  return <div>{cart ? <div>hi</div> : null}</div>;
};

export default Cart;
