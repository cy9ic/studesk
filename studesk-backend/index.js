import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express"
import express from "express"
import * as dotenv from 'dotenv';
import bodyParser from "body-parser";
import cors from "cors"
dotenv.config();
import * as s from"./swagger.js"
import swaggerDocs from "./swagger.js";
const app = express();


app.use(bodyParser.json());
app.use(cors())

//Connecting to database
import "./config/db.js"  


// Define routes
import { studentsRouter } from './routes/students.js';
import { facultyRouter } from "./routes/facultyroute.js";
import { UserRoute } from "./routes/userroute.js";
import {MarksRouter} from "./routes/marksroute.js"
import {gprouter}  from "./routes/gatepassroute.js"
import announcementRouter from "./routes/announcementroute.js"

// http://localhost:4000/announcement/getAllAnnouncement
// http://localhost:4000/announcement/create
// http://localhost:4000/marks/harkaran@gmail.com
// http://localhost:4000/marks/ for posting


app.use('/students', studentsRouter);
app.use('/faculty' ,facultyRouter);
app.use('/user' , UserRoute);
app.use('/marks',MarksRouter);
app.use('/gatepass' , gprouter);
app.use('/announcement' , announcementRouter);




/**
 * @ 
 * /students:
 *   get:
 *      description : Get the json object containing all the students in the database
 *      responses :
 *        '200':
 *          description: Get the list of all the Students studying the college 
 *         
 *         */



app.get("/cut" , (req , res )=>{
    res.send("Done");
})

app.get("/" , (req , res)=>{
    res.send("Working")
})
app.listen(process.env.PORT, ()=>{
    console.log("Server is Working")
    swaggerDocs(app , 4000);
})