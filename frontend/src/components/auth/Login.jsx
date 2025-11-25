import React, { useState } from 'react'
import Navbar from '../sharad/Navbar'
import { Label } from '../ui/label'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import axios from 'axios'
import { toast } from 'sonner'
import { FiEye, FiEyeOff } from "react-icons/fi";

function Login() {

  const navigate = useNavigate()

  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  })

  // Password Show/Hide
  const [showPassword, setShowPassword] = useState(false)

  const ChangeEventhandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const submithandle = async (e) => {
    e.preventDefault();
    console.log("Form Data:", input)

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        input,
        { withCredentials: true }
      )

      if (res.data.success) {
        toast.success(res.data.message)
        navigate("/")
      }

    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login failed")
    }
  }

  return (
    <div>
      <Navbar />

      {/* Background Wrapper */}
      <div className="min-h-screen w-full relative flex justify-center items-center px-4">

        {/* Radial Gradient Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #7c3aed 100%)",
          }}
        />

        {/* Login Form */}
        <form
          onSubmit={submithandle}
          className="relative z-10 bg-white w-full max-w-md flex flex-col gap-5 p-6 rounded-lg shadow-xl backdrop-blur-md bg-opacity-90"
        >
          <h1 className="text-2xl font-bold text-center">Login</h1>

          <input
            type="email"
            placeholder="Email"
            value={input.email}
            name='email'
            onChange={ChangeEventhandler}
            className="border h-12 rounded-md px-4 w-full"
          />

          {/* Password Input with Icon */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={input.password}
              name='password'
              onChange={ChangeEventhandler}
              className="border h-12 rounded-md px-4 w-full pr-10"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-gray-600"
            >
              {showPassword ? <FiEyeOff size={22} /> : <FiEye size={22} />}
            </button>
          </div>

          {/* Role Selection */}
          <div className="flex flex-col mt-2">
            <Label className="font-semibold mb-2">Select Role</Label>

            <div className="flex gap-8">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === 'student'}
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
                  checked={input.role === 'recruiter'}
                  onChange={ChangeEventhandler}
                  className="w-4 h-4 accent-black"
                />
                Recruiter
              </label>
            </div>
          </div>

          <Button className="w-full bg-black text-white hover:bg-gray-900">
            Login
          </Button>

          <p className="text-blue-600 text-center underline text-sm cursor-pointer">
            <button type="button" onClick={() => navigate("/signup")}>Create an account? Signup</button>
          </p>

        </form>
      </div>
    </div>
  )
}

export default Login
