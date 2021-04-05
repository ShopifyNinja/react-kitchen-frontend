import React from "react";
import ItemsList from "./component";

function ItemsListContainer({
  list,
  onSelectItem,
  selectedCharacter,
  onSelectCharacter,
  alphabets,
}) {
  return (
    <ItemsList
      list={list}
      alphabets={alphabets}
      onSelectItem={onSelectItem}
      selectedCharacter={selectedCharacter}
      onSelectCharacter={onSelectCharacter}
    />
  );
}

export default ItemsListContainer;
