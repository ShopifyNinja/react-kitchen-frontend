import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { edit, back } from "../../../../assets/images/index";

function ItemList({
  selectedItem,
  onSelectInnerItem,
  isShowSort,
  onSort,
  toggleSort,
  toggleShowInfo,
  isShowItemInfo,
}) {
  const { data, name } = selectedItem;

  return (
    <div className="user-list">
      <div className="search-menu">
        <div className="Cabinet-withback">
          {isShowItemInfo && (
            <button className="back-btn">
              <img src={back} alt="back" onClick={toggleShowInfo} />
            </button>
          )}
          <div className="d-flex">
            <h2 className="menu-title">{name}</h2>
            {!isShowItemInfo && (
              <div className="edit-icons ">
                <button>
                  <img src={edit} alt="edit" />
                </button>
              </div>
            )}
          </div>
        </div>

        <ul className="user-detail-list list-unstyled ">
          <div className="item-sorting">
            <h4 className="sub-title">GROUPS AND ITEMS</h4>
            {!isShowItemInfo && (
              <Dropdown isOpen={isShowSort} toggle={toggleSort}>
                <DropdownToggle caret>Sort</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem className="alpha-title" onClick={onSort}>
                    Alphabetical
                  </DropdownItem>
                  <DropdownItem>Type</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )}
          </div>

          {data.map((item, index) => {
            return (
              <li
                className="user-detail-list-item"
                key={index}
                onClick={() => {
                  onSelectInnerItem(item);
                }}
              >
                <h4>{item.name}</h4>
                <p>{item.description || "None"}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ItemList;
