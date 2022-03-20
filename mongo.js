import { MongoClient } from 'mongodb';
//mongo connection
//const MONGO_URL="mongodb://localhost:27017";
//const MONGO_DBNAME="employeedatabase";

const mongo={
db:null,
employee:null,
consultancy:null,
parttime:null,
async connect(){
    
    const client=new MongoClient(process.env.MONGO_URL);
    await client.connect();
    console.log(`mongodb connected to ${process.env.MONGO_URL}`);
   
    this.db=client.db(process.env.MONGO_DBNAME);
    console.log(`MongoDb selected to ${process.env.MONGO_DBNAME}`)
    this.employee=this.db.collection("employee");
    this.consultancy=this.db.collection("consultancy");
    this.parttime=this.db.collection("parttime");
    console.log("mongodb collections");
},
}
export default mongo;
