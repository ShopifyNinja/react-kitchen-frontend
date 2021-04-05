import React from "react";
import { FormGroup } from "reactstrap";
import { edit, more } from "../../../assets/images/index";

function UserInfo({ SelectedUser }) {
  const { info, roles } = SelectedUser && SelectedUser.data;

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
        {Object.keys(info).map((item, index) => {
          const field = info[item];
          return (
            <li className="user-detail-list-item" key={index}>
              <h4>{field}</h4>
              <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
            </li>
          );
        })}
      </ul>
      <h4 className="sub-title">SECURITY ROLES</h4>
      <div className="security-checks">
        {roles.map((role, key) => {
          return (
            <FormGroup key={key}>
              <input className="styled-checkbox" id={key} type="checkbox" />
              <label htmlFor={key}>{role}</label>
            </FormGroup>
          );
        })}
      </div>
    </div>
  );
}

export default UserInfo;
