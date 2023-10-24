import express from "express"

const announcementRouter = express.Router();
import { createAnnouncement ,getAnnouncement } from "../controllers/Announcement.js";

announcementRouter.post("/create" , createAnnouncement);
announcementRouter.get("/getAllAnnouncement" , getAnnouncement);
export default announcementRouter;