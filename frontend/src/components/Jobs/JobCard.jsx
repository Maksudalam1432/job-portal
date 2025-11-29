import React from "react";
import { Bookmark, MapPin, Briefcase } from "lucide-react";

function JobCard({ job }) {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-md hover:shadow-xl transition hover:scale-[1.02] m-4 ">

      <div className="flex justify-between items-center mb-3">
        <img src="https://imgs.search.brave.com/_x3D3457uicpyZWo0CUYc4mw_mCjAyf10U8xUnvmXF4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8x/Ni8yNi9zb2NpYWwt/bWVkaWEtbG9nb3Mt/Y29sbGVjdGlvbi12/ZWN0b3ItMjQwMTE2/MjYuanBn" alt="logo" className="w-12 h-12 object-contain" />
        <Bookmark size={22} className="cursor-pointer hover:text-violet-600" />
      </div>

      <h2 className="font-semibold text-lg">{job.company}</h2>

      <p className="flex items-center gap-2 text-gray-500 text-sm">
        <MapPin size={16} /> {job.location}
      </p>

      <h3 className="font-bold text-xl mt-2">{job.title}</h3>

      <p className="text-gray-500 text-sm mt-2">{job.description}</p>

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

      <button className="w-full bg-violet-600 text-white py-2 rounded-lg mt-5 hover:bg-violet-700 transition flex items-center justify-center gap-2">
        <Briefcase size={18} /> Apply Now
      </button>
    </div>
  );
}

export default JobCard;
