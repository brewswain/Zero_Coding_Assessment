import React from "react";
import { Cart } from "../../components";
import { Header } from "../../partials";
import "./HomePage.style.scss";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Cart />
    </div>
  );
};

export default HomePage;
