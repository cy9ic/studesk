import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express"
import express from "express"
import * as dotenv from 'dotenv';
import bodyParser from "body-parser";
import cors from "cors"
dotenv.config();

const app = express();


//  Middleware
const swaggerOptions = 
{
    swaggerDefinition:{
        info:{
            title:"Studesk Api",
            description:"Api made for studesk (2023 Full Stack project G-11 - Chitkara University)",
            contact:{
                name:"Harkaran",
                email:"harkaran0010@gmail.com"
            },
            servers:["http://localhost:4000","https://wild-rose-deer-kilt.cyclic.app"]
        }

    }, 
    apis:[ "routes/*.js" , "index.js"]
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs" , swaggerUi.serve , swaggerUi.setup(swaggerDocs));
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
// import { coursesRouter } from './routes/courses.js';
// import { announcementsRouter } from './routes/announcements.js';
// import { usersRouter } from './routes/users.js';



app.use('/students', studentsRouter);
app.use('/faculty' ,facultyRouter);
app.use('/user' , UserRoute);
app.use('/marks',MarksRouter);
app.use('/gatepass' , gprouter);
// app.use('/faculty', facultyRouter);
// app.use('/courses', coursesRouter);
// app.use('/announcements', announcementsRouter);
// app.use('/users', usersRouter);

/**
 * @swagger
 * /student:
 *   get:
 *      description : Get the json object containing all the students in the database
 *      responses :
 *        '200':
 *          description: Got the list of all the Students
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
    
})