import React from "react";
import { useHistory } from "react-router-dom";
import Dashboard from "./component";
import { ROUTES } from "../../shared/constants";

function DashboardContainer(props) {
  const history = useHistory();
  const location = history.location?.pathname;

  return <Dashboard isShowMenu={location === ROUTES.menu ? true : false} />;
}

export default DashboardContainer;
