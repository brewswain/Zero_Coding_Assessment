const mongoose = require("mongoose");

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
