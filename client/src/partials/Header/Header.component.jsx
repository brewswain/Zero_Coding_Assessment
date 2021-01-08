import React from "react";
import { useDispatch } from "react-redux";
import { toggleVisibility } from "../../redux/cart/cartSlice";
import { Link } from "react-router-dom";
import "./Header.style.scss";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header__container">
      <div className="links__container">
        <Link to="/">
          <div className="header__link header__link--primary">
            Random Store no. 1
          </div>
        </Link>
      </div>
      <div className="links__container">
        <div
          className="header__link"
          onClick={() => dispatch(toggleVisibility())}
        >
          Cart
        </div>
        <Link to="/shop">
          <div className="header__link">Shop</div>
        </Link>
        <Link to="/checkout">
          <div className="header__link">Checkout</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
