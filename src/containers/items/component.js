import React from "react";
import { Row, Col, Container } from "reactstrap";
import Item from "./itemsLists/index.js";
import SearchBar from "../../components/Searchbar";
import UploadBox from "../../components/UploadBox";
import ItemInfo from "./itemInfo";
import ImportDataModal from "../../components/importDataModal";

function Items({
  isShowInfo,
  toggleShowInfo,
  SelectedItem,
  ItemsList,
  onSelectItem,
  selectedCharacter,
  onSelectCharacter,
  alphabets,
  onSearch,
  toggleModal,
  isOpen,
}) {
  return (
    <>
      <section className="users-page">
        <Container>
          <Row xs="1" sm="1" lg="2" xl="2" className="justify-content-between">
            <Col xl="6">
              <div className="right-shadow">
                <h2 className="menu-title">Items</h2>
                <div className="search-outer">
                  <SearchBar onSearch={onSearch} />
                  <Item
                    list={ItemsList}
                    onSelectItem={onSelectItem}
                    selectedCharacter={selectedCharacter}
                    onSelectCharacter={onSelectCharacter}
                    alphabets={alphabets}
                  />
                </div>
                <UploadBox text="Import item data" importModal={toggleModal} />
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
                <ItemInfo SelectedItem={SelectedItem} />
              </div>
            </Col>
          </Row>
          <ImportDataModal isOpen={isOpen} toggleModal={toggleModal} />
        </Container>
      </section>
    </>
  );
}

export default Items;
