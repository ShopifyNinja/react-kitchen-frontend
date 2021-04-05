import React from "react";
import { Modal, FormGroup, Input } from "reactstrap";
import { modalClose, modalTick } from "../../assets/images/index";
function ImportDataModal({ isOpen, toggleModal }) {
  return (
    <Modal className="item-modal google-doc-modal" isOpen={isOpen} centered>
      <div className="modal-header">
        <h2 className="modal-title">PASTE GOOGLE DOC ID</h2>
        <div className="modal-icons">
          <button className="mr-4" onClick={toggleModal}>
            <img src={modalClose} alt="plus" />
          </button>
          <button onClick={toggleModal}>
            <img src={modalTick} alt="tick" />
          </button>
        </div>
      </div>
      <FormGroup>
        <Input />
      </FormGroup>
    </Modal>
  );
}

export default ImportDataModal;
