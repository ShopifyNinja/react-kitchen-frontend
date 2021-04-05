import React from "react";

function FrequentItem({ title, icon }) {
  return (
    <div className="new-bx-circle">
      <div className="new-box ">
        <img src={icon} alt="newjob" />
      </div>
      <h3 className="new-title">{title}</h3>
    </div>
  );
}

export default FrequentItem;
