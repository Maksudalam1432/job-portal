import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Button } from './components/ui/button'
import Navbar from './components/sharad/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Job from './components/Jobs/Job'
import Browers from './components/Browers'
import Profile from './components/Profile'
import Details from './components/Details'


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
  },
   {
    path:"/Profile",
    element:<Profile/>
  },
   {
    path:"/details/:id",
    element:<Details/>
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