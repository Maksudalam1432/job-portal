import express from "express";
import isAuthenticated from "../middlewares/IsAuth.js";
import { getAdminJobs,  getalljobs, getJobById, postJob } from "../Controllers/job_controlles.js";

const jobroute = express.Router();

jobroute.post("/post", isAuthenticated, postJob);
jobroute.get("/get", isAuthenticated, getalljobs);
jobroute.get("/admin", isAuthenticated, getAdminJobs);
jobroute.get("/get/:id", isAuthenticated, getJobById);

export default jobroute;
