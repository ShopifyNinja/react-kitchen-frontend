import React from "react";
import { tick2 } from "../../assets/images/index";

function Input({
  onChange,
  handleEdit,
  item,
  field,
  msg,
  placeholder,
  id,
  updateData,
  data,
}) {
  return (
    <div className={`customInput inputBorder ${msg ? "error" : ""}`}>
      <input
        onChange={(e) => {
          onChange(e, id);
        }}
        placeholder={placeholder}
      />
      <button
        onClick={() => {
          if (handleEdit) {
            handleEdit({ key: item, field, isEdit: false });
          } else if (updateData && data && data.label && data.value) {
            updateData(id);
          }
        }}
      >
        <img src={tick2} alt="tick2" />
      </button>
      {msg && <p> {msg} </p>}
    </div>
  );
}

export default Input;
