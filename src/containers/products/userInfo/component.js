import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { edit, more } from "../../../assets/images/index";
import deleteIcon from "../../../assets/images/delete.svg";
import plus from "../../../assets/images/plus.svg";
import tick from "../../../assets/images/tick2.svg";

const detailView = (name, key) => {
  return <Card.Body key={key}>{name}</Card.Body>;
};

const cardDetail = (childrenList) => {
  const activeKey = childrenList[0].id;
  return (
    <Accordion defaultActiveKey={activeKey}>
      {childrenList.map((childFolder, index) => {
        if (!childFolder.childrenElements) {
          return detailView(childFolder.key, index);
        }
        return cardView(childFolder);
      })}
    </Accordion>
  );
};

const cardView = (folder) => {
  return (
    <Card key={folder.id + folder.key}>
      <Card.Header className="main-head">
        <Accordion.Toggle as={Button} variant="link" eventKey={folder.id}>
          {folder.key}
          <img className="folder-tick" src={tick} alt="tick" />
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={folder.id}>
        {cardDetail(folder.childrenElements)}
      </Accordion.Collapse>
    </Card>
  );
};

const folderView = (folderList) => {
  return cardDetail(folderList);
};

function UserInfo({ SelectedUser, folderList }) {
  return (
    <div className="user-list">
      <div className="user-name">
        <h2 className="menu-title">{SelectedUser.name}</h2>
        <div className="edit-icons ">
          <button>
            <img src={edit} alt="edit" />
          </button>
          <button>
            <img src={more} alt="more" />
          </button>
        </div>
      </div>
      <h3 className="remodel-of-a-basic">Remodel of a basic kitchen</h3>
      <div className="estimate-head">
        <h4 className="sub-title">TASKS</h4>
        <div className="estimate-btn">
          <button>
            <img src={deleteIcon} alt="delete" />
          </button>
          <button>
            <img src={plus} alt="plus" />
          </button>
        </div>
      </div>
      {SelectedUser &&
        SelectedUser.data &&
        SelectedUser.data.directories &&
        folderView(SelectedUser.data.directories)}
    </div>
  );
}

export default UserInfo;
