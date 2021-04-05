import React, { useState } from "react";
import Items from "./component";
import { ItemsList } from "./utils";
import { ALPHABETS } from "../../shared/constants";

const letters = ALPHABETS.map((item) => {
  return {
    value: item,
    isActive: false,
  };
});

function ItemContainer(props) {
  const [list, setList] = useState(ItemsList);
  const [selectedItem, setSelectedItem] = useState(ItemsList[0]);
  const [alphabets, setAlphabets] = useState(letters);
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [isShowInfo, setShowInfo] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleShowInfo = () => {
    setShowInfo(!isShowInfo);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (index) => {
    const newArray = ItemsList.slice();
    const selectedItem = newArray[index];
    setSelectedItem(selectedItem);
    toggleShowInfo();
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    const newList = ItemsList.filter((el) => {
      const name = el.name.toLowerCase();
      if (value) {
        return name.includes(value.toLowerCase());
      } else {
        return [];
      }
    });

    if (newList.length > 0) {
      setList(newList);
    } else {
      setList(ItemsList);
    }
  };

  const handleCharacterSelection = (character) => {
    const key = `char_${character}`;
    const element = document.getElementById(key);
    if (element) {
      element.scrollIntoView();
    }
    setSelectedCharacter(character);
  };

  return (
    <Items
      isShowInfo={isShowInfo}
      toggleShowInfo={toggleShowInfo}
      onSelectItem={handleSelect}
      SelectedItem={selectedItem}
      ItemsList={list}
      onSearch={handleSearch}
      onSelectCharacter={handleCharacterSelection}
      selectedCharacter={selectedCharacter}
      alphabets={alphabets}
      toggleModal={toggleModal}
      isOpen={isOpen}
    />
  );
}

export default ItemContainer;
