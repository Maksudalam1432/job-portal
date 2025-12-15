import React from "react";
import { Briefcase, MapPin } from "lucide-react";

function Latest({ data }) {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-md hover:shadow-xl transition cursor-pointer hover:scale-[1.02]">
      <div className="mb-3">
        <h2 className="text-lg font-semibold">{data.company}</h2>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <MapPin size={16} /> {data.location}
        </div>
      </div>

      <h3 className="font-bold text-gray-800 text-xl mb-2">{data.title}</h3>

      <p className="text-gray-500 text-sm mb-4">{data.description}</p>

      <div className="flex flex-wrap gap-2">
        <span className="bg-violet-100 text-violet-600 px-3 py-1 rounded-full text-xs font-medium">
          {data.type}
        </span>
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
          {data.mode}
        </span>
        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
          {data.salary}
        </span>
      </div>

      <button className="w-full bg-gray-400 text-white py-2 rounded-lg mt-5 hover:bg-gray-600 transition flex items-center justify-center gap-2">
        <Briefcase size={18} /> Apply Now
      </button>
    </div>
  );
}

export default Latest;
