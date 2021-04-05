import React from "react";
import { edit } from "../../../../assets/images/index";
import Input from "../../../Input";

function ItemInfo({
  name,
  details,
  handleEdit,
  handleChange,
  quantity,
  errorMessage,
}) {
  return (
    <div className="user-list kitchen-details">
      <div className="user-name">
        <h2 className="menu-title">{name}</h2>
        <div className="edit-icons ">
          <button>
            <img src={edit} alt="edit" />
          </button>
        </div>
      </div>
      <h4 className="sub-title">DETAILS</h4>
      <ul className="user-detail-list list-unstyled ">
        {Object.keys(details).map((item) => {
          const field = details[item];
          if (item === "total") {
            return (
              <div className="details-total" key={item}>
                <h6> Total </h6>
                <label> $0.00</label>
              </div>
            );
          } else {
            return (
              <div key={item}>
                <li
                  className={`user-detail-list-item ${
                    field.isEdit ? "hideborder" : ""
                  }`}
                  onClick={() => {
                    handleEdit({ key: item, field, isEdit: true });
                  }}
                >
                  <h4>{field.label}</h4>
                  {!field.isEdit && <p>{field.value || "None"}</p>}
                </li>
                {field.isEdit && (
                  <Input
                    value={quantity}
                    onChange={handleChange}
                    handleEdit={handleEdit}
                    item={item}
                    field={field}
                    msg={errorMessage}
                  />
                )}
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default ItemInfo;
