import React from "react";
import { edit, more, plus } from "../../../assets/images/index";
import deleteIcon from "../../../assets/images/delete.svg";

function JobsInfo({ SelectedUser, toggleEstimate, onSelectCustomer }) {
  const { info, Estimates } = SelectedUser && SelectedUser.data;

  return (
    <div className="user-list">
      <div className="user-name">
        <h2 className="menu-title">{SelectedUser.name}</h2>
        <div className="edit-icons ">
          <button>
            <img src={edit} alt="edit" />
          </button>
          <button>
            <img src={more} alt="more" />
          </button>
        </div>
      </div>
      <ul className="user-detail-list list-unstyled ">
        <h4 className="sub-title">CUSTOMER INFO</h4>
        <li
          className="user-detail-list-item"
          onClick={() => {
            onSelectCustomer(info);
          }}
        >
          <h4>{info.name}</h4>
          <p>{info.address}</p>
        </li>
      </ul>
      <ul className="user-detail-list list-unstyled ">
        <div className="estimate-head">
          <h4 className="sub-title">ESTIMATES</h4>
          <div className="estimate-btn">
            <button>
              <img src={deleteIcon} alt="delete" />
            </button>
            <button>
              <img src={plus} alt="plus" />
            </button>
          </div>
        </div>
        {Estimates.map((element, index) => {
          return (
            <li
              className="user-detail-list-item etimate-listimg"
              key={index}
              onClick={() => {
                toggleEstimate(element);
              }}
            >
              {element.url !== "" && (
                <div className="estimate-cr">
                  <img src={element.url} alt="estimate" />
                </div>
              )}
              <h4>{element.title}</h4>
              <p>{element.amount}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default JobsInfo;
