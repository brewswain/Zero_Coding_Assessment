import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectVisible,
  toggleVisibility,
} from "../../redux/cart/cartSlice";
import CartItem from "../CartItem/CartItem.component";
import CustomButton from "../CustomButton/CustomButton.component";

import "./Cart.style.scss";

const Cart = () => {
  const isVisible = useSelector(selectVisible);
  const cartItemState = useSelector(selectCartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isVisible) {
      const cartModal = document.getElementById("cart__modal");
      cartModal.focus();
    }
  }, [isVisible]);

  return (
    <div>
      {isVisible ? (
        <div className="cart__container">
          <div
            className="cart__modal"
            id="cart__modal"
            tabIndex="0"
            autoFocus
            onBlur={() => {
              dispatch(toggleVisibility());
            }}
          >
            <div className="modal-item__container">
              {cartItemState.length ? (
                cartItemState.map((cartItem) => (
                  <CartItem key={cartItem._id} itemProps={cartItem} />
                ))
              ) : (
                <div className="modal-item__container--empty">
                  Your cart is empty :(
                </div>
              )}
            </div>
            <div className="modal-button__container">
              <CustomButton>Checkout</CustomButton>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
