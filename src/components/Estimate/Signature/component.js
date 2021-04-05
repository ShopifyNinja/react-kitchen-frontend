import React from "react";
import DatePicker from "react-datepicker";
import Dropzone from "react-dropzone";
import "react-datepicker/dist/react-datepicker.css";
import { more, cross } from "../../../assets/images/index";

function Signature({
  selectedSignature,
  setSelectedSection,
  startDate,
  setStartDate,
  onDrop,
  files,
}) {
  const { name, signature } = selectedSignature;
  const newfiles =
    (files &&
      files.map((file) => <img src={file.preview} alt="signature" />)) ||
    null;

  return (
    <div className="user-list">
      <div className="user-name">
        <h2 className="menu-title">{name}</h2>
        <div className="edit-icons ">
          <button>
            <img src={more} alt="more" />
          </button>
        </div>
      </div>
      <div className="signature-format">
        <Dropzone
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "center",
            border: " 1px dashed",
            backgroundColor: "red",
          }}
          multiple={false}
          accept="image/*"
          onDrop={(accepted, rejected) => {
            onDrop(accepted, rejected);
          }}
        >
          {({ getRootProps, getInputProps, isDragReject }) => {
            return (
              <div {...getRootProps()} className="upload-files">
                <input {...getInputProps()} />
                {isDragReject ? (
                  <p>Please submit a valid file </p>
                ) : newfiles ? (
                  newfiles[0]
                ) : (
                  <p>{signature}</p>
                )}
              </div>
            );
          }}
        </Dropzone>
        <button className="cross">
          <img src={cross} alt="cross" />
        </button>
      </div>

      <ul className="date-list  w-100 list-unstyled ">
        <li className="date-list-item">
          <h4>Date</h4>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </li>
      </ul>
      <button
        className="confirm-sign-btn"
        onClick={() => {
          setSelectedSection();
        }}
      >
        confirm signature
      </button>
    </div>
  );
}

export default Signature;
