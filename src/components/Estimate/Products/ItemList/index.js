import React, { useState } from "react";
import ItemList from "./component";

function ItemListContainer({
  selectedItem,
  onSelectInnerItem,
  toggleShowInfo,
  isShowItemInfo,
  setSelectedItem,
}) {
  const [isShowSort, setShowSort] = useState(false);

  const handleSort = () => {
    const { data } = selectedItem;
    const newObject = Object.assign(selectedItem);
    const sortedData = data.slice().sort((a, b) => {
      return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
    });
    newObject.data = sortedData;
    setSelectedItem(newObject);
  };

  const toggleSort = () => {
    setShowSort(!isShowSort);
  };

  return (
    <ItemList
      selectedItem={selectedItem}
      onSelectInnerItem={onSelectInnerItem}
      onSort={handleSort}
      isShowSort={isShowSort}
      toggleSort={toggleSort}
      toggleShowInfo={toggleShowInfo}
      isShowItemInfo={isShowItemInfo}
    />
  );
}

export default ItemListContainer;
