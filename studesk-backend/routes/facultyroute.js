import express  from "express";
const facultyRouter = express.Router();

import { getAllFaculty  , delFacultyById , getFacultyById , updateFacultyById ,createFaculty } from "../controllers/FacultyContoller.js";

facultyRouter.get('/' , getAllFaculty);
facultyRouter.get('/email' , getFacultyById)
facultyRouter.post('/' , createFaculty);
facultyRouter.delete('/:id' , delFacultyById);
facultyRouter.put('/:id', updateFacultyById);
export {facultyRouter}
