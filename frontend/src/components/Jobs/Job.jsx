import React from "react";
import JobFilter from "./JobFilter"
import JobList from "./jobList"
import Navbar from "../sharad/Navbar";

function job() {
  return (
    <>
    <Navbar/>
    <div className="w-full flex gap-6 p-6">
      <div className="w-[25%] hidden md:block">
        <JobFilter />
      </div>

      <div className="w-full md:w-[75%]">
        <JobList />
      </div>
    </div>
    </>
  );
}

export default job;
