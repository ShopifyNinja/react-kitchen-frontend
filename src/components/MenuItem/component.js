import React from "react";

function MenuItem({ title, subTitle, icon }) {
  return (
    <div className="lists">
      <div className="lists-box">
        <img src={icon} alt="homeIcon" />
      </div>
      <div className="lists-text">
        <h5 className="list-title">{title}</h5>
        <p>{subTitle}</p>
      </div>
    </div>
  );
}

export default MenuItem;
