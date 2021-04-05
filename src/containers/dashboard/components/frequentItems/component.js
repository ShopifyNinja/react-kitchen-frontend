import React from "react";
import { itemsData } from "./ItemsData";
import FrequentItem from "../../../../components/FrequentItem";

function FrequentItems({ isShowMenu }) {
  return (
    <>
      {itemsData.map((item) => {
        return (
          <FrequentItem key={item.id} title={item.name} icon={item.icon} />
        );
      })}
    </>
  );
}

export default FrequentItems;
