const express = require('express');
const { default: mongoose } = require('mongoose');
const Menu = require("./schema/Menu.model");
const Order = require('./schema/Order.model');
const app = express()
const PORT = 8000
require('dotenv').config();


mongoose.connect("mongodb://localhost:27017/hifoodiez" || process.env.MONGODB)
  .then(() => console.log("DB connected sucessfully"))
  .catch((err) => console.log("Error is:", err))

// GET ALL MENU ITEM ✅
app.get("/menu", async (req, res) => {
  const tb_no = req.query.tb_no;
  const fullMenu = await Menu.find({});
  res.status(200).json({ message: "Get all menu", tb_no, fullMenu })
})

// Order
app.post("/order", async (req, res) => {
  const { tb_no, selectedItems } = req.body;

  try {
    const requestedOrder = await Order.create({
      tb_no,
      items: selectedItems
    });
    requestedOrder.save()
    res.status(200).json({message: "Order Placed Sucessfully", tb_no, selectedItems})
  } catch (error) {
    res.status(400).json({error: "Error is: ", error})
  }
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})