import express from 'express';
const studentsRouter = express.Router();
import { getAllStudents , createStudent,getStudentById,updateStudent,deleteStudent } from '../controllers/StudentController.js';


/**
 * @openapi
 * /students:
 *   get:
 *     tags:
 *       - StudentData
 *     description: Responds with JSON object of all the students in database.
 *     responses:
 *       '200':
 *         description: Responds with the data of all the faculty
 *   post:
 *     tags:
 *       - StudentData
 *     description: Create a new Student in the college database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               email:
 *                 type: string
 *               lastName:
 *                 type: string
 *               class:
 *                 type: string
 *               password:
 *                 type: string
 *               dateOfBirth:
 *                 type: date
 *               enrolledCourses:
 *                 type: Array
 *               GatePass:
 *                 type: Array
 *     responses:
 *       '201':
 *         description: Student created successfully
 * /gatepass/StudentsInClass:
 *   get:
 *     tags:
 *       - StudentData
 *     description: Get all students in a specific class
 *     parameters:
 *       - name: class
 *         in: query
 *         description: Class name to filter students
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Responds with the data of students in the specified class
 */


studentsRouter.get('/', getAllStudents);
studentsRouter.post('/', createStudent);
studentsRouter.get('/:id', getStudentById);
studentsRouter.put('/:id', updateStudent);
studentsRouter.delete('/:id', deleteStudent);
export { studentsRouter };