import React from "react";

function JobFilter() {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border">

      <h2 className="text-xl font-semibold mb-5">Filter Jobs</h2>

      {/* Job Title */}
      <div className="mb-5">
        <label className="block font-medium mb-2">Job Title</label>
        <input
          type="text"
          placeholder="Search role..."
          className="w-full border p-2 rounded-md"
        />
      </div>

      {/* Location */}
      <div className="mb-5">
        <label className="block font-medium mb-2">Location</label>
        <input
          type="text"
          placeholder="City, Country..."
          className="w-full border p-2 rounded-md"
        />
      </div>

      {/* Job Type - Radio */}
      <div className="mb-5">
        <label className="block font-medium mb-2">Job Type</label>
        <div className="flex flex-col gap-2">
          <label><input type="radio" name="jobType" className="mr-2"/>All</label>
          <label><input type="radio" name="jobType" className="mr-2"/>Full-time</label>
          <label><input type="radio" name="jobType" className="mr-2"/>Part-time</label>
          <label><input type="radio" name="jobType" className="mr-2"/>Internship</label>
        </div>
      </div>

      {/* Work Mode - Radio */}
      <div className="mb-5">
        <label className="block font-medium mb-2">Work Mode</label>
        <div className="flex flex-col gap-2">
          <label><input type="radio" name="workMode" className="mr-2"/>All</label>
          <label><input type="radio" name="workMode" className="mr-2"/>Remote</label>
          <label><input type="radio" name="workMode" className="mr-2"/>Hybrid</label>
          <label><input type="radio" name="workMode" className="mr-2"/>Onsite</label>
        </div>
      </div>

      {/* Salary Radio Buttons */}
      <div className="mb-5">
        <label className="block font-medium mb-2">Salary Range (LPA)</label>
        <div className="flex flex-col gap-2">
          <label><input type="radio" name="salary" className="mr-2"/>5 LPA - 10 LPA</label>
          <label><input type="radio" name="salary" className="mr-2"/>10 LPA - 20 LPA</label>
          <label><input type="radio" name="salary" className="mr-2"/>20 LPA - 30 LPA</label>
          <label><input type="radio" name="salary" className="mr-2"/>30 LPA+</label>
        </div>
      </div>

      <button className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded-md transition">
        Apply Filter
      </button>
    </div>
  );
}

export default JobFilter;
