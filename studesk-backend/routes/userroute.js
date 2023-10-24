import express from "express"
const UserRoute = express.Router();

import { createUser , authenticateUser } from "../controllers/UserController.js";
/**
 * @openapi
 * /user/authenticate:
 *   post:
 *     tags:
 *       - User
 *     description: Authentication route for user Authentication on frontend
*     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Responds with Authentication Successfull and a object containing the data of the logged in user.
 * 
 * /user/create:
 *   post:
 *     tags:
 *       - User
 *     description: User SignUp
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Responds with the newly made user.
 */

UserRoute.post('/create',createUser);
UserRoute.post('/authenticate',authenticateUser);

export {UserRoute}