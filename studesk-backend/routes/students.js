import express from 'express';
const studentsRouter = express.Router();
import { getAllStudents , createStudent,getStudentById,updateStudent,deleteStudent } from '../controllers/StudentController.js';
studentsRouter.get('/', getAllStudents);
studentsRouter.post('/', createStudent);
studentsRouter.get('/:id', getStudentById);
studentsRouter.put('/:id', updateStudent);
studentsRouter.delete('/:id', deleteStudent);
export { studentsRouter };