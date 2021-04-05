import React from "react";
import CustomersList from "./components";
import { ALPHABETS } from "../../../../shared/constants";

const letters = ALPHABETS.map((item) => {
  return {
    value: item,
    isActive: false,
  };
});

function CustomerListComponents({
  list,
  onSelectCustomer,
  selectedCharacter,
  onSelectCharacter,
}) {
  return (
    <CustomersList
      list={list}
      alphabets={letters}
      onSelectCustomer={onSelectCustomer}
      selectedCharacter={selectedCharacter}
      onSelectCharacter={onSelectCharacter}
    />
  );
}

export default CustomerListComponents;
