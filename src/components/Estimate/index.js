import React, { useState } from "react";
import Estimate from "./component";
import Products from "./Products";
import { SECTION } from "./util";

function EstimateContainer({ toggleEstimate, selectedEstimate, selectedJob }) {
  const [isShowSignature] = useState(false);
  const [isShowPhotos, setShowPhotos] = useState(false);
  const [isShowProducts, setShowProducts] = useState(false);
  const [selectedSignature, setSelectedSignature] = useState();
  const [selectedProduct, setSelectedProduct] = useState();
  const [selectedSection, setSelectedSection] = useState();

  const togglePhotos = () => {
    setShowPhotos(!isShowPhotos);
  };

  const selectSignature = (field) => {
    setSelectedSection(SECTION.signature);
    setSelectedSignature(field);
  };

  const selectProduct = (data) => {
    setShowProducts(true);
    setSelectedProduct(data);
  };

  const toggleProduct = () => {
    setShowProducts(!isShowProducts);
  };

  const renderView = () => {
    if (isShowProducts) {
      return (
        <Products
          selectedProduct={selectedProduct}
          toggleProduct={toggleProduct}
          toggleEstimate={toggleEstimate}
        />
      );
    } else {
      return (
        <Estimate
          toggleEstimate={toggleEstimate}
          selectedEstimate={selectedEstimate}
          selectedJob={selectedJob}
          isShowSignature={isShowSignature}
          selectSignature={selectSignature}
          selectedSignature={selectedSignature}
          selectProduct={selectProduct}
          isShowPhotos={isShowPhotos}
          togglePhotos={togglePhotos}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
      );
    }
  };

  return <>{renderView()}</>;
}
export default EstimateContainer;
