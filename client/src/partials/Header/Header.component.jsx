import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleVisibility, selectCartItems } from "../../redux/cart/cartSlice";
import "./Header.style.scss";
import { ShoppingCart } from "../../assets";

const Header = () => {
  const dispatch = useDispatch();
  const cartItemState = useSelector(selectCartItems);

  const totalQuantities = cartItemState.map(
    (cartItem, index) => cartItem.quantity
  );

  const summedQuantities = totalQuantities.reduce((a, b) => a + b, 0);

  return (
    <div className="header__container">
      <div className="links__container">
        <Link to="/" className="header__link">
          <div className="header__link--primary">Eden</div>
        </Link>
      </div>
      <div className="links__container">
        <div
          className="header__link header-icon__container"
          onClick={() => dispatch(toggleVisibility())}
        >
          <ShoppingCart className="header__icon" />
          <span className="cart__quantity">{summedQuantities}</span>
        </div>
        <Link to="/shop" className="header__link">
          <div>Shop</div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div>Checkout</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
