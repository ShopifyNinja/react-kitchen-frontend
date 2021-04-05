import React from "react";
import { salesItem } from "./salesItem";
import MenuItem from "../../../../components/MenuItem";
import { useLocation } from "react-router-dom";

function Sales({ isShowMenu, onClick }) {
  const location = useLocation();
  return (
    <div>
      {salesItem.map((item) => {
        if (isShowMenu || (!isShowMenu && item.id !== "home")) {
          return (
            <div
              onClick={() => {
                onClick(item);
              }}
              key={item.id}
            >
              <MenuItem
                title={item.title}
                subTitle={item.subTitle}
                icon={item.icon}
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default Sales;
