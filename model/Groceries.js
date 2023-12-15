const mongoose = require("mongoose");

const Groceries = mongoose.model("Groceries", {
  day: String,
  name: String,
  supermarket: String,
  quantity: Number,
  price: Number,
  unityCurrency: String,
});

module.exports = Groceries;
