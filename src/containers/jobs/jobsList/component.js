import React from "react";
import List from "../../../components/List";

function UsersList({
  list,
  alphabets,
  onSelectUser,
  selectedCharacter,
  onSelectCharacter,
}) {
  return (
    <div className="search-menu">
      <List list={list} onSelect={onSelectUser} descriptionKey="Estimate" />
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

export default UsersList;
