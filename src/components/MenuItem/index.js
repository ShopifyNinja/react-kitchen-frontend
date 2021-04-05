import React from "react";
import MenuItem from "./component";

function MenuitemContainer({ title, subTitle, icon }) {
  return <MenuItem title={title} subTitle={subTitle} icon={icon} />;
}

export default MenuitemContainer;
