const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String
    },
    isVeg:{
        type: Boolean,
        default: true
    },
    price: {
        type: Number,
        require: true
    },
    ingredients: [{
        type: String,
        require: true
    }],
    image:{
        type: String,
        // required: true
    }
});

module.exports = mongoose.model("Menu", menuSchema);