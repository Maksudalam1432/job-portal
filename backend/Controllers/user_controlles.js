import User from "../model/User_model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import cookie from "cookie-parser"
import e from "express";

//************SINGUP**************** */
export const Signup = async (req, res) => {
  try {
    const { FullName, email, password, phoneNumber, role } = req.body;

    if ((!FullName || !email || ! password || !phoneNumber || !role)) {
      return res.status(400).json({ message: "Something is missing" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already login" });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    await User.create({
      FullName,
      email,
      password: hashpassword,
      phoneNumber,
      role,
    });

    return res.status(200).json({message:"Account created succesfully"})
  } catch (error) {
    return res.status(400).json(error);
  }
};
//************************LOGIN *********** */
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({ message: "Something is missing" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    if (role !== user.role) {
      return res.status(400).json({ message: "Account does not exist with this role" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d"
    });

    const userData = {
      userId: user._id,
      FullName: user.FullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict"
      })
      .json({ message: `Welcome back ${user.FullName}`, user: userData });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};




//**************LOGOUT*************** */

export const logout = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", "", { maxAge: 0, httpOnly: true, sameSite: "strict" })
      .json({ message: "Logout Successfully ✅" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Logout Failed" });
  }
};


    /*********************update profile **********************/

    export const updateprofile =async (req,res)=>{
      try{
   
        const{FullName ,email,phoneNumber,bio,skills}=req.body;

        if(!FullName || !email ||!phoneNumber ||!bio ||!skills){
           res.status(400).json({message:"something is missing "})
        }

 const skillsArray=skills.split(" ,")
 const userid=req.id;
 let user=await User.findOne(userid)

 if(!user){
  res.status(400).json({message:"user not found"})
 }

 user.FullName=FullName,
 user.email=email,
 user.phoneNumber=phoneNumber,
 user.profile.bio=bio,
 user.profile.skills=skillsArray

   await user.save()
     user={
    userId:user._id,
      FullName:user.FullName,
        email:user.email,
        phoneNumber:user.phoneNumber,
        role:user.role,
        profile:user.profile
   }

        res.status(200).json({message:"profile update succesfully ",user})
      } catch(error){
         res.status(400).json(error)
      }
    }
