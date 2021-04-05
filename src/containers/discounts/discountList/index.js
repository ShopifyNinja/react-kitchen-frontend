import React from "react";
import DiscountList from "./component";

function DiscountListContainer({
  list,
  onSelectDiscount,
  selectedCharacter,
  onSelectCharacter,
  alphabets,
}) {
  return (
    <DiscountList
      list={list}
      alphabets={alphabets}
      onSelectDiscount={onSelectDiscount}
      selectedCharacter={selectedCharacter}
      onSelectCharacter={onSelectCharacter}
    />
  );
}

export default DiscountListContainer;
