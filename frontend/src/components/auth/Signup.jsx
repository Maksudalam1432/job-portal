import React, { useState } from 'react'
import Navbar from '../sharad/Navbar'
import { Label } from '../ui/label'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import axios from 'axios'
import { toast } from 'sonner'

// NEW IMPORT 👇
import { FiEye, FiEyeOff } from "react-icons/fi";

function Signup() {
  const navigate = useNavigate()

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
    file: null
  })

  // SHOW/HIDE PASSWORD
  const [showPassword, setShowPassword] = useState(false)

  const ChangeEventhandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const Changefilehandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] })
  }

  const submithandle = async (e) => {
    e.preventDefault();
    
    const fromdata = new FormData()
    fromdata.append("fullname", input.fullname)
    fromdata.append("email", input.email)
    fromdata.append("password", input.password)
    fromdata.append("phoneNumber", input.phoneNumber)
    fromdata.append("role", input.role)

    if (input.file) {
      fromdata.append("file", input.file)
    }

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/signup",
        fromdata,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true
        }
      );

      if (res.data.success) {
        navigate("/login")
        toast.success(res.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || "Something went wrong")
    }
  }

  return (
    <div>
      <Navbar />

      {/* Background Section */}
      <div className="min-h-screen w-full relative flex justify-center items-center px-4">
        
        {/* Gradient Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #7c3aed 100%)",
          }}
        />

        {/* Signup Card */}
        <form 
          onSubmit={submithandle} 
          className="relative z-10 bg-white w-full max-w-md flex flex-col gap-5 p-6 
          rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.25)] 
          hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] 
          transition-all duration-300 backdrop-blur-md bg-opacity-90"
        >

          <h1 className="text-2xl font-bold text-center">SIGNUP</h1>

          <input
            type="text"
            placeholder="Full Name"
            value={input.fullname}
            name='fullname'
            onChange={ChangeEventhandler}
            className="border h-10 rounded-md px-4"
          />

          <input
            type="email"
            placeholder="Email"
            value={input.email}
            name='email'
            onChange={ChangeEventhandler}
            className="border h-10 rounded-md px-4"
          />

          {/* PASSWORD WITH EYE */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={input.password}
              name='password'
              onChange={ChangeEventhandler}
              className="border h-10 rounded-md px-4 w-full pr-10"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 cursor-pointer text-gray-600"
            >
              {showPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
            </button>
          </div>

          <input
            type="text"
            placeholder="Phone Number"
            value={input.phoneNumber}
            name='phoneNumber'
            onChange={ChangeEventhandler}
            className="border h-10 rounded-md px-4"
          />

          {/* Role + File */}
          <div className="flex flex-col">
            <Label className="font-semibold mb-2">Select Role</Label>

            <div className="flex gap-8">

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={ChangeEventhandler}
                  className="w-4 h-4 accent-black"
                />
                Student
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={ChangeEventhandler}
                  className="w-4 h-4 accent-black"
                />
                Recruiter
              </label>
            </div>

            <Label className="mt-4 mb-2">Profile</Label>
            <input
              accept="image/*"
              type="file"
              name='file'
              onChange={Changefilehandler}
              className="border h-10 rounded-md p-2"
            />
          </div>

          <Button className="w-full bg-black text-white hover:bg-gray-900">
            Signup
          </Button>

          <div className="text-center text-blue-600 underline text-sm">
            <button type="button" onClick={() => navigate("/login")}>
              Already have an account? Login
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Signup;
