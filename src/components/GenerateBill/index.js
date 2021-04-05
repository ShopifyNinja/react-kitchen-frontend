import React from "react";

function GenerateBill({ billData }) {
  const { discount, subTotal, total } = billData;

  return (
    <>
      <h5 className="list-head"> TOTALS </h5>
      <div className="estimate-cost-list">
        <h6> Subtotal of Costs </h6> <label> ${subTotal || "0.0"}</label>
      </div>
      <div className="estimate-cost-list">
        <h6> Discounts </h6> <label> ${discount || "0.0"}</label>
      </div>
      <div className="estimate-cost-list discount-total">
        <h6>
          {" "}
          Total with <br /> Discounts{" "}
        </h6>{" "}
        <label> ${total || "0.0"}</label>
      </div>
    </>
  );
}

export default GenerateBill;
