import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    minlength: 6,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
  },
phoneNumber: {
  type: String,
  required: true,
  unique: true,
  minlength: 10,
  maxlength: 10
},


  role: {
    type: String,
    enum: ["student", "recruiter"],
    required: true,
  },

  profile: {
    bio: { type: String, default: "" },
    skills: [{ type: String }],
    resume: { type: String },
    resumeOriginalName: { type: String },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
    profilePhoto: { type: String, default: "" },
  },
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
export default User;
