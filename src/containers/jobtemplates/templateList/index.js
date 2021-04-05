import React from "react";
import TemplateList from "./component";

function TemplateListContainer({
  list,
  onSelectTemplate,
  selectedCharacter,
  onSelectCharacter,
  alphabets,
}) {
  return (
    <TemplateList
      list={list}
      alphabets={alphabets}
      onSelectTemplate={onSelectTemplate}
      selectedCharacter={selectedCharacter}
      onSelectCharacter={onSelectCharacter}
    />
  );
}

export default TemplateListContainer;
