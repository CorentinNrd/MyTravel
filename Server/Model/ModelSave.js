const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SaveSchema = new Schema({
    id_travel: { type: String, required: true },
    id_user: { type: String, required: true }
}, { timestamps: true });

var Save = mongoose.model('Save', SaveSchema);
module.exports = Save;