import Faculty from "../models/faculty.js";
import Student from "../models/student.js";

//Get all the faculty
export const getAllFaculty = async (req , res  )=>{
    try{
        const faculty = await Faculty.find();
        res.json(faculty);

    }catch(error){
        res.status(500).json({message:error.message});
    }

}


//Get a specific Faculty By Id
export const getFacultyById = async(req , res)=>{
    try{
        const faculty = await Faculty.findOne(req.body.email);
        if(!faculty){
            return res.status(404).json({message :"Faculty not found "})
        }
        res.json(faculty);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}


//  Create a new faculty
export const createFaculty = async(req , res )=>{
    const faculty = new Faculty(req.body);
    try{
        const newFaculty = await faculty.save();
        res.status(201).json(newFaculty);

    }catch(error){
        res.status(400).json({message:error.message});
    }
}


// Update a Faculty By Id
export const updateFacultyById = async (req , res)=>{
    try{
        const updateFac = await Faculty.findByIdAndUpdate(req.parms.id , req.body ,{new:true});
        if(!updateFac){
            return res.status(404).json({message:"Student not found"})
        }
    }catch(error){
        res.status(400).json({message:error.message});
    }
}



// Delete a Faculty By Id

export const delFacultyById = async (req , res)=>{
    try{
        const delUser = await Faculty.findByIdAndDelete(req.params.id);
        if(!delUser){
            return res.status(404).json("Student Not Found");
        }
        res.json({message:"Faculty Deleted Succesfully"});

    }catch(error){
        res.status(500).json({ message: error.message });
    }
}


