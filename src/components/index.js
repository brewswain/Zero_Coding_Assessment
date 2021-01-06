// This index.js file is used to allow a cleaner import statement strategy outside of this 'redux' folder.
// For instance, if I wanted to import my Cart into App.js along with a Foo and a Bar component, we would do this:
//
// -- App.js --
// import { Cart, Foo, Bar } from './components'
//
// This helps reduce clutter when importing multiple components at the same time.

import Cart from "./Cart/Cart.component";

export { Cart };
