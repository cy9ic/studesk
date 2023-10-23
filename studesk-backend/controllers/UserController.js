import User from "../models/user.js";

// Create a new User
export const createUser = async (req , res)=>{
    const user = new User(req.body);
    try{
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    }catch(error){
        res.status(400).json({message:error.message});
    }
}


// Authenticate a User

export const authenticateUser = async(req , res)=>{
    const {email , password , role} = req.body;
        try{
            const user = await User.findOne({email});
            if(!user){
                return res.status(401).json({ error: 'Invalid email or password' });
            }
            const isPassword = user.password === password;
            if(!isPassword){
                return res.status(401).json({error:'Invalid email or password'});
            }
            res.json({message:"Authentication succesfull" , user});
        
        }catch(error){
            console.error(error);
            res.status(500).json({message:error.message});
        }
}