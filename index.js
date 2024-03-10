const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors');
const Menu = require("./schema/Menu.model");
const Order = require('./schema/Order.model');
const bodyParser = require("body-parser");
const app = express()
const PORT = 8000
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB)
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
  console.log(req.body);
  const { tb_no, selectedItems } = req.body;

  try {
    const requestedOrder = new Order({
      tableNumber: tb_no,
      items: selectedItems
    });
    requestedOrder.save()
    res.status(200).json({ message: "Order Placed Sucessfully", tb_no, selectedItems })
  } catch (error) {
    res.status(400).json({ error: "Error is: ", error })
  }
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})