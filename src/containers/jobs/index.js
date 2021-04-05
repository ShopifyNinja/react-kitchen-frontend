import React, { useState } from "react";
import Jobs from "./component";
import { JobList } from "./util";
import { ALPHABETS } from "../../shared/constants";
import Estimate from "../../components/Estimate";
import Customer from "../customers";

const letters = ALPHABETS.map((item) => {
  return {
    value: item,
    isActive: false,
  };
});

const jobList = JobList.map((list) => {
  return {
    ...list,
    isActive: false,
  };
});

function JobsContainer(props) {
  const [list, setList] = useState(jobList);
  const [isShowInfo, setShowInfo] = useState(false);
  const [isShowEstimate, setShowEstimate] = useState(false);
  const [isShowCustomer, setShowCustomer] = useState(false);
  const [selectedUser, setSelectedUser] = useState(jobList[0]);
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [selectedEstimate, setSelectedEstimate] = useState();
  const [alphabets, setAlphabets] = useState(letters);
  const [selectedCustomer, setSelectedCustomer] = useState();

  const toggleShowInfo = () => {
    setShowInfo(!isShowInfo);
  };

  const toggleEstimate = (estimate) => {
    setShowEstimate(!isShowEstimate);
    setSelectedEstimate(estimate);
  };

  const handleSelect = (index) => {
    const newArray = jobList.slice();
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

    let user = updatedArray[index];
    setSelectedUser(user);
    toggleShowInfo();
    setList(updatedArray);
  };

  const selectCustomer = (customer) => {
    setSelectedCustomer(customer);
    setShowCustomer(true);
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
    const newList = JobList.filter((el) => {
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
      setList(JobList);
    }
  };

  const renderView = () => {
    if (isShowEstimate) {
      return (
        <Estimate
          toggleEstimate={toggleEstimate}
          selectedEstimate={selectedEstimate}
          selectedJob={selectedUser}
        />
      );
    } else if (isShowCustomer) {
      return <Customer customer={selectedCustomer} />;
    } else {
      return (
        <Jobs
          isShowInfo={isShowInfo}
          toggleShowInfo={toggleShowInfo}
          UserList={list}
          SelectedUser={selectedUser}
          onSelectUser={handleSelect}
          onSelectCharacter={handleCharacterSelection}
          selectedCharacter={selectedCharacter}
          alphabets={alphabets}
          onSearch={handleSearch}
          toggleEstimate={toggleEstimate}
          onSelectCustomer={selectCustomer}
        />
      );
    }
  };

  return <>{renderView()}</>;
}

export default JobsContainer;
