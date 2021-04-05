import React from "react";
import List from "../../../../components/List";

function CustomersList({
  list,
  alphabets,
  onSelectCustomer,
  selectedCharacter,
  onSelectCharacter,
}) {
  return (
    <div className="search-menu">
      <List list={list} onSelect={onSelectCustomer} descriptionKey="address" />
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

export default CustomersList;
