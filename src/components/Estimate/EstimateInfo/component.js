import React from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import ChooseItemModal from "../../ChooseItemModal";
import {
  edit,
  more,
  deleteIcon,
  plus,
  upload,
} from "../../../assets/images/index";
import { SECTION } from "../util";
import { productData } from "./util";

function EstimateInfo({
  title,
  data,
  selectProduct,
  setSelectedSection,
  toggleModal,
  isOpen,
  toggleTemplate,
  modalTitle,
  setModalTitle,
}) {
  const { info, photos, products, drawSchedule, discount } = data;
  return (
    <div className="user-list">
      <div className="user-name">
        <h2 className="menu-title">{title}</h2>
        <div className="edit-icons ">
          <button>
            <img src={edit} alt="edit" />
          </button>
          <UncontrolledDropdown className="more-dropdown">
            <DropdownToggle className="more-toggle" onClick={toggleTemplate}>
              <img src={more} alt="more" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                className="alpha-title"
                onClick={() => {
                  toggleModal();
                  setModalTitle("CHOOSE TEMPLATE");
                }}
              >
                <img src={upload} alt="upload" /> Import from template
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
      <ul className="user-detail-list list-unstyled ">
        <h4 className="sub-title">INFO</h4>
        {Object.keys(info).map((item) => {
          const field = info[item];
          return (
            <li className="user-detail-list-item" key={item}>
              <h4>{field.label}</h4>
              <p>{field.value || "None"}</p>
            </li>
          );
        })}
      </ul>
      <ul className="user-detail-list list-unstyled ">
        {
          <li
            className="user-detail-list-item"
            key={photos}
            onClick={() => {
              setSelectedSection(SECTION.photos);
            }}
          >
            <h5 className="sub-title">{photos.label}</h5>
            <p>{photos.value || "None"}</p>
          </li>
        }
      </ul>
      <ul className="user-detail-list list-unstyled ">
        <div className="estimate-head">
          <h4 className="sub-title">PRODUCTS</h4>
          <div className="estimate-btn">
            <button>
              <img src={deleteIcon} alt="deleteIcon" />
            </button>
            <button>
              <img
                src={plus}
                alt="plus"
                onClick={() => {
                  toggleModal();
                  setModalTitle("CHOOSE PRODUCT");
                }}
              />
            </button>
          </div>
        </div>
        {products.map((field) => {
          return (
            <li
              className="user-detail-list-item"
              key={field.id}
              onClick={() => {
                selectProduct(field);
              }}
            >
              <h4>{field.name}</h4>
              <p>{field.amount || "None"}</p>
            </li>
          );
        })}
      </ul>

      <ul className="user-detail-list list-unstyled ">
        {
          <li
            className="user-detail-list-item"
            key={drawSchedule}
            onClick={() => {
              setSelectedSection(SECTION.drawSchedule);
            }}
          >
            <h5 className="sub-title">{drawSchedule.label}</h5>
            <h4>{drawSchedule.value || "None"}</h4>
          </li>
        }
      </ul>
      <ul className="user-detail-list list-unstyled ">
        {
          <li
            className="user-detail-list-item"
            key={discount}
            onClick={() => {
              setSelectedSection(SECTION.discounts);
            }}
          >
            <h5 className="sub-title">{discount.label}</h5>
            <h4 className="No-Discount">{discount.value || "None"}</h4>
          </li>
        }
      </ul>
      <ChooseItemModal
        isOpen={isOpen}
        items={productData}
        toggleModal={toggleModal}
        title={modalTitle}
        toggleTemplate={toggleTemplate}
      />
    </div>
  );
}

export default EstimateInfo;
