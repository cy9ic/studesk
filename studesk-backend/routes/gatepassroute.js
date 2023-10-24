import express from "express";
const gprouter = express.Router();

import { PostGatePassReq  , approveGatePass, getAllStudentsFromHisClass} from "../controllers/GatePController.js";


/**
 * @openapi
 * /gatepass/create:
 *   post:
 *     tags:
 *       - GatePass
 *     description: Make a gate pass request to the assignned mentor and the request will go to the teacher's account to approve.
*     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               studentName:
 *                 type: string
 *               studentID:
 *                 type: string
 *               purpose:
 *                 type: string
 *               fromDate:
 *                 type: string
 *                 format: date
 *               toDate:
 *                 type: string
 *                 format: date
 *               contactNumber:
 *                 type: string
 *               comments:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Responds with the gate pass request which was made.
 * 
 * /gatepass/approve:
 *   post:
 *     tags:
 *       - GatePass
 *     description: This request will be made by the faculty member to the approve the gatepass of the student.
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
 *       '201':
 *         description: Responds with Gate Pass successfully approved.
 */


gprouter.post('/create' , PostGatePassReq);
gprouter.get("/StudentsInClass" ,getAllStudentsFromHisClass)
gprouter.post("/approve" , approveGatePass);
export {gprouter};