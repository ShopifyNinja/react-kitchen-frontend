import React from "react";
import List from "../../../components/List";

function TemplateList({
  list,
  alphabets,
  selectedCharacter,
  onSelectCharacter,
  onSelectTemplate,
}) {
  return (
    <div className="search-menu">
      <List list={list} onSelect={onSelectTemplate} descriptionKey="amount" />
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

export default TemplateList;
