import mongoose, { model } from "mongoose"
import * as dotenv from 'dotenv';
dotenv.config();
mongoose.connect(`${process.env.DBURL}`,
{
    useNewUrlParser:true , 
    useUnifiedTopology:true,
});
const db=mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

