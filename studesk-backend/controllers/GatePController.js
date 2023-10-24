import Student from "../models/student.js";


export const PostGatePassReq = async (req , res)=>{

try{
    
    const student = await Student.findOneAndUpdate(
        {email : req.body.email},
        {
            $push:{
                GatePass:
                {data: req.body.data,approved:null}
                
            }  
        },
        {new:true}

    );
    res.json(student);
    
}catch(error){
    res.status(500).json({ error: "Internal server error" });
}
}



export const getAllStudentsFromHisClass = async(req , res)=>{
    try{
        
        
        const students =await  Student.find({class:req.body.class});
        res.json(students);
    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error or no Students found" });
    }

}

export const approveGatePass = async (req , res )=>{
    try{
        const student = await Student.findOne({email:req.body.email});
        const gatePasses = student.GatePass;
        if (gatePasses.length === 0) {
            return res.status(400).json({ error: "No gate passes available for this student" });
        }
        gatePasses[gatePasses.length-1].approved = "done";
        
        await Student.updateOne(
            {email:req.body.email},
            {GatePass:gatePasses}
        )
        const newstudent = await Student.findOne({email:req.body.email});
        
        res.status(201).json("Gate Pass successfully Approved");

    }catch(error){
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}