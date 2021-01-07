import React from "react";
import { useDispatch } from "react-redux";
import { toggleVisibility } from "../../redux/cart/cartSlice";
import "./Header.style.scss";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header__container">
      <div className="links__container">
        <div className="header__link header__link--primary">
          Random Store no. 1
        </div>
      </div>
      <div className="links__container">
        <div
          className="header__link"
          onClick={() => dispatch(toggleVisibility())}
        >
          Cart
        </div>
        <div className="header__link">Checkout</div>
      </div>
    </div>
  );
};

export default Header;
