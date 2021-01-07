const mongoose = require("mongoose");

// Note, if this was for a production environment I would use the required param,
// but as I'm just using this Schema to push 4 items that I personally tailored,
// this is fine.
const ShopItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  backgroundColor: {
    type: String,
    required: true,
  },
});

mongoose.model("ShopItem", ShopItemSchema);
