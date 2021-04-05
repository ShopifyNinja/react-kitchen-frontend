import React from "react";
import { edit, more } from "../../../assets/images/index";
import { NewEstimateFields } from "../utils";

function NewEstimate(props) {
  const { items } = NewEstimateFields;

  return (
    <div className="user-list">
      <div className="user-name">
        <h2 className="menu-title">New Estimate</h2>
        <div className="edit-icons ">
          <button>
            <img src={edit} alt="edit" />
          </button>
          <button>
            <img src={more} alt="more" />
          </button>
        </div>
      </div>
      <h5 className="list-head"> INFO </h5>
      <ul className="user-detail-list list-unstyled ">
        {Object.keys(NewEstimateFields).map((item, index) => {
          const field = NewEstimateFields[item];
          if (!(item === "items" || item === "photos")) {
            return (
              <li key={index} className="user-detail-list-item">
                <h4 className="sub-title">{item}</h4>
                <p>{field}</p>
              </li>
            );
          } else if (item === "photos") {
            return (
              <li key={index} className="user-detail-list-item">
                <h5 className="list-head"> {item} </h5>
                <p>{field}</p>
              </li>
            );
          }
          return null;
        })}
      </ul>
      <h4 className="sub-title">ITEMS</h4>
      <div className="security-checks">
        <ul className="user-detail-list list-unstyled ">
          {items.map((item, index) => {
            return (
              <li key={index} className="user-detail-list-item">
                <h4>{item.name}</h4>
                <p> ${item.cost}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NewEstimate;
