import React from "react";
import { upload, whitePlus } from "../../assets/images/index";

function UploadBox({ text, importModal, handleAdd }) {
  return (
    <div className="upload-box">
      <button className="upload-btn">
        <img src={whitePlus} alt="whitePlus" onClick={handleAdd} />
      </button>
      <h5 className="import-txt" onClick={importModal}>
        <img src={upload} alt="upload" />
        {text}
      </h5>
    </div>
  );
}

export default UploadBox;
