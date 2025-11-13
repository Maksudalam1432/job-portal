import React from 'react'
import Navbar from '../sharad/Navbar'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'

function Signup() {
  const navigate=useNavigate()
  return (
    <div>
      <Navbar/>

      <div className='flex justify-center items-center text-center  mt-25'>
        <form className='bg-gray-200 h-auto w-145 flex flex-col gap-5 p-5 rounded-md'>

          <h1 className='text-xl font-bold'>SIGNUP</h1> 
        
          <input 
            type="text" 
            placeholder='Full Name' 
            className='border-2 border-black h-10 rounded-md p-4'
          />

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

     
          <input 
            type="text" 
            placeholder='Phone Number' 
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

         

     <label className='mt-2 ml-5' >Profile</label>
     <input accept="image/*"
      type='file' className='border-2 border-black h-10 rounded-md p-2 w-60'
      />
      </div>
      </div>
       <Button>Signup</Button>
        <div className='text-blue-600 ml-2 underline'>

           <button onClick={()=>navigate("/login")}>
           Already have an account?login</button>
        </div>
         
        </form>
      </div>
    </div>
  )
}

export default Signup
