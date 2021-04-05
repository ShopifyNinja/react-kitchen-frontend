import React from "react";
import { edit, more, plus } from "../../../assets/images/index";

function TemplateInfo({ selectedTemplate, toggleAddProduct }) {
  const title = "Cabinet Reface";
  return (
    <div className="user-list">
      <div className="user-name">
        <h2 className="menu-title">{selectedTemplate.name}</h2>
        <div className="edit-icons ">
          <button>
            <img src={edit} alt="edit" />
          </button>
          <button>
            <img src={more} alt="more" />
          </button>
        </div>
      </div>
      <div className="estimate-head product-add">
        <h4 className="sub-title">PRODUCTS</h4>
        <div className="estimate-btn">
          <button>
            <img src={plus} alt="plus" />
          </button>
        </div>
      </div>
      <ul className="user-detail-list list-unstyled ">
        <li
          className="user-detail-list-item"
          onClick={() => {
            toggleAddProduct(title);
          }}
        >
          <h4>Add an estimate</h4>
        </li>
      </ul>
    </div>
  );
}

export default TemplateInfo;
