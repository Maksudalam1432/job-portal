import React, { useState } from 'react'
import Navbar from '../sharad/Navbar'
import { Label } from '../ui/label'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'

function Login() {
  const navigate = useNavigate()  
   const [input, setInput] = useState({
      
      email: "",
      password: "",
           role: "",
      
    })
  
  
    const ChangeEventhandler = (e) => {
      setInput({ ...input, [e.target.name]: e.target.value })
    }
  
  
  
  
    const submithandle = (e) => {
      e.preventDefault();
      console.log("Form Data:", input)  
    }
  


  return (
    <div>
      <Navbar />

      <div className="min-h-[calc(100vh-80px)] flex justify-center items-center px-4 bg-gray-200">
        <form onSubmit={submithandle} className="bg-white w-full max-w-md flex flex-col gap-5 p-6 rounded-lg shadow-md">

          <h1 className="text-2xl font-bold text-center">Login</h1>

          <input
            type="email"
            placeholder="Email"
            value={input.email}
            name='email'
            onChange={ChangeEventhandler}
            className="border h-12 rounded-md px-4 w-full"
          />

          <input
            type="password"
            placeholder="Password"
            value={input.password}
            name='password'
            onChange={ChangeEventhandler}
            className="border h-12 rounded-md px-4 w-full"
          />

          <div className="flex flex-col mt-2">
            <Label className="font-semibold mb-2">Select Role</Label>

            <div className="flex  gap-8">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role==='student'}
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
                  checked={input.role==='recruiter'  }
                  onChange={ChangeEventhandler}
                  className="w-4 h-4 accent-black"
                />
                Recruiter
              </label>
            </div>
          </div>

          <Button className="w-full bg-black text-white hover:bg-gray-900">Login</Button>

          <p className="text-blue-600 text-center underline text-sm cursor-pointer">
            <button onClick={() => navigate("/signup")}>
              Create an account? Signup
            </button>
          </p>

        </form>
      </div>
    </div>
  )
}

export default Login
