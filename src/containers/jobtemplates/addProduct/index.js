import React from "react";
import AddProduct from "./component";

function AddProductContainer({ toggleAddProduct, title }) {
  return <AddProduct toggleAddProduct={toggleAddProduct} title={title} />;
}

export default AddProductContainer;
