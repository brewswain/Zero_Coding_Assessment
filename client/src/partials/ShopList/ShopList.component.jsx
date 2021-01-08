import React from "react";
import { useSelector } from "react-redux";
import { selectShopItems } from "../../redux/shopItems/shopItemsSlice";
import { CustomCard } from "../../components";

import "./ShopList.style.scss";

const ShopList = () => {
  const shopItemState = useSelector(selectShopItems);

  return (
    <div className="shoplist__container">
      {shopItemState.map((item) => (
        <CustomCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ShopList;
