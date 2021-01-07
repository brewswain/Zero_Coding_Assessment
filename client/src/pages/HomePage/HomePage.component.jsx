import React from "react";
import { Cart, LandingHero, ShopList } from "../../components";
import { Header } from "../../partials";
import "./HomePage.style.scss";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Cart />
      <LandingHero />
      <ShopList />
    </div>
  );
};

export default HomePage;
