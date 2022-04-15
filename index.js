import express from "express";
import { response } from "express";
import mongo from "./mongo.js";
import employeeRoute from "./routes/employee.route.js";
import dotenv from "dotenv";
import cors from "cors";

(async () => {
  try {
    const app = express();
    app.use(cors());
    dotenv.config();

    //const PORT=9001;
    const PORT = process.env.PORT || 9001;
    //middleware

    app.use(express.json());

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
