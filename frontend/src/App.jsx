import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Button } from './components/ui/button'
import Navbar from './components/sharad/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Job from './components/Browers/Job'
import Browers from './components/Browers'


const approuter=createBrowserRouter([

  {
    path:"/",
    element:<Home/>
  },
 
  {
    path:"/signup",
    element:<Signup/>
  },
   {
    path:"/login",
    element:<Login/>
  },
   {
    path:"/job",
    element:<Job/>
  },
   {
    path:"/Browers",
    element:<Browers/>
  }
  
])
function App() {

  return (
    <div >
     <RouterProvider router={approuter}/>
    </div>
  )
}

export default App