import React from "react";
import { edit, more, phone } from "../../../assets/images/index";

function DiscountInfo({ selectedDiscount }) {
  const { id, name, type } = selectedDiscount;
  return (
    <div className="user-list discount-list">
      <div className="user-name">
        <h2 className="menu-title">{name}</h2>
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
        <img className="phone-discount" src={phone} alt="phone" />
        <li className="user-detail-list-item" key={id}>
          <h4>Discount Amount</h4>
          <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
        </li>
      </ul>
    </div>
  );
}

export default DiscountInfo;
