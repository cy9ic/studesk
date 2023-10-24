import Marks from "../models/marks.js";

export const getMarks = async (req , res)=>{
    
    const Markss = await Marks.findOne({email:req.body.email});
    try{
        if(!Markss){
            return res.status(404).json({message:"Student's Marks not Found!"});
        }
        res.json(Markss);

    }catch(error){
        res.status(500).json({message:error.message});
    }

}


export const postMarks =async (req,res)=>{
    const Markss = new Marks(req.body)
    try{
        const newFac = await Markss.save();
        res.status(201).json(newFac);

    }catch(error){
        res.status(400).json({message:error.message});
    }
}