import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./component";
import { ROUTES } from "../../shared/constants";

function HeaderContainer({ isOpen, toggle }) {
  const history = useHistory();
  const [isShowMenu, setShowMenu] = useState(false);
  const pathName = history.location.pathname;

  const toggleMenu = () => {
    setShowMenu(!isShowMenu);
    if (pathName == "/menu") {
      history.goBack();
    } else {
      history.push(ROUTES.menu);
    }
  };

  return (
    <div>
      <Header
        isOpen={isOpen}
        toggle={toggle}
        isShowMenu={isShowMenu}
        toggleMenu={toggleMenu}
      />
    </div>
  );
}

export default HeaderContainer;
