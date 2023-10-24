import Announcement from "../models/announcement.js"


export const createAnnouncement =async (req , res)=>{
    const announcement = new Announcement(req.body);

    try{
        const newAnnouncement = await announcement.save();

    }catch(error){
        res.status(501).json({message:"Internal server error"} , error);
    }
}



export const getAnnouncement = async (req , res)=>{
    try{
        const announcement = await Announcement.find();
        res.status(200).json(announcement);

    }catch(error){
        res.status(400).json({message:"Failed to fetch data for announcement"} ,error )
    }
}