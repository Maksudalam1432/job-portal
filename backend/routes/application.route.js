import express from "express"

import isAuthenticated from "../middlewares/IsAuth.js"
import { applyJob, getAppliedJobs, getJobApplications, updateStatus } from "../Controllers/application_controler.js"

 const route =express.Router()

  route.get("/apply/:id",isAuthenticated,applyJob)
  route.get("/get",isAuthenticated,getAppliedJobs )
  route.get("/:id/applicants",isAuthenticated,getJobApplications)
  route.post("/status/:id/update",isAuthenticated,updateStatus)
 export default route