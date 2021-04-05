import React, { useState } from "react";
import Signature from "./component";

function SignatureContainer({ selectedSignature, setSelectedSection }) {
  const [startDate, setStartDate] = useState(new Date());
  const [file, setFile] = useState();

  const addFile = (file) => {
    const files = file.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setFile(files);
  };

  const onDrop = (accepted, rejected) => {
    if (Object.keys(rejected).length !== 0) {
    } else {
      addFile(accepted);
      var blobPromise = new Promise((resolve, reject) => {
        const reader = new window.FileReader();
        reader.readAsDataURL(accepted[0]);
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
      });
      blobPromise.then(() => {});
    }
  };

  return (
    <Signature
      selectedSignature={selectedSignature}
      setSelectedSection={setSelectedSection}
      startDate={startDate}
      setStartDate={setStartDate}
      onDrop={onDrop}
      files={file}
    />
  );
}

export default SignatureContainer;
