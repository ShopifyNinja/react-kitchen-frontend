import React from "react";
import List from "./component";

function ListContainer({ list, onSelect, descriptionKey, isNotCommon }) {
  return (
    <List
      list={list}
      onSelect={onSelect}
      descriptionKey={descriptionKey}
      isNotCommon={isNotCommon}
    />
  );
}

export default ListContainer;
