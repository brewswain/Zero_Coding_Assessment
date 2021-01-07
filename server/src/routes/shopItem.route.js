const express = require("express");
const mongoose = require("mongoose");

const ShopItem = mongoose.model("ShopItem");

const router = express.Router();

// In this case, the decision to not use an authentication method was
// chosen as this route was made to simply add 4 items to our backend.
router.post("/addItems", async (req, res) => {
  try {
    for (let item of req.body.data) {
      const { title, subtitle, price, imageUrl, backgroundColor } = item;
      const shopItem = new ShopItem({
        title,
        subtitle,
        price,
        imageUrl,
        backgroundColor,
      });

      console.log({ item });

      await shopItem.save();
    }
    res.send(req.body);
  } catch (error) {
    // Returns status of 422 to obfuscate the actual problem in the
    // event of somebody trying to glean info about our backend.
    return res.status(422).send(error.message);
  }
});

router.get("/shopItems", async (req, res) => {
  const shopItems = await ShopItem.find({});

  const shopItemArray = [];
  shopItems.forEach((shopItem) => {
    shopItemArray.push(shopItem);
  });

  res.send(shopItemArray);
});

module.exports = router;
