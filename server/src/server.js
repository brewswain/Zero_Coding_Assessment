// Ensure that models are required above our routes
require("./models/shopItem.model");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const shopItemRoute = require("./routes/shopItem.route");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// bodyParser placed above any potential routes that need JSON responses
app.use(bodyParser.json());
app.use(cors());
app.use(shopItemRoute);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to Mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
