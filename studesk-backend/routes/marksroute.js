import express from "express"

const MarksRouter = express.Router();
import { getMarks , postMarks } from "../controllers/MarksController.js";
MarksRouter.get('/:id',getMarks);
MarksRouter.post('/',postMarks);
export {MarksRouter}