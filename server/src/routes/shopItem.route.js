const express = require("express");
const mongoose = require("mongoose");

const ShopItem = mongoose.model("ShopItem");

const router = express.Router();

// In this case, the decision to not use an authentication method was
// chosen as this route was made to simply add 4 items to our backend.
router.post("/addItems", async (req, res) => {
  // This If-Then-Else statement is put in for testing purposes only.
  // If the user were to load our shop page, the client would make an axios
  // request that has a 'data' object attached to the body.
  // If we were to make a postman request by simply adding a JSON to the body,
  // it won't have the data object. Thus, the else statement exists for postman
  // testing.
  // Please note that this will be removed after sending this WIP version.
  if (req.body.data) {
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
  } else {
    try {
      const { title, subtitle, price, imageUrl, backgroundColor } = req.body;
      const shopItem = new ShopItem({
        title,
        subtitle,
        price,
        imageUrl,
        backgroundColor,
      });

      await shopItem.save();
      res.send(req.body);
    } catch (error) {
      return res.status(422).send(error.message);
    }
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
