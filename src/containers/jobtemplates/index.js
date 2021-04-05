import React, { useState } from "react";
import JobTemplates from "./component";
import { JobTemplatesList } from "./utils";
import { ALPHABETS } from "../../shared/constants";
import AddProduct from "./addProduct";

const letters = ALPHABETS.map((item) => {
  return {
    value: item,
    isActive: false,
  };
});

function JobTemplateContainer(props) {
  const [list, setList] = useState(JobTemplatesList);
  const [alphabets, setAlphabets] = useState(letters);
  const [selectedTemplate, setSelectedTemplate] = useState(JobTemplatesList[0]);
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [isAddProduct, setAddProduct] = useState(false);
  const [productTitle, setProductTitle] = useState();
  const [isShowInfo, setShowInfo] = useState(false);

  const handleSearch = (event) => {
    const value = event.target.value;
    const newList = JobTemplatesList.filter((el) => {
      const name = el.name.toLowerCase();
      if (value) {
        return name.includes(value.toLowerCase());
      } else {
        return [];
      }
    });

    if (newList.length > 0) {
      setList(newList);
    } else {
      setList(JobTemplatesList);
    }
  };

  const toggleShowInfo = () => {
    setShowInfo(!isShowInfo);
  };

  const handleSelect = (index) => {
    const newArray = JobTemplatesList.slice();
    let user = newArray[index];
    setSelectedTemplate(user);
    toggleShowInfo();
  };

  const handleCharacterSelection = (character) => {
    const key = `char_${character}`;
    const element = document.getElementById(key);
    if (element) {
      element.scrollIntoView();
    }
    setSelectedCharacter(character);
  };

  const toggleAddProduct = (title) => {
    setAddProduct(!isAddProduct);
    const productName = title || productTitle;
    setProductTitle(productName);
  };

  const renderView = () => {
    if (isAddProduct) {
      return (
        <AddProduct toggleAddProduct={toggleAddProduct} title={productTitle} />
      );
    } else {
      return (
        <JobTemplates
          isShowInfo={isShowInfo}
          toggleShowInfo={toggleShowInfo}
          onSearch={handleSearch}
          templateList={list}
          alphabets={alphabets}
          selectedCharacter={selectedCharacter}
          onSelectCharacter={handleCharacterSelection}
          selectedTemplate={selectedTemplate}
          toggleAddProduct={toggleAddProduct}
          onSelectTemplate={handleSelect}
        />
      );
    }
  };

  return <div>{renderView()}</div>;
}

export default JobTemplateContainer;
