import React, { useState } from "react";
import Discounts from "./components";
import { DiscountList } from "./utils";
import { ALPHABETS } from "../../shared/constants";

const letters = ALPHABETS.map((item) => {
  return {
    value: item,
    isActive: false,
  };
});

function DiscountsContainer(props) {
  const [list, setList] = useState(DiscountList);
  const [isShowInfo, setShowInfo] = useState(false);
  const [selectedDiscount, setSelectedDiscount] = useState(DiscountList[0]);
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [alphabets, setAlphabets] = useState(letters);
  const toggleShowInfo = () => {
    setShowInfo(!isShowInfo);
  };

  const handleSelect = (index) => {
    const newArray = DiscountList.slice();
    let user = newArray[index];
    setSelectedDiscount(user);
    toggleShowInfo();
  };
  const handleCharacterSelection = (character) => {
    const key = `char_${character}`;
    const element = document.getElementById(key);
    if (element) {
      element.scrollIntoView();
    }

    setSelectedCharacter(character);
  };
  const handleSearch = (event) => {
    const value = event.target.value;
    const newList = DiscountList.filter((el) => {
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
      setList(DiscountList);
    }
  };

  return (
    <Discounts
      isShowInfo={isShowInfo}
      toggleShowInfo={toggleShowInfo}
      DiscountList={list}
      selectedDiscount={selectedDiscount}
      onSelectDiscount={handleSelect}
      onSelectCharacter={handleCharacterSelection}
      selectedCharacter={selectedCharacter}
      alphabets={alphabets}
      onSearch={handleSearch}
    />
  );
}

export default DiscountsContainer;
