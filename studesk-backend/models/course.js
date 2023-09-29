import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name: String,
    code: String,
    faculty: { type: mongoose.Schema.Types.ObjectId, ref: 'Faculty' },
    studentsEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]
});

module.exports = mongoose.model('Course', courseSchema);