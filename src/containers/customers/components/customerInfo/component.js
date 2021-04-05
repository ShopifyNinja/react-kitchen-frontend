import React, { useState } from "react";
import Input from "../../../../components/Input";
import {
  edit,
  more,
  plus,
  deleteIcon,
  cross,
} from "../../../../assets/images/index";
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

function CustomerInfo({
  SelectedCustomer,
  updateCustomer,
  isAddPhone,
  togglePhone,
  handleChange,
  newPhone,
  updateData,
  toggleEmail,
  newEmail,
  isAddEmail,
  newAddress,
  toggleAddress,
  isAddAddress,
  isAddName,
  toggleName,
  newName,
  handleEdit,
}) {
  const { emails, phones, name, address } = SelectedCustomer;
  const [dropdownPhone, setDropdownPhone] = useState(false);
  const [dropdownEmail, setDropdownEmail] = useState(false);
  const toggleDropDownPhone = () => setDropdownPhone((prevState) => !prevState);
  const toggleDropDownEmail = () => setDropdownEmail((prevState) => !prevState);

  const phoneLabels = [
    {
      id: 1,
      label: "Mobile",
    },
    {
      id: 2,
      label: "Phone",
    },
    {
      id: 3,
      label: "Other",
    },
  ];

  const emailLabels = [
    {
      id: 1,
      label: "Primary",
    },
    {
      id: 2,
      label: "Main",
    },
  ];

  return (
    <div className="user-list">
      <div className="d-flex justify-content-between">
        <div className="user-name  top-edit-icon">
          {/* <h2 className="menu-title">{name || "Customer Name"}</h2> */}
          {isAddName ? (
            <Input
              placeholder="enter name"
              onChange={handleChange}
              id="name"
              updateData={updateData}
              data={newName}
            />
          ) : (
            <h2 className="menu-title">{name || "Customer Name"}</h2>
          )}
          <div className="edit-icons ">
            <button>
              <img
                src={edit}
                alt="edit"
                onClick={() => {
                  toggleName();
                  // handleEdit();
                }}
              />
            </button>
          </div>
        </div>
        <div className="edit-icons ">
          <button>
            <img src={more} alt="more" />
          </button>
        </div>
      </div>

      <ul className="user-detail-list list-unstyled ">
        <div className="estimate-head">
          <h5 className="sub-title">PHONE NUMBER(s)</h5>
          <div className="estimate-btn">
            {isAddPhone && (
              <button>
                <img src={deleteIcon} alt="delete" />
              </button>
            )}
            <button onClick={togglePhone}>
              <img src={isAddPhone ? cross : plus} alt="plus" />
            </button>
          </div>
        </div>
        {phones &&
          phones.map((item, index) => {
            return (
              <li key={`key_${index}`}>
                <h4>{item.value}</h4>
                <p>{item.label}</p>
              </li>
            );
          })}
      </ul>
      {isAddPhone && (
        <div className="add-phone">
          <div className="add-phone-number">
            <Dropdown
              className="phone-dropdown"
              isOpen={dropdownPhone}
              toggle={toggleDropDownPhone}
            >
              <DropdownToggle caret>
                {(newPhone && newPhone.label) || "select type"}
              </DropdownToggle>
              <DropdownMenu>
                {phoneLabels.map((el) => {
                  return (
                    <DropdownItem
                      key={el.id}
                      onClick={() => {
                        handleChange(el.label, "phoneLabel");
                      }}
                    >
                      {" "}
                      {el.label}{" "}
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </Dropdown>
          </div>

          <Input
            placeholder="Enter phone"
            onChange={handleChange}
            id="phones"
            msg={newPhone && newPhone.error}
            updateData={updateData}
            data={newPhone}
          />
        </div>
      )}

      <ul className="user-detail-list list-unstyled ">
        <div className="estimate-head">
          <h5 className="sub-title">EMAIL(S)</h5>
          <div className="estimate-btn">
            {isAddEmail && (
              <button>
                <img src={deleteIcon} alt="delete" />
              </button>
            )}
            <button>
              <img
                src={isAddEmail ? cross : plus}
                alt="plus"
                onClick={toggleEmail}
              />
            </button>
          </div>
        </div>
        {emails &&
          emails.map((item, index) => {
            return (
              <li key={`key_${index}`}>
                <h4>{item.value}</h4>
                <p>{item.label}</p>
              </li>
            );
          })}
      </ul>

      {isAddEmail && (
        <div className="add-phone">
          <div className="add-phone-number">
            <Dropdown
              className="phone-dropdown"
              isOpen={dropdownEmail}
              toggle={toggleDropDownEmail}
            >
              <DropdownToggle caret>
                {(newEmail && newEmail.label) || "select type"}
              </DropdownToggle>
              <DropdownMenu>
                {emailLabels.map((el) => {
                  return (
                    <DropdownItem
                      key={el.id}
                      onClick={() => {
                        handleChange(el.label, "emailLabel");
                      }}
                    >
                      {el.label}
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </Dropdown>
          </div>
          <Input
            placeholder="enter email"
            onChange={handleChange}
            id="emails"
            msg={newEmail && newEmail.error}
            updateData={updateData}
            data={newEmail}
          />
        </div>
      )}

      {/* <ul className="user-detail-list list-unstyled "> */}
      <div className="estimate-head">
        <h5 className="sub-title">ADDRESS</h5>
        <div className="estimate-btn">
          {!address && (
            <button>
              <img src={plus} alt="plus" onClick={toggleAddress} />
            </button>
          )}
          {isAddAddress && (
            <button>
              <img src={deleteIcon} alt="delete" />
            </button>
          )}
        </div>
      </div>
      <div>
        <h4>{address}</h4>
      </div>
      {/* </ul> */}

      {isAddAddress && (
        <div>
          <Input
            placeholder="enter address"
            onChange={handleChange}
            id="address"
            updateData={updateData}
            data={newAddress}
          />
        </div>
      )}
    </div>
  );
}

export default CustomerInfo;
