const express = require("express");
const router = express.Router();

const Groceries = require("../model/Groceries");

router.post("/groceries/new", async (req, res) => {
  try {
    const { day, name, supermarket, quantity, price, unityCurrency } = req.body;
    const newGroceries = new Groceries({
      day: day,
      name: name,
      supermarket: supermarket,
      quantity: quantity,
      price: price,
      unityCurrency: unityCurrency,
    });
    await newGroceries.save();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/groceries/complete", async (req, res) => {
  try {
    /*
    const groceriesList = await Groceries.findById(req.query.id);
    if (!req.query.id) {
      res.json({ message: "missing id" });
    } else {
      res.json(groceriesList);
    }
    */
    const list = await Groceries.find();
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/groceries/update", async (req, res) => {
  try {
    const updateList = await Groceries.findByIdAndUpdate(req.body.id, {
      supermarket: req.body.supermarket,
    });
    if (!req.body.id || !req.body.supermarket) {
      res.json({ message: "missing parameters" });
    } else {
      await updateList.save();
      res.json(updateList);
    }
    //supermarket , changer de lieu pour faire les courses
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/groceries/delete", async (req, res) => {
  try {
    await Groceries.findByIdAndDelete(req.body.id);
    if (!req.body.id) {
      return res.json({ message: "missing id" });
    } else {
      res.json({ message: "list deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
