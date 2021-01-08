// This index.js file is used to allow a cleaner import statement strategy outside of this parent folder.
// For instance, if I wanted to import my Cart into App.js along with a Foo and a Bar component, we would do this:
//
// -- App.js --
// import { Cart, Foo, Bar } from './components'
//
// This helps reduce clutter when importing multiple components at the same time.

import Cart from "./Cart/Cart.component";
import CartItem from "./CartItem/CartItem.component";
import CheckoutItem from "./CheckoutItem/CheckoutItem.component";
import CustomButton from "./CustomButton/CustomButton.component";
import CustomCard from "./CustomCard/CustomCard.component";
import LandingContainer from "./LandingContainer/LandingContainer.component";
import LandingHero from "./LandingHero/LandingHero.component";
import LandingImageBox from "./LandingImageBox/LandingImageBox.component";

export {
  Cart,
  CartItem,
  CheckoutItem,
  CustomButton,
  CustomCard,
  LandingContainer,
  LandingHero,
  LandingImageBox,
};
