import React from "react";
import { FaSearch } from "react-icons/fa";

function HeroSection() {
  return (
    <div className="w-full flex justify-center items-center py-10 px-4">
      <div className="text-center max-w-xl">
        <p className="bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold mx-auto inline-block">
          No. 1 Job Apply Website
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mt-5 leading-snug">
          Search, Apply & Get Your{" "}
          <span className="text-violet-500">Dream Jobs</span>
        </h1>

        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          aspernatur temporibus nihil tempora dolor!
        </p>

        <div className="mt-8 flex items-center bg-white text-gray-500 shadow-lg rounded-full overflow-hidden max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search for jobs..."
            className="flex-1 px-5 py-3 text-base outline-none"
          />
          <button className="bg-violet-600 px-6 py-4 text-white hover:bg-violet-700 transition flex justify-center items-center">
            <FaSearch size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
