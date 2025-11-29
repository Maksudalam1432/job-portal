  import React from "react";
  import JobCard from "./JobCard";
  import { jobsData } from "../data/jobsData";

  function JobList() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-5 ">
          Available Jobs ({jobsData.length})
        </h1>

        {jobsData.length === 0 ? (
          <p className="text-center text-gray-500 py-10 text-lg">
            ❌ No Jobs Found
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobsData.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        )}
      </div>
    );
  }

  export default JobList;
