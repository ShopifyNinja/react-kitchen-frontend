import React, { useRef } from "react";

function List({ list, onSelect, descriptionKey, isNotCommon }) {
  const currentCharacter = useRef("");

  return (
    <ul className="search-list list-unstyled">
      {list.map((item, index) => {
        const isChange =
          currentCharacter.current !== item.name[0] && !Number(item.name[0]);
        if (isChange) {
          currentCharacter.current = item.name[0];
        }
        return (
          <li
            className={item.isActive ? "search-active" : ""}
            key={item.id}
            onClick={() => {
              if (onSelect) {
                onSelect(index);
              }
            }}
            id={`list_${item.name}`}
          >
            {!isNotCommon && isChange && (
              <div id={`char_${item.name[0]}`} className="initial">
                {item.name[0]}
              </div>
            )}
            {!!descriptionKey && descriptionKey === "itemGroup" && (
              <h6 className="sales">{item[descriptionKey]}</h6>
            )}
            <h4 className="andy-appleseed">{item.name}</h4>
            {!!descriptionKey && !(descriptionKey === "itemGroup") && (
              <h6 className="sales">{item[descriptionKey]}</h6>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
