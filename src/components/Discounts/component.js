import React from "react";
import { back } from "../../assets/images/index";
import { availableDiscounts, frequentlyUsedDiscounts } from "./util";

function Discounts({ setSelectedSection, setCustomDiscount, customDiscount }) {
  return (
    <div className="user-list">
      <div className="Cabinet-withback">
        <button
          className="back-btn"
          onClick={() => {
            setSelectedSection();
          }}
        >
          <img src={back} alt="back" />
        </button>
        <h2 className="menu-title">Discounts</h2>
      </div>
      <h4 className="sub-title">Frequently Used</h4>

      <ul className="responders-list list-unstyled ">
        {frequentlyUsedDiscounts.map((discount) => {
          return (
            <li className="responders-list-item" key={discount.id}>
              <div className="discount-icon-boxs">
                <img src={discount.icon} alt="" />
              </div>
              <div>
                <h4>{discount.name}</h4>
                <p> {discount.value} </p>
              </div>
            </li>
          );
        })}
      </ul>
      <ul className="user-detail-list voice-list list-unstyled ">
        {availableDiscounts.map((item) => {
          return (
            <li className="user-detail-list-item" key={item.id}>
              <h4>
                {" "}
                {item.value}% {item.value === 0 ? "- No Discount" : ""}
              </h4>
            </li>
          );
        })}
      </ul>
      <div className="custom-discount">
        <input
          type="text"
          placeholder="Custom Discount"
          value={customDiscount}
          onChange={(e) => setCustomDiscount(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Discounts;
