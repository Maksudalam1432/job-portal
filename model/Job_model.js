import mongoose from "mongoose";

  const jobschema=new mongoose.Schema({
    
   tittle:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   },
   requirment:[{
    type:String
   }],
   slalry:{
    type:Number,
    required:true
   },
   location:{
    type:String,
    required:true
   },
   jobtype:{
    type:String,
    required:true
   },
   position:{
     type:String,
     required:true
   },
   company:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Company',
    required:true
   },
 Created_by:{
   type:mongoose.Schema.Types.ObjectId,
   ref:'User',
   required:true
 },
 Application:{
   type:mongoose.Schema.Types.ObjectId,
   ref:'Application'
 }


  },{timestamps:true})

   const Job =mongoose.model("Job",jobschema)
   export default Jobuser;