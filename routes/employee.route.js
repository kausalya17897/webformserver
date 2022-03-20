import express from "express";
import service from "../services/employee.service.js";
const route=express.Router();

route.get("/",service.getEmployee)
route.post("/",service.addEmployee)
route.put("/:id", service.updateEmployee)
route.delete("/:id",service.deleteEmployee)    

export default route;