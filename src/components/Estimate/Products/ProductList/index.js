import React from "react";
import ProductList from "./component";

function ProductListContainer({ list, onSelect, updateBreadCrumbs }) {
  return (
    <ProductList
      list={list}
      onSelect={onSelect}
      updateBreadCrumbs={updateBreadCrumbs}
    />
  );
}

export default ProductListContainer;
