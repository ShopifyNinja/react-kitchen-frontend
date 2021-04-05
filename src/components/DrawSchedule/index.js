import React, { useState } from "react";
import DrawSchedule from "./component";

function DrawScheduleContainer({ setSelectedSection, data }) {
  const [invoices, setInvoices] = useState(data);
  const [showData, setShowData] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [addData, setAddData] = useState([]);

  return (
    <DrawSchedule
      setSelectedSection={setSelectedSection}
      data={invoices}
      setInvoices={setInvoices}
      showData={showData}
      setShowData={setShowData}
      description={description}
      setDescription={setDescription}
      value={value}
      setValue={setValue}
      addData={addData}
      setAddData={setAddData}
      showIcon={showIcon}
      setShowIcon={setShowIcon}
    />
  );
}

export default DrawScheduleContainer;
