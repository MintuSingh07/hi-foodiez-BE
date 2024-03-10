const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    tableNumber: {
        type: Number,
        require: true
    },
    items: [{
        name: String,
        quantity: Number
    }],
    createdAt: {
        type: Number,
        default: new Date()
    }
});

module.exports = mongoose.model("Order", orderSchema);