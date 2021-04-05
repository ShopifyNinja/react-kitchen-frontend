import React, { useState, useEffect } from "react";
import CustomerInfo from "./component";
import {
  validatePhone,
  validateEmail,
} from "../../../../shared/utils/validation";

// const infoFields = {
//   name: {
//     id: "name",
//     value: "",
//     isEdit: false,
//   },
//   address: {
//     id: "address",
//     value: "",
//     isEdit: false,
//   },
//   phones: {
//     id: "phones",
//     value: "",
//     isEdit: false,
//   },
//   emails: {
//     id: "emails",
//     value: "",
//     isEdit: false,
//   },
// };

function CustomerInfoContainer({
  SelectedCustomer,
  updateCustomer,
  isNewCustomer,
}) {
  const [isAddPhone, setAddPhone] = useState(false);
  const [isAddName, setAddName] = useState(false);
  const [isAddEmail, setAddEmail] = useState(false);
  const [isAddAddress, setAddAddress] = useState(false);
  const [newPhone, setNewPhone] = useState();
  const [newEmail, setNewEmail] = useState();
  const [newAddress, setNewAddress] = useState();
  const [newName, setNewName] = useState();

  useEffect(() => {
    setAddPhone(false);
    setAddName(false);
    setAddEmail(false);
    setAddAddress(false);
  }, [isNewCustomer]);

  const togglePhone = () => {
    setAddPhone(!isAddPhone);
    setNewPhone();
  };

  const toggleName = () => {
    setAddName(!isAddName);
    setNewName();
  };

  const toggleEmail = () => {
    setAddEmail(!isAddEmail);
    setNewEmail();
  };

  const toggleAddress = () => {
    setAddAddress(!isAddAddress);
    setNewAddress();
  };

  const handleChange = (e, key) => {
    if (key === "phones") {
      const value = e.target.value;
      const isValid = validatePhone(value);
      const obj = {
        ...newPhone,
        value,
        error: isValid ? "" : "*Please enter valid phone",
      };
      setNewPhone(obj);
    } else if (key === "phoneLabel") {
      const value = e;
      const obj = {
        ...newPhone,
        label: value,
      };
      setNewPhone(obj);
    } else if (key === "emails") {
      const value = e.target.value;
      const isValid = validateEmail(value);
      const obj = {
        ...newEmail,
        value,
        error: isValid ? "" : "*Please enter valid email",
      };
      setNewEmail(obj);
    } else if (key === "emailLabel") {
      const value = e;
      const obj = {
        ...newEmail,
        label: value,
      };
      setNewEmail(obj);
    } else if (key === "address") {
      const value = e.target.value;
      const obj = {
        ...newAddress,
        value: value,
        label: "address",
      };
      setNewAddress(obj);
    } else if (key === "name") {
      const value = e.target.value;
      const obj = {
        ...newAddress,
        value: value,
        label: "name",
      };
      setNewName(obj);
    }
  };

  const updateData = (key) => {
    if (key === "phones") {
      if (!newPhone.error) {
        updateCustomer({ key, data: newPhone });
        togglePhone();
      }
    } else if (key === "emails") {
      if (!newEmail.error) {
        updateCustomer({ key, data: newEmail });
        toggleEmail();
      }
    } else if (key === "address") {
      updateCustomer({ key, data: newAddress });
      toggleAddress();
    } else if (key === "name") {
      updateCustomer({ key, data: newName });
      toggleName();
    }
  };

  return (
    <CustomerInfo
      SelectedCustomer={SelectedCustomer}
      isAddPhone={isAddPhone}
      togglePhone={togglePhone}
      handleChange={handleChange}
      newPhone={newPhone}
      newEmail={newEmail}
      toggleEmail={toggleEmail}
      updateData={updateData}
      isAddEmail={isAddEmail}
      newAddress={newAddress}
      isAddAddress={isAddAddress}
      toggleAddress={toggleAddress}
      isAddName={isAddName}
      toggleName={toggleName}
      newName={newName}
      // handleEdit={handleEdit}
    />
  );
}

export default CustomerInfoContainer;
