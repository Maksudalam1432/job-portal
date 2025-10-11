import User from "../model/User_model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import cookie from "cookie-parser"

/*******************************************SING UP PAGE **********************************/
export const singup =async (req,res)=>{
  
  try{

  const {FullName,email,password,phoneNumber,role}=req.body;

  if(!FullName || !email || !password || !phoneNumber || !role){
     res.status(400).json({message:"Something is missing"})
  }
  const user=await User.findOne({email});

  if(!user){
     res.status(400).json({message:"Email is already singup"})
  }

   const hashpassword=await bcrypt.hash(password,10)

   await User.create({
    FullName,
    email,
    password,
    password:hashpassword,
    role
   })
    
  res.status(200).json({message:"Account created Succesfully"})

}
  catch(error){
    res.status(400).json(error)
  }
}


/*********************************************LOGIN PAGE **********************************/
export const login =async (req,res)=>{
    try{

   const {email,password,role}=req.body;

   if(!email || !password || !role){
         res.status(400).json({message:"Something is missing"})
   }
   const user=await User.findOne({email})
if(!user){
   res.status(400).json({
    message:"Incorrect password or  email ",
  
   })
   const matchpassword = await bcrypt.compare(password,user.password)

 if(!matchpassword){
    res.status(400).json({message:"incorrect password or eamil"})
 }

   if(role ===user.role){
     res.status(400).json({message:"Account doesn't exits with current role "})
   }
}

 const tokendata ={
  userid:_id,
  FullName:user.FullName,
  email:user.email,
  phoneNumber:user.phoneNumber,
  role:user.role,
  profile:user.profile

  
 }

 const token =await jwt.sign(tokendata,process.env.SECRET_KEy,{expiresIn:'1d'})
 
  return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpsOnly:true,samesite:'strict'})


  res.status(200).json({message:"Login Succesfully"})

    }catch(error){
          res.status(400).json(error)

    }
}


/*******************************************LOGOUT PAGE ***********************************************/

export const logout =async (req,res)=>{
  try{
  await res.status(200).cookie("token","")

    res.status(201).json({message:"user logout successfully"})
  }catch(error){
     res.status(400).json(error)
  }
}


/*************************************************UPDATE PAGE *****************************************/

const updatedata=async (req,res)=>{
  try{

    const {FullName,email,password,bio,skills}=req.body;
 
 



    res.statuS(200).json({message:" Update Successgully "})
  } catch(error){
     res.statuS(400).json(error)
  }
}