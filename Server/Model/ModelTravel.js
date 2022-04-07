const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TravelSchema = new Schema({
    destination: { type: String },
    price: { type: String, required: true },
    informations: { type: String, required: true }
}, { timestamps: true });

var Travel = mongoose.model('Travel', TravelSchema);
module.exports = Travel;