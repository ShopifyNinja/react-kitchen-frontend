import React from "react";
import { edit, more, plus } from "../../../assets/images/index";

function ItemInfo({ SelectedItem }) {
  const { unit } = SelectedItem;

  return (
    <div className="user-list item-info-page">
      <div className="user-name">
        <h2 className="menu-title">{SelectedItem.name}</h2>
        <div className="edit-icons ">
          <button>
            <img src={edit} alt="edit" />
          </button>
          <button>
            <img src={more} alt="more" />
          </button>
        </div>
      </div>
      <p className="demolition-and-haul"> {SelectedItem.description} </p>
      <h4 className="sub-title">ITEM GROUP</h4>
      <ul className="user-detail-list Kitchen-list list-unstyled">
        <li className="user-detail-list-item">
          <h4>{SelectedItem.itemGroup}</h4>
        </li>
      </ul>
      <div className="estimate-head cost-head">
        <h4 className="sub-title unit">UNITS + COST</h4>
        <div className="estimate-btn">
          <button>
            <img src={plus} alt="plus" />
          </button>
        </div>
      </div>
      <ul className="user-detail-list Kitchen-list list-unstyled ">
        {unit.map((el) => {
          return (
            <li className="user-detail-list-item" key={`list_${el.title}`}>
              <h4> {el.title}</h4>
              <p> {el.value} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ItemInfo;
