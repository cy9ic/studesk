import express from "express";
const gprouter = express.Router();

import { PostGatePassReq  , approveGatePass, getAllStudentsFromHisClass} from "../controllers/GatePController.js";

gprouter.post('/create' , PostGatePassReq);
gprouter.get("/StudentsInClass" ,getAllStudentsFromHisClass)
gprouter.post("/approve" , approveGatePass);
export {gprouter};