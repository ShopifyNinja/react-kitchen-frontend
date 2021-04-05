import React from "react";
import { useHistory } from "react-router-dom";
import Sales from "./component";

function SalesContainer({ isShowMenu }) {
  const history = useHistory();

  const handleClick = (item) => {
    history.push(item.path);
  };

  return <Sales isShowMenu={isShowMenu} onClick={handleClick} />;
}

export default SalesContainer;
