import React from "react";
import UsersList from "./component";
function UserListContainer({
  list,
  onSelectUser,
  selectedCharacter,
  onSelectCharacter,
  alphabets,
}) {
  return (
    <UsersList
      list={list}
      alphabets={alphabets}
      onSelectUser={onSelectUser}
      selectedCharacter={selectedCharacter}
      onSelectCharacter={onSelectCharacter}
    />
  );
}

export default UserListContainer;
