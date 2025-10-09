import mongoose, { connect, mongo } from "mongoose";

 const connectdb=async ()=>{
     try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongoose connect succesfully")
     }
     catch(err) {
         console.log("err")
     }
 }
 export default connectdb;