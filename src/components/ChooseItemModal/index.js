import React from "react";
import { Modal, FormGroup, Label, Input } from "reactstrap";
import { modalClose, modalTick } from "../../assets/images/index";

function ChooseItemModal({
  isOpen,
  items,
  toggleModal,
  title,
  toggleTemplate,
}) {
  return (
    <Modal className="item-modal" isOpen={isOpen} centered>
      <div className="modal-header">
        <h2 className="modal-title">{title}</h2>
        <div className="modal-icons">
          <button className="mr-4">
            <img
              src={modalClose}
              alt="plus"
              onClick={() => {
                toggleModal();
                toggleTemplate(false);
              }}
            />
          </button>
          <button>
            <img
              src={modalTick}
              alt="tick"
              onClick={() => {
                toggleModal();
                toggleTemplate(false);
              }}
            />
          </button>
        </div>
      </div>
      <div className="radio-list">
        <FormGroup>
          {items.map((item, index) => {
            return (
              <Label className="radio-outer" key={`label_${index}`}>
                {item.label}
                <Input type="radio" name="item" />
                <span className="radio-chk"></span>
              </Label>
            );
          })}
        </FormGroup>
      </div>
    </Modal>
  );
}

export default ChooseItemModal;
