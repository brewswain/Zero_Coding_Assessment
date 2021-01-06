// This index.js file is used to allow a cleaner import statement strategy outside of this 'features' folder.
// For instance, if I wanted to import my Cart into App.js along with a Foo and a Bar component, we would do this:
//
// -- App.js --
// import { Cart, Foo, Bar } from './features'
//
// This helps reduce clutter when importing multiple components at the same time.

import Cart from "./cart/Cart.component";

export { Cart };
