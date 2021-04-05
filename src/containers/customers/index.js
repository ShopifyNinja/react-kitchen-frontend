import React, { useState } from "react";
import Customer from "./component";
import { CustomerList } from "./util";
import { ALPHABETS } from "../../shared/constants";

const letters = ALPHABETS.map((item) => {
  return {
    value: item,
    isActive: false,
  };
});

function CustomerContainer({ customer }) {
  const customerInfo = CustomerList.find((el) => {
    const name = el && el.name;
    const customerName = customer && customer.name;
    return name === customerName;
  });

  const customerList = CustomerList.map((list) => {
    const customerName = customer && customer.name;
    if (list.name === customerName) {
      return {
        ...list,
        isActive: true,
      };
    } else {
      return {
        ...list,
        isActive: false,
      };
    }
  });

  const [list, setList] = useState(customerList);
  const [isShowInfo, setShowInfo] = useState(false);
  const [isNewCustomer, setNewCustomer] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(
    customerInfo || customerList[0]
  );
  const [alphabets, setAlphabets] = useState(letters);
  const [selectedCharacter, setSelectedCharacter] = useState();

  const toggleShowInfo = () => {
    setShowInfo(!isShowInfo);
  };

  const toggleCustomer = () => {
    setNewCustomer(!isNewCustomer);
    setSelectedCustomer({});
  };

  const handleSelect = (index) => {
    const newArray = CustomerList.slice();
    const updatedArray = newArray.map((el, key) => {
      if (key === index) {
        return {
          ...el,
          isActive: true,
        };
      } else {
        return {
          ...el,
          isActive: false,
        };
      }
    });
    let user = newArray[index];
    setSelectedCustomer(user);
    toggleShowInfo();
    setList(updatedArray);
    setNewCustomer(false);
  };

  const handleCharacterSelection = (character) => {
    const key = `char_${character}`;
    const element = document.getElementById(key);
    if (element) {
      element.scrollIntoView();
    }
    setSelectedCharacter(character);
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    const newList = CustomerList.filter((el) => {
      const name = el.name.toLowerCase();
      if (value) {
        return name.includes(value.toLowerCase());
      } else {
        return [];
      }
    });

    if (newList.length > 0) {
      setList(newList);
    } else {
      setList(CustomerList);
    }
  };

  const updateCustomer = ({ key, data }) => {
    const newArray =
      key === "phones"
        ? selectedCustomer.phones
          ? selectedCustomer.phones
          : []
        : key === "emails"
        ? selectedCustomer.emails
          ? selectedCustomer.emails
          : []
        : null;
    const newData = Object.assign({}, data);
    delete newData.error;
    if (newArray) {
      newArray.push(newData);
      const obj = {
        ...selectedCustomer,
        [key]: newArray,
      };
      setSelectedCustomer(obj);
    }

    if (key === "address" || key === "name") {
      const obj = {
        ...selectedCustomer,
        [key]: data.value,
      };
      setSelectedCustomer(obj);
    }
  };
  return (
    <Customer
      isShowInfo={isShowInfo}
      toggleShowInfo={toggleShowInfo}
      CustomerList={list}
      selectedCustomer={selectedCustomer}
      onSelectCustomer={handleSelect}
      onSelectCharacter={handleCharacterSelection}
      selectedCharacter={selectedCharacter}
      alphabets={alphabets}
      onSearch={handleSearch}
      updateCustomer={updateCustomer}
      toggleCustomer={toggleCustomer}
      isNewCustomer={isNewCustomer}
    />
  );
}

export default CustomerContainer;
