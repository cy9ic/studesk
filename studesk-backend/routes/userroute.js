import express from "express"
const UserRoute = express.Router();

import { createUser , authenticateUser } from "../controllers/UserController.js";

UserRoute.post('/create',createUser);
UserRoute.post('/authenticate',authenticateUser);

export {UserRoute}