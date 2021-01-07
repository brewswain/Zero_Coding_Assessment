const mongoose = require("mongoose");

// Note, if this was for a production environment I would use the required param,
// but as I'm just using this Schema to push 4 items that I personally tailored,
// this is fine.
const ShopItemSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  price: Number,
  imageUrl: String,
  backgroundColor: String,
});

mongoose.model("ShopItem", ShopItemSchema);
