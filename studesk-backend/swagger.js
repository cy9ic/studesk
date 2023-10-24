import express from "express"
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
const options =  swaggerJSDoc.Options =
{
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Studesk Api",
            description:"Api made for studesk (2023 Full Stack project G-11 - Chitkara University)",
            contact:{
                name:"Harkaran",
                email:"harkaran0010@gmail.com"
            },
            servers:["http://localhost:4000","https://wild-rose-deer-kilt.cyclic.app"]
        },
        components:{
            securitySchemas:{
                bearerAuth:{
                    type:"http",
                    schema:"bearer",
                    bearerFormat:"JWT",
                },
            },
        },
        security:{
            bearerAuth:[]
        }

    },
    apis:[ "routes/*.js" , "index.js"]
};
const swaggerSpec = swaggerJSDoc(options);
function swaggerDocs(app , port){
app.use('/docs' , swaggerUi.serve  , swaggerUi.setup(swaggerSpec))
app.get('docs.json' ,(req , res)=>{
    res.setHeader('Content-Type' ,'application/json');
    res.send(swaggerSpec)
    log.info(`Docs available at http://localhost:${4000}/docs`)
})
}


export default swaggerDocs;