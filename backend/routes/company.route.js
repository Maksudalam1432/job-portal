import express from "express"

import { getCompanies, getCompanyById, registerCompany, updateCompany } from "../Controllers/company_controller.js"
import isAuthenticated from "../middlewares/IsAuth.js"

 const companyroute =express.Router()

 companyroute.post("/register",isAuthenticated,registerCompany)
 companyroute.get("/get",isAuthenticated,getCompanies)
 companyroute.get("/get/:id",isAuthenticated,getCompanyById)
 companyroute.put("/update/:id",isAuthenticated,updateCompany)

 export default companyroute