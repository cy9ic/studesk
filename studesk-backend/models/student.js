import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    class:String,       
    email:String,
    GatePass:Array,
    enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const Student = mongoose.model('Student', studentSchema); 
export default Student