import express from 'express'
import { response } from 'express';
import mongo from './mongo.js';
import employeeRoute from './routes/employee.route.js';
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();
(async()=>{ 

    try{
const app=express();
//const PORT=9001;
//middleware
app.use(express.json());

app.use(cors());
//mongo connection
await mongo.connect();

//Routers
app.get("/",(request,response)=>{
response.send("Hello employees")
})

app.use("/employee", employeeRoute)
app.listen(process.env.PORT,()=>console.log(`mongo db connected port ${process.env.PORT}`))
    }
    catch(err){
console.error("error starting")
    }
})();
