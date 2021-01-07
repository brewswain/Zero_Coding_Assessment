import React, { useEffect } from "react";
import { CustomCard } from "..";
import { shopData } from "../../data/data";
import shopItemsApi from "../../api/shopItems";

import "./ShopList.style.scss";

const ShopList = () => {
  //testing data retrieval
  useEffect(() => {
    async function getData() {
      const response = await shopItemsApi.get("/shopItems");
      console.log(response.data);
    }
    getData();
  }, []);

  return (
    <div className="shoplist__container">
      {shopData.map((item) => (
        <CustomCard key={item.id} item={item} />
      ))}
    </div>
  );
};
export default ShopList;
