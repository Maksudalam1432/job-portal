import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import md from "@/assets/md.jpg"             
import { Button } from '../ui/button'
import { LogOut, User2 } from 'lucide-react'

function Navbar() {
    const user=false;
  return (
    <div className='p-6 bg-white shadow-md'>

      <div className='flex justify-between '>

        <h1 className='font-sans text-2xl font-semibold'>
          <span className='text-purple-600'>JOB</span>{" "}
          <span className='text-blue-600'>PORTAL</span>
        </h1>
<div className='flex gap-12 items-center'>

        <ul className='hidden md:flex gap-5 font-medium cursor-pointer'>
          <li className='hover:text-blue-600'>HOME</li>
          <li className='hover:text-blue-600'>JOBS</li>
          <li className='hover:text-blue-600'>BROWSE</li>
        </ul>

     {
         !user ? (
           <div className="flex gap-3">
  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
    Login
  </Button>

  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
    Signup
  </Button>
</div>


        ) :(
            <Popover>
          <PopoverTrigger asChild>
            <Avatar className="cursor-pointer mr-6">
              <AvatarImage src={md} />
              
            </Avatar>
          </PopoverTrigger>

          <PopoverContent className="w-80" >
            
          
           <div className='flex gap-4 '>
             <Avatar className="cursor-pointer ">
              <AvatarImage src={md} />
              
            </Avatar>
            <div>

<h4 className="text-xl font-semibold bg-gradient-to-r mb-4 from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
  Maksud Alam
</h4>      
            </div>
     </div>
            <div className='flex flex-col text-gray-600 mb-2'>
                <div className="flex w-fit gap-2 ">
         <User2/>
                <Button variant="link" className=" hover:text-blue-600 cursor-pointer">View Profile</Button>
                </div>
                <div className="flex w-fit gap-2">
 <LogOut/>
                <Button variant="link"  className=" hover:text-blue-600 cursor-pointer">Loguot</Button>
                </div>
            </div>
          </PopoverContent>
        </Popover>
        )
    }
   
        
    </div>

      </div>

    </div>
  )
}

export default Navbar
