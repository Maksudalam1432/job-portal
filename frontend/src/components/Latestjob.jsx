import React from "react";
import Latest from "./Latest";
import { jobsData } from "./data/jobsData";
function Latestjob() {
  

  return (
    <div className="grid grid-cols-3 gap-6 m-8 p-6">
      {jobsData.map((job, i) => (
        <Latest key={i} data={job} />
      ))}
    </div>
  );
}

export default Latestjob;
