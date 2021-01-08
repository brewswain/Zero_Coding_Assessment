import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getShopItems,
  // addShopItems,
  selectShopItems,
} from "../../redux/shopItems/shopItemsSlice";
import { CustomCard } from "../../components";

import "./ShopList.style.scss";

const ShopList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShopItems());

    // Left in to show how we added items to our database. Check our shopItemsSlice for more code.
    // In a more controlled environment, we would probably set up an admin page of some sort to
    // add the content we need in a less potentially destructive manner, but for now I deemed it
    // well enough to take our existing data.js file and programmatically add everything to our
    // database in one fell swoop

    // dispatch(addShopItems());
  }, [dispatch]);

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
