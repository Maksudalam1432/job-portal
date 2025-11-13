import React from 'react'
import Navbar from '../sharad/Navbar'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'

function Login() {
  const navigate=useNavigate()
  return (
    <div>
      <Navbar/>

      <div className='flex justify-center items-center text-center  mt-25'>
        <form className='bg-gray-200 h-auto w-145 flex flex-col gap-5 p-5 rounded-md'>

          <h1 className='text-xl font-bold'>Login</h1> 
        
          

          <input 
            type="email" 
            placeholder='Email' 
            className='border-2 border-black h-10 rounded-md p-4'
          />

      
          <input 
            type="password" 
            placeholder='Password' 
            className='border-2 border-black  h-10 rounded-md p-4'
          />

     
        
         
          <div className="flex flex-col mt-2 ">
            <Label className="font-semibold mb-2">Select Role</Label>

            <div className="flex gap-5">

              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="role" 
                  value="student" 
                  defaultChecked
                  className="w-4 h-4 accent-black cursor-pointer"
                />
                Student
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="role" 
                  value="recruiter"
                  className="w-4 h-4 accent-black cursor-pointer"
                />
                Recruiter
              </label>

         

    
     
      </div>
      </div>
      <Button>Login</Button>
        <div className='text-blue-600 ml-2 underline'>

           <button onClick={()=>navigate("/signup")}>
           Create an account?Signup</button>
        </div>
         
        </form>
      </div>
    </div>
  )
}

export default Login
