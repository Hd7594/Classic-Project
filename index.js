const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

const groceriesRoutes = require("./routes/groceries");
app.use(groceriesRoutes);
app.listen(process.env.PORT, (req, res) => {
  console.log("server ON");
});
