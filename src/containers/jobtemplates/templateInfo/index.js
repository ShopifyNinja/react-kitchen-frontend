import React from "react";
import TemplateInfo from "./component";

function TemplateInfoContainer({ selectedTemplate, toggleAddProduct }) {
  return (
    <TemplateInfo
      selectedTemplate={selectedTemplate}
      toggleAddProduct={toggleAddProduct}
    />
  );
}

export default TemplateInfoContainer;
