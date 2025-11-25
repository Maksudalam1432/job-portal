import User from "../model/User_model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//************ SIGNUP **************** */
export const Signup = async (req, res) => {
  try {
    const { fullname, email, password, phoneNumber, role } = req.body;


    console.log(fullname,email,password,phoneNumber,role)
    if (!fullname || !email || !password || !phoneNumber || !role) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }
    
    const hashpassword = await bcrypt.hash(password, 10);
    
    console.log(fullname,email,password,phoneNumber,role)
    await User.create({
      fullname,
      email,
      password: hashpassword,
      phoneNumber,
      role,
    });

    res.status(200).json({ success: true, message: "Account created successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error});
  }
};

//************ LOGIN **************** */
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({ message: "Something is missing" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Incorrect email or password" });

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) return res.status(400).json({ message: "Incorrect email or password" });

    if (role !== user.role) {
      return res.status(400).json({ message: "Account not found with this role" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "1d" });

    const userData = {
      userId: user._id,
      fullname: user.fullname,
      email: user.email,
      phonenumber: user.phonenumber,
      role: user.role,
      profile: user.profile
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({ message: `Welcome back ${user.fullname}`, user: userData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//************** LOGOUT *************** */
export const logout = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", "", { maxAge: 0, httpOnly: true, sameSite: "strict" })
      .json({ message: "Logout Successfully ✅" });
  } catch (error) {
    res.status(500).json({ message: "Logout Failed" });
  }
};

//************** UPDATE PROFILE *************** */
export const updateprofile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;

    const userid = req.id;
    let user = await User.findById(userid);

    if (!user) return res.status(400).json({ message: "User not found" });

    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phonenumber) user.phonenumber = phonenumber;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skills.split(",").map(s => s.trim());

    await user.save();

    res.status(200).json({ message: "Profile updated successfully", user });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
