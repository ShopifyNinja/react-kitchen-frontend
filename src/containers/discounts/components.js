import React from "react";
import { Row, Col, Container } from "reactstrap";
import SearchBar from "../../components/Searchbar";
import UploadBox from "../../components/UploadBox";
import DiscountsList from "./discountList";
import DiscountInfo from "./discountInfo";

function Discounts({
  isShowInfo,
  toggleShowInfo,
  selectedDiscount,
  DiscountList,
  onSelectDiscount,
  selectedCharacter,
  onSelectCharacter,
  alphabets,
  onSearch,
}) {
  return (
    <section className="users-page discount-page">
      <Container>
        <Row xs="1" sm="1" lg="2" xl="2" className="justify-content-between">
          <Col xl="6">
            <div className="right-shadow">
              <h2 className="menu-title">Discounts</h2>
              <div className="search-outer">
                <SearchBar onSearch={onSearch} />
                <DiscountsList
                  list={DiscountList}
                  onSelectDiscount={onSelectDiscount}
                  selectedCharacter={selectedCharacter}
                  onSelectCharacter={onSelectCharacter}
                  alphabets={alphabets}
                />
              </div>
              <UploadBox text="Import discount data" />
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
              <DiscountInfo selectedDiscount={selectedDiscount} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Discounts;
