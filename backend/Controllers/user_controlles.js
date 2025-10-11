import User from "../model/User_model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import cookie from "cookie-parser"
//************SINGUP**************** */
export const Singup = async (req, res) => {
  try {
    const { FullName, email, password, phoneNumber, role } = req.body;

    if ((!FullName || !email, password || !phoneNumber || !role)) {
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
      return res.status(400).json({ message: "incorrect email and password" });
    }

    const ispassword = await bcrypt.compare(password, user.password);
    if (!ispassword) {
      return res.status(400).json({ message: "incorrect email and password" });
    }
    if (roel === user.role) {
      return res
        .status(400)
        .json({ message: "Account Doesn' t exits with current role . " });
    }

    const tokendata={
        userId:user._id,
        FullName:user.FullName,
        email:user.email,
        phoneNumber:user.phoneNumber,
        role,
    }

    const token=await jwt.sign(tokendata, process.env.SECRET_KEY,{expiresIn:'1d'})

    return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpsOnly:true,sameSite:'strict'}.json({message:`Welcome back ${user.FullName}`}))
  } catch (error) {
    res.status(400).json(error);
  }
};



//**************LOGOUT*************** */

export const logout=async(req,res)=>{
     try{
   await res.status(200).cookie("token"," ",{maxAge:0}.json{message:"Logout Succesfully"})
   
     }catch(error){
        console.log(error)
     }
    }
