import React, { useState } from 'react'
import Navbar from '../sharad/Navbar'
import { Label } from '../ui/label'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'

function Signup() {
  const navigate = useNavigate()

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    phonenumber: "",
    role: "",
    file: null
  })


  const ChangeEventhandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }


  const Changefilehandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] })
  }

  const submithandle = (e) => {
    e.preventDefault();
    console.log("Form Data:", input)  
  }

  return (
    <div>
      <Navbar />

      <div className="min-h-[calc(100vh-70px)] flex justify-center items-center bg-gray-200">
        <form onSubmit={submithandle} className="bg-white w-full max-w-md flex flex-col gap-5 p-6 rounded-lg shadow-md">

          <h1 className="text-xl font-bold text-center">SIGNUP</h1>

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

          <input
            type="password"
            placeholder="Password"
            value={input.password}
            name='password'
            onChange={ChangeEventhandler}
            className="border h-10 rounded-md px-4"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={input.phonenumber}
            name='phonenumber'
            onChange={ChangeEventhandler}
            className="border h-10 rounded-md px-4"
          />

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

export default Signup
