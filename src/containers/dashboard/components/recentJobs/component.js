import React from "react";
import { recentJobs } from "./recentJobs";

function RecentJobs(props) {
  return (
    <div>
      {recentJobs.map((job) => {
        return (
          <div key={job.id} className="content-box-detail">
            <div className="content-box-img"></div>
            <h5>{job.title}</h5>
            <p>${job.amount}</p>
          </div>
        );
      })}
    </div>
  );
}

export default RecentJobs;
