import mongoose, { Types } from "mongoose";

const companyschema = new mongoose.Schema({
  name: {
    Type: String,
    required: true,
  },
  description: {
    Type: String
  
  },
  website: {
    Type: String
     },
  location: {
    Type: String
  },
  logo:{
    Type:String
      },
      userId:{
        Type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
      }
},{timestamps:true});

