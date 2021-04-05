import React, { useState } from "react";
import ItemInfo from "./component";

function ItemInfoContainer({ selectedInnerItem }) {
  const { name, details } = selectedInnerItem;
  const [infos, setInfo] = useState(details);
  const [quantity, setQuantity] = useState();
  const [errorMessage, setError] = useState();

  const handleEdit = ({ key, field, isEdit }) => {
    if (key === "quantity") {
      const obj = { ...field, isEdit: isEdit, value: quantity };
      const newInfo = Object.assign({}, infos);
      newInfo[key] = obj;
      setInfo(newInfo);
      setError("");
    }
  };

  const handleChange = (e) => {
    if (isNaN(e.target.value.trim())) {
      setError("*Please input a valid number");
    } else {
      setError("");
      setQuantity(e.target.value);
    }
  };

  return (
    <ItemInfo
      name={name}
      details={infos}
      handleEdit={handleEdit}
      handleChange={handleChange}
      quantity={quantity}
      errorMessage={errorMessage}
    />
  );
}

export default ItemInfoContainer;
