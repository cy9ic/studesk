import mongoose from "mongoose"

const announcementSchema = new mongoose.Schema({
    content: String,
    class:String,
});

const Announcement= mongoose.model('Announcement', announcementSchema);
export default Announcement;