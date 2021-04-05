import React from "react";
import { Row, Col, Container } from "reactstrap";
import SearchBar from "../../components/Searchbar";
import CustomersList from "./components/customersList";
import CustomerInfo from "./components/customerInfo";
import UploadBox from "../../components/UploadBox";

function Customer({
  isShowInfo,
  toggleShowInfo,
  CustomerList,
  selectedCustomer,
  onSelectCustomer,
  selectedCharacter,
  onSelectCharacter,
  alphabets,
  onSearch,
  updateCustomer,
  toggleCustomer,
  isNewCustomer,
}) {
  return (
    <section className="users-page">
      <Container>
        <Row xs="1" sm="1" lg="2" xl="2" className=" justify-content-between">
          <Col xl="6">
            <div className="right-shadow">
              <h2 className="menu-title">Customers</h2>
              <div className="search-outer">
                <SearchBar onSearch={onSearch} />
                <CustomersList
                  list={CustomerList}
                  onSelectCustomer={onSelectCustomer}
                  selectedCharacter={selectedCharacter}
                  onSelectCharacter={onSelectCharacter}
                  alphabets={alphabets}
                />
              </div>
              <UploadBox
                text="Import customer data"
                handleAdd={toggleCustomer}
              />
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
              <CustomerInfo
                SelectedCustomer={selectedCustomer}
                updateCustomer={updateCustomer}
                isNewCustomer={isNewCustomer}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Customer;
