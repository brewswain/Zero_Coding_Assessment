// This index.js file is used to allow a cleaner import statement strategy outside of this parent folder.
// For instance, if I wanted to import my Cart into App.js along with a Foo and a Bar component, we would do this:
//
// -- App.js --
// import { Cart, Foo, Bar } from './components'
//
// This helps reduce clutter when importing multiple components at the same time.

import Cart from "./Cart/Cart.component";
import CustomButton from "./CustomButton/CustomButton.component";
import CustomCard from "./CustomCard/CustomCard.component";
import LandingHero from "./LandingHero/LandingHero.component";
import ShopList from "./ShopList/ShopList.component";

export { Cart, CustomButton, CustomCard, LandingHero, ShopList };
