import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    class:String,
    password: String,
    coursesTaught: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    gatePasses:[],
});

const Faculty = mongoose.model('Faculty', facultySchema);
export default Faculty;