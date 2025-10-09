import mongoose from "mongoose";

  const UserSchema = new mongoose.Schema({
   
       FullName:{
         type:string,
         required:true,
         minlength:6
       },
       email:{
         type:string,
        required:true,
        unique:true
       },
       password:{
        type:string,
        required:true,
        minlength:8
           },
         phoneNumber:{
          type:Number,
          required:true,
          minlength:10,
           unique:true
         } ,

          role:{
            type:string,
            enum:['student','recuiter'],
            required:true
          },
          profile:{
            bio:{type:string},
            skills:[{type:string}],
            resume:{type:string },
            resumeOriginalName:{type:string},
            company:{type:mongoose.Schema.Types.ObjectId , ref:'company'},
            profilePhoto:{
                type:string,
                default:""
            }
          }
        


  },{timestamps:true})

  const User=mongoose.model("User",UserSchema)
  export default User;