import express from "express";
import { response } from "express";
import mongo from "./mongo.js";
import employeeRoute from "./routes/employee.route.js";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";

(async () => {
  try {
    dotenv.config();
    const app = express();
    //const PORT=9001;
    const PORT = process.env.PORT;
    //middleware
    app.use(express.json());

    app.use(cors());
    //mongo connection
    await mongo.connect();

    //Routers
    app.get("/", (request, response) => {
      response.send("Hello employees");
    });

    app.use("/employee", employeeRoute);
    app.listen(PORT, () => console.log(`mongo db connected port ${PORT}`));
  } catch (err) {
    console.error("error starting");
  }
})();
