import React, { useState, useEffect } from "react";
import Products from "./component";

function ProductsContainer({ selectedProduct, toggleProduct, toggleEstimate }) {
  const { items, name } = selectedProduct;
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [selectedInnerItem, setSelectedInnerItem] = useState();
  const [productList, setProductList] = useState(items);
  const [breadCrumbs, setBreadCrumbs] = useState([]);
  const [isShowItemInfo, setShowItemInfo] = useState(false);

  const handleSelect = (item) => {
    updateBreadCrumbs({ item });
    setSelectedItem(item);
  };

  const updateBreadCrumbs = ({ item, innerItem }) => {
    const rawSelectedItem = item
      ? item.name
      : selectedItem
      ? selectedItem.name
      : "";
    const rawSelectedInnerItem = innerItem
      ? innerItem.name
      : selectedInnerItem
      ? selectedInnerItem.name
      : "";
    const newArray = [];
    newArray.push(name);
    if (rawSelectedItem) {
      newArray.push(rawSelectedItem);
    }
    if (rawSelectedInnerItem) {
      newArray.push(rawSelectedInnerItem);
    }
    setBreadCrumbs(newArray);
  };

  const handleInnerItem = (item) => {
    updateBreadCrumbs({ innerItem: item });
    setSelectedInnerItem(item);
    setShowItemInfo(true);
  };

  const toggleShowInfo = () => {
    setShowItemInfo(!isShowItemInfo);
  };

  useEffect(() => {
    updateBreadCrumbs({ item: selectedItem, innerItem: selectedInnerItem });
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    const newList = items.filter((el) => {
      const name = el.name.toLowerCase();
      if (value) {
        return name.includes(value.toLowerCase());
      } else {
        return [];
      }
    });

    if (newList.length > 0) {
      setProductList(newList);
    } else {
      setProductList(items);
    }
  };

  return (
    <Products
      productName={name}
      toggleProduct={toggleProduct}
      selectedItem={selectedItem}
      productList={productList}
      onSelect={handleSelect}
      toggleEstimate={toggleEstimate}
      breadCrumbs={breadCrumbs}
      onSearch={handleSearch}
      isShowItemInfo={isShowItemInfo}
      toggleShowInfo={toggleShowInfo}
      onSelectInnerItem={handleInnerItem}
      selectedInnerItem={selectedInnerItem}
      setSelectedItem={setSelectedItem}
    />
  );
}

export default ProductsContainer;
