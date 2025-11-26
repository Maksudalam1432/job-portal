import React from 'react'
import Navbar from './sharad/Navbar'
import Herosection from './Herosection'
import CategoryCarousel from './CategoryCarousel'
import Latestjob from './Latestjob'

function Home() {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <CategoryCarousel/>
        <Latestjob/>
    </div>
  )
}

export default Home