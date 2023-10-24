import express from "express"

const MarksRouter = express.Router();
import { getMarks , postMarks } from "../controllers/MarksController.js";


/**
 * @openapi
 * /marks/post:
 *   post:
 *     tags:
 *       - Marks
 *     description: Post the marks for a studdent.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               DSA:
 *                 type: number
 *               FEE:
 *                 type: number
 *               NALR:
 *                 type: number
 *               VES:
 *                 type: number
 *               PA:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Student marks posted successfully.
 * 
 * /marks/getMarks:
 *   post:
 *     tags:
 *       - Marks
 *     description: Gets the marks of the particular student.
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
 *         description: Responds with the marks of the student
 */

MarksRouter.post('/getMarks',getMarks);
MarksRouter.post('/post',postMarks);
export {MarksRouter}