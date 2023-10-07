import mongoose from 'mongoose';

const marksSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    DSA : {
        type:Number,
        required:true
    },
    FEE : {
        type:Number,
        required:true
    },
    PA : {
        type:Number,
        required:true
    },
    VES : {
        type:Number,
        required:true
    },
    NALR : {
        type:Number,
        required:true
    }

});

const Marks = mongoose.model('Marks', marksSchema);

export default Marks;