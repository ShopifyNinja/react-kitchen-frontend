import React from "react";
import { useHistory } from "react-router-dom";
import AdminBlock from "./component";

function AdminBlockContainer(props) {
  const history = useHistory();

  const handleClick = (item) => {
    history.push(item.path);
  };

  return <AdminBlock onClick={handleClick} />;
}

export default AdminBlockContainer;
