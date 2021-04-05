import React from "react";
import { Row, Col, Container } from "reactstrap";
import UsersList from "./usersList";
import UserInfo from "./userInfo";
import SearchBar from "../../components/Searchbar";
import UploadBox from "../../components/UploadBox";

function Users({
  isShowInfo,
  toggleShowInfo,
  SelectedUser,
  UserList,
  onSelectUser,
  selectedCharacter,
  onSelectCharacter,
  alphabets,
  onSearch,
}) {
  return (
    <section className="users-page">
      <Container>
        <Row xs="1" sm="1" lg="2" xl="2" className="justify-content-between">
          <Col xl="6">
            <div className="right-shadow">
              <h2 className="menu-title">Users</h2>
              <div className="search-outer">
                <SearchBar onSearch={onSearch} />
                <UsersList
                  list={UserList}
                  onSelectUser={onSelectUser}
                  selectedCharacter={selectedCharacter}
                  onSelectCharacter={onSelectCharacter}
                  alphabets={alphabets}
                />
              </div>
              <UploadBox text="Import user data" />
            </div>
          </Col>

          <Col
            xl="6"
            className={` ${
              isShowInfo ? "user-right-box-show" : "user-right-box-none"
            }`}
            onClick={toggleShowInfo}
          >
            <div className="user-right-inner">
              <UserInfo SelectedUser={SelectedUser} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Users;
