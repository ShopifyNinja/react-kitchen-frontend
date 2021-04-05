import React, { useState } from "react";
import Users from "./component";
import { UserList } from "./util";
import { ALPHABETS } from "../../shared/constants";

const letters = ALPHABETS.map((item) => {
  return {
    value: item,
    isActive: false,
  };
});

function UsersContainer(props) {
  const [list, setList] = useState(UserList);
  const [isShowInfo, setShowInfo] = useState(false);
  const [selectedUser, setSelectedUser] = useState(UserList[0]);
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [alphabets, setAlphabets] = useState(letters);

  const toggleShowInfo = () => {
    setShowInfo(!isShowInfo);
  };

  const handleSelect = (index) => {
    const newArray = UserList.slice();
    let user = newArray[index];
    setSelectedUser(user);
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
    const newList = UserList.filter((el) => {
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
      setList(UserList);
    }
  };

  return (
    <Users
      isShowInfo={isShowInfo}
      toggleShowInfo={toggleShowInfo}
      UserList={list}
      SelectedUser={selectedUser}
      onSelectUser={handleSelect}
      onSelectCharacter={handleCharacterSelection}
      selectedCharacter={selectedCharacter}
      alphabets={alphabets}
      onSearch={handleSearch}
    />
  );
}

export default UsersContainer;
