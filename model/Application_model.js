import mongoose from "mongoose";

 const applicationschema=new mongoose.Schema({

  Job:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Job',
    required:true
  },
  applicant:{

      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
      required:true
  },
  status:{
    type:String,
    enum:['pending','accepted,rejected'],
    default:'pending'
  }

 },{timestamps:true})

 const application=mongoose.model("application",applicationschema)

 export default application