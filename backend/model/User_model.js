import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: true,
    minlength: 6
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true,
    minlength: 8
  },

  phoneNumber: {
    type: Number,
    required: true,
    minlength: 10,
    unique: true
  },

  role: {
    type: String,
    enum: ["student", "recruiter"], // spelling corrected
    required: true
  },

  profile: {
    bio: { type: String },
    skills: [{ type: String }],
    resume: { type: String },
    resumeOriginalName: { type: String },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
    profilePhoto: {
      type: String,
      default: ""
    }
  }

}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
export default User;
