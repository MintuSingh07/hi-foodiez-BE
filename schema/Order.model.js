const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    tableNumber: {
        type: Number,
        require: true
    },
    items: {
        type: [String],
        require: true
    },
    createdAt: {
        type: Number,
        default: new Date()
    }
});

module.exports = mongoose.model("Order", orderSchema);