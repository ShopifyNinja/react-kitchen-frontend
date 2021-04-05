import React from "react";
import { Row, Col, Container } from "reactstrap";
import UsersList from "./jobsList";
import UserInfo from "./jobInfo";
import SearchBar from "../../components/Searchbar";
import { whitePlus } from "../../assets/images/index";

function Jobs({
  isShowInfo,
  toggleShowInfo,
  SelectedUser,
  UserList,
  onSelectUser,
  selectedCharacter,
  onSelectCharacter,
  alphabets,
  onSearch,
  toggleEstimate,
  onSelectCustomer,
}) {
  return (
    <>
      <section className="users-page">
        <Container>
          <Row xs="1" sm="1" lg="2" xl="2" className="justify-content-between">
            <Col xl="6">
              <div className="right-shadow">
                <h2 className="menu-title">Jobs</h2>
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
                <div className="upload-box">
                  <button className="upload-btn">
                    <img src={whitePlus} alt="whitePlus" />
                  </button>
                </div>
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
                <UserInfo
                  SelectedUser={SelectedUser}
                  toggleEstimate={toggleEstimate}
                  onSelectCustomer={onSelectCustomer}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Jobs;
