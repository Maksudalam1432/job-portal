import React from "react";
import { MapPin, Briefcase, Calendar, Users } from "lucide-react";
import Navbar from "./sharad/Navbar";

function JobDetails() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Frontend Developer
              </h1>

              <p className="text-gray-600 mt-1">
                Google · Jaipur, India
              </p>

              <div className="flex gap-6 mt-3 text-sm text-gray-500 flex-wrap">
                <span className="flex items-center gap-1">
                  <MapPin size={16} /> Jaipur
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase size={16} /> Frontend Developer
                </span>
                <span className="flex items-center gap-1">
                  <Users size={16} /> 42 Applicants
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={16} /> Posted on 12 Aug 2024
                </span>
              </div>
            </div>

            <button className="bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
              Apply Now
            </button>
          </div>

          <div className="flex gap-3 flex-wrap mt-6">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
              React
            </span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
              JavaScript
            </span>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
              Tailwind CSS
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
              ₹10–15 LPA
            </span>
          </div>
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm mt-6 space-y-6">

          <div>
            <h2 className="text-lg font-semibold mb-2">
              Job Description
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We are looking for a skilled Frontend Developer who is proficient
              in React and modern JavaScript. You will work closely with the
              design and backend teams to build high-quality user interfaces.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              Responsibilities
            </h2>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Build reusable React components</li>
              <li>Optimize application performance</li>
              <li>Collaborate with backend developers</li>
              <li>Write clean and maintainable code</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              Requirements
            </h2>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>2+ years of experience with React</li>
              <li>Strong knowledge of JavaScript</li>
              <li>Experience with Tailwind CSS</li>
              <li>Understanding of REST APIs</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}

export default JobDetails;
