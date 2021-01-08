import React from "react";
import { Cart, LandingHero } from "../../components";
import { Header, ShopList } from "../../partials";
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
