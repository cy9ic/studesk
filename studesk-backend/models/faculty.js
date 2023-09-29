import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    coursesTaught: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

module.exports = mongoose.model('Faculty', facultySchema);