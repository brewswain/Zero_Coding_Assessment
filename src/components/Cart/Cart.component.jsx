import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCart, toggleVisibility } from "../../redux/cart/cartSlice";

import "./Cart.style.scss";

const Cart = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(toggleVisibility())}>
        Click to see cart
      </button>

      {cart ? <div>hi</div> : null}
    </div>
  );
};

export default Cart;
