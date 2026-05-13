const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: { type: String },
    stateId: { type: Number },
    img: { type: String },
    food: [
        {
            name: { type: String },
            mealTypeId: { type: Number },
            cuisine: { type: String },
            price: { type: Number }
        }
    ]
});

module.exports = mongoose.model("Restaurant", restaurantSchema);