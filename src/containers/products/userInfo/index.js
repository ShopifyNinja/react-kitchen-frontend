import React from "react";
import UserInfo from "./component";

function UserInfoContainer({ SelectedUser }) {
  return <UserInfo SelectedUser={SelectedUser} />;
}

export default UserInfoContainer;
