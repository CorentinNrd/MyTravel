const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, trim: true },
    password: { type: String, required: true },
    roles: { type: String, default: "User" }
}, { timestamps: true });

var User = mongoose.model('User', UserSchema);
module.exports = User;