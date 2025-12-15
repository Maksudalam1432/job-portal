import React from 'react'
import Navbar from './sharad/Navbar'
import { Bookmark, MapPin, Briefcase } from "lucide-react";

function Browers() {

  const Data = [
    {
      company: "Google",
      location: "Bangalore, India",
      title: "Frontend Developer",
      description: "Build and optimize UI with React and TypeScript.",
      type: "Full-time",
      salary: "18 LPA",
      mode: "Remote",
    },
    {
      company: "Microsoft",
      location: "Hyderabad, India",
      title: "Backend Developer",
      description: "Work with Node.js, Express, and cloud systems.",
      type: "Full-time",
      salary: "20 LPA",
      mode: "Hybrid",
    },
    {
      company: "Amazon",
      location: "Pune, India",
      title: "Full Stack Developer",
      description: "Build scalable MERN applications.",
      type: "Full-time",
      salary: "22 LPA",
      mode: "Office",
    },
    {
      company: "Tata Consultancy",
      location: "Mumbai, India",
      title: "UI/UX Designer",
      description: "Create modern UI wireframes and prototypes.",
      type: "Part-time",
      salary: "8 LPA",
      mode: "Remote",
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center p-10">
        <h2 className="text-2xl font-semibold mb-6">
          Search Result ({Data.length})
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">

          {Data.map((job, index) => (
            <div key={index} className="bg-white border rounded-xl p-6 shadow-md hover:shadow-xl transition hover:scale-[1.02]">

              <div className="flex justify-between items-center mb-3">
                <img
                  src="https://imgs.search.brave.com/_x3D3457uicpyZWo0CUYc4mw_mCjAyf10U8xUnvmXF4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8x/Ni8yNi9zb2NpYWwt/bWVkaWEtbG9nb3Mt/Y29sbGVjdGlvbi12/ZWN0b3ItMjQwMTE2/MjYuanBn"
                  alt="logo"
                  className="w-12 h-12 object-contain rounded-md"
                />
                <Bookmark size={22} className="cursor-pointer hover:text-violet-600" />
              </div>

              <h2 className="font-semibold text-lg">{job.company}</h2>

              <p className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <MapPin size={16} /> {job.location}
              </p>

              <h3 className="font-bold text-xl">{job.title}</h3>

              <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                {job.description}
              </p>

              <div className="flex gap-2 flex-wrap mt-4">
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-medium">
                  {job.type}
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                  {job.mode}
                </span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                  {job.salary}
                </span>
              </div>

              <button className="w-full bg-blue-400 text-white py-2 rounded-lg mt-5 hover:bg-blue-600 transition flex items-center justify-center gap-2">
                <Briefcase size={18} /> Apply Now
              </button>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Browers
