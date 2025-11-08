import express from "express"
import { login, logout, Signup, updateprofile } from "../Controllers/user_controlles.js"

 const route=express.Router()

 route.post("/signup",Signup)
 route.post("/login",login)
 route.get("/logout",logout)
 route.post("/updateprofile",updateprofile)

 export default route