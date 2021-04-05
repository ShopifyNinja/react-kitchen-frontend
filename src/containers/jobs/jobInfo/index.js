import React from "react";
import JobsInfo from "./component";

function JobsInfoContainer({ SelectedUser, toggleEstimate, onSelectCustomer }) {
  return (
    <JobsInfo
      SelectedUser={SelectedUser}
      toggleEstimate={toggleEstimate}
      onSelectCustomer={onSelectCustomer}
    />
  );
}

export default JobsInfoContainer;
