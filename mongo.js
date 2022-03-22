import { MongoClient } from 'mongodb';
import dotenv from 'dotenv'
dotenv.config();
//mongo connection
//const MONGO_URL="mongodb://localhost:27017";
//const MONGO_DBNAME="employeedatabase";

const MONGO_URL=process.env.MONGO_URL;
const MONGO_DBNAME=process.env.MONGO_DBNAME

const mongo={
db:null,
employee:null,

async connect(){
    
    const client=new MongoClient(MONGO_URL);
    await client.connect();
    console.log(`mongodb connected `);
   
    this.db=client.db(MONGO_DBNAME);
    console.log(`MongoDb selected to ${MONGO_DBNAME}`)
    this.details = this.db.collection("employee");
    
    console.log("mongodb collections");
},
}
export default mongo;
