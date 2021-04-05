import React, { useState } from "react";
import Discounts from "./component";

function DiscountsContainer({ setSelectedSection }) {
  const [customDiscount, setCustomDiscount] = useState("");

  return (
    <Discounts
      setSelectedSection={setSelectedSection}
      customDiscount={customDiscount}
      setCustomDiscount={setCustomDiscount}
    />
  );
}

export default DiscountsContainer;
