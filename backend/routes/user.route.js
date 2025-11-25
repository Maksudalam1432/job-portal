import express from "express"

import { login, logout, Signup, updateprofile } from "../Controllers/user_controller.js"
import isAuthenticated from "../middlewares/IsAuth.js"
import Singleupload from "../middlewares/multer.js"

 const route=express.Router()

 route.post("/signup", Singleupload, Signup);
 route.post("/login",login)
 route.get("/logout",logout)
 route.put("/profile/update",isAuthenticated,updateprofile)

 export default route