import React, { useState } from "react";
import EstimateInfo from "./component";

function EstimateInfoContainer({
  title,
  data,
  selectProduct,
  setSelectedSection,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowTemplate, setIsShowTemplate] = useState(false);
  const [modalTitle, setModalTitle] = useState();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleTemplate = (value) => {
    setIsShowTemplate(value || !isShowTemplate);
  };

  return (
    <EstimateInfo
      title={title}
      data={data}
      selectProduct={selectProduct}
      setSelectedSection={setSelectedSection}
      toggleModal={toggleModal}
      isOpen={isOpen}
      toggleTemplate={toggleTemplate}
      modalTitle={modalTitle}
      setModalTitle={setModalTitle}
    />
  );
}

export default EstimateInfoContainer;
