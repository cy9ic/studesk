import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    isPresent: {
        type: Boolean,
        default: false
    }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);
export default Attendance;



