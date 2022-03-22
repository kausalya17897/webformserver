import db from '../mongo.js';
import { ObjectId } from 'mongodb';

const service={
   async getEmployee(request,response){
        try{
            const data=await db.employee.find().toArray();
            console.log("employee fetched")
            response.json({status:"success",data});
                }catch(err){
                    console.log(" error in employee fetching")
                    response.json({status:"error",error:err})
                }
    },
    async addEmployee(request,response){
        try{
            const {insertedId:_id}=await db.employee
            .insertOne(request.body);
            console.log("employee inserted",_id,request.body)
            response.json({status:"success",data:{ _id, ...request.body}});
        console.log("employee added")
        console.log("log")
                }catch(err){
                    console.log("error in employee inserted")
                    response.json({ status: "error", error: "Cannot insert employee" });
                }
    },
    async updateEmployee(request,response){
        try{

            //validation params and body
            //validation indb
            const {value}=await db.employee
            .findOneAndUpdate(
                {_id:ObjectId(request.params.id)},
                {$set:{...request.body}},
                {returnDocument:"after"});
               //new version mongodb {returnNewDocument:"true"}
               console.log("employee edited",request.params.id,request.body)
            response.json({status:"success",data:value});
                }catch(err){
                    console.log("error in employee edited")
                    response.json({status:"error",error:"Cannot update"});
                }
    },
    async deleteEmployee(request,response){
        try{
            await db.employee
            .deleteOne({_id:ObjectId(request.params.id)});
            console.log("employee deleted",request.params.id)
            response.json({status:"success"})
        }catch(err){
            console.log("error in employee deleted")
            response.json({status:"err",error:"cannot delete"})
        }
    }
}
export default service;