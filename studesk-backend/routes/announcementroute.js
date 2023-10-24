import express from "express"

const announcementRouter = express.Router();
import { createAnnouncement ,getAnnouncement } from "../controllers/Announcement.js";


/**
 * @openapi
 * /announcement/getAllAnnouncement:
 *   get:
 *     tags:
 *       - Announcement
 *     description: Responds with JSON object with all the announcement
 *     responses:
 *       '200':
 *         description: Announcement data
 * /announcement/create:
 *   post:
 *     tags:
 *       - Announcement
 *     description: Post an announcement
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *               class:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Successfully posted the announcement.

 *
*/


announcementRouter.post("/create" , createAnnouncement);
announcementRouter.get("/getAllAnnouncement" , getAnnouncement);
export default announcementRouter;