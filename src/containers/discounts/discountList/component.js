import React from "react";
import List from "../../../components/List";

function DiscountList({
  list,
  alphabets,
  onSelectDiscount,
  selectedCharacter,
  onSelectCharacter,
}) {
  return (
    <div className="search-menu">
      <List list={list} onSelect={onSelectDiscount} descriptionKey="type" />
      <div className="search-alphabets">
        {alphabets.map((el, index) => {
          const isSelectedChar =
            el.value.toLowerCase() ===
            (selectedCharacter && selectedCharacter.toLowerCase());
          return (
            <button
              className={isSelectedChar ? "search-alphabets-active" : ""}
              key={index}
              onClick={() => {
                onSelectCharacter(el.value);
              }}
            >
              {el.value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default DiscountList;
