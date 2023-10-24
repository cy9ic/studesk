import express  from "express";
const facultyRouter = express.Router();

import { getAllFaculty  , delFacultyById , getFacultyById , updateFacultyById ,createFaculty } from "../controllers/FacultyContoller.js";

/**
 * @openapi
 * /faculty:
 *   get:
 *     tags:
 *       - FacultyData
 *     description: Responds with JSON object of all the faculty in database.
 *     responses:
 *       '200':
 *         description: Responds with the data of all the faculty
 *   post:
 *     tags:
 *       - FacultyData
 *     description: Create a new faculty member
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
 *               coursesTaught: 
 *                 type: array
 *     responses:
 *       '201':
 *         description: Faculty member created successfully
 *
 * /faculty/email:
 *   post:
 *     tags:
 *       - FacultyData
 *     description: Get a specific faculty member by email address
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Responds with the data of the specified faculty member
*/


facultyRouter.post('/email' , getFacultyById)
facultyRouter.post('/' , createFaculty);
facultyRouter.delete('/:id' , delFacultyById);
facultyRouter.put('/:id', updateFacultyById);
facultyRouter.get('/' , getAllFaculty);
export {facultyRouter}
