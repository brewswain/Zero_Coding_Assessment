import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";

import {
  getShopItems,
  // addShopItems,
} from "./redux/shopItems/shopItemsSlice";
import { CheckoutPage, HomePage, ShopPage } from "./pages";
import { Header } from "./partials";
import { Cart } from "./components";

function App() {
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
  return (
    <div className="App">
      <Header />
      <Cart />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
}

export default App;
