import React, { useState } from "react";
import CompanyProfile from "./component";
import { handleImageFileUpload } from "../../shared/utils/utility";

function CompanyProfileContainer(props) {
  const [profilePic, setProfilePic] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [companyName, setCompanyName] = useState("Kitchen Experts");

  const handleFileUpload = (event) => {
    const { url } = handleImageFileUpload(event);
    setProfilePic(url);
  };

  const editCompanyName = (e) => {
    setCompanyName(e.target.value);
  };

  const handleEdit = () => {
    setIsEdit(false);
  };

  return (
    <CompanyProfile
      profilePic={profilePic}
      handleFileUpload={handleFileUpload}
      companyName={companyName}
      editCompanyName={editCompanyName}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      handleEdit={handleEdit}
    />
  );
}

export default CompanyProfileContainer;
