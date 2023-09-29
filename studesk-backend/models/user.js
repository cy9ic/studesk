import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    role: String
});

module.exports = mongoose.model('User', userSchema);