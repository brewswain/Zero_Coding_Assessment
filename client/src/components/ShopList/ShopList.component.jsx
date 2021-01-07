import React from "react";
import { CustomCard } from "..";
import { shopData } from "../../data/data";

import "./ShopList.style.scss";

const ShopList = () => {
  return (
    <div className="shoplist__container">
      {shopData.map((item) => (
        <CustomCard key={item.id} item={item} />
      ))}
    </div>
  );
};
export default ShopList;
