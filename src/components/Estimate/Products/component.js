import React from "react";
import { Row, Col, Container } from "reactstrap";
import {
  back,
  sideIcon1,
  sideIcon2,
  sideIcon3,
  whitePlus,
} from "../../../assets/images/index";
import SearchBar from "../../Searchbar";
import ProductList from "./ProductList";
import ItemList from "./ItemList";
import ItemInfo from "./ItemInfo";

function Products({
  productName,
  toggleProduct,
  selectedItem,
  productList,
  onSelect,
  toggleEstimate,
  breadCrumbs,
  onSearch,
  isShowItemInfo,
  toggleShowInfo,
  onSelectInnerItem,
  selectedInnerItem,
  setSelectedItem,
}) {
  const renderLeftSection = () => {
    if (!isShowItemInfo) {
      return (
        <>
          <div className="Cabinet-withback">
            <button className="back-btn" onClick={toggleProduct}>
              <img src={back} alt="back" />
            </button>
            <h1 className="menu-title">{productName} </h1>
          </div>
          <div className="search-outer">
            <SearchBar placeholder="Search" onSearch={onSearch} />
            <ProductList list={productList} onSelect={onSelect} />
          </div>
        </>
      );
    } else {
      return (
        <>
          {/* <div className="Cabinet-withback">
            <button className="back-btn">
              <img src={back} alt="back" onClick={toggleShowInfo} />
            </button>
          </div> */}
          <ItemList
            selectedItem={selectedItem}
            onSelectInnerItem={onSelectInnerItem}
            toggleShowInfo={toggleShowInfo}
            isShowItemInfo={isShowItemInfo}
            setSelectedItem={setSelectedItem}
          />
          <div className="upload-box upload-estimate">
            <button className="upload-btn">
              <img src={whitePlus} alt="whitePlus" />
            </button>
          </div>
        </>
      );
    }
  };

  const renderRightSection = () => {
    if (!isShowItemInfo) {
      return (
        <>
          <ItemList
            selectedItem={selectedItem}
            onSelectInnerItem={onSelectInnerItem}
            setSelectedItem={setSelectedItem}
          />
          <div className="upload-box upload-estimate">
            <button className="upload-btn">
              <img src={whitePlus} alt="whitePlus" />
            </button>
          </div>
        </>
      );
    } else {
      return <ItemInfo selectedInnerItem={selectedInnerItem} />;
    }
  };

  return (
    <>
      <Container>
        <ul className="breadcrums list-unstyled">
          {breadCrumbs.map((el, index) => {
            return (
              <li key={index} className="bread-active">
                {index !== breadCrumbs.length - 1 ? el + " >" : el}
              </li>
            );
          })}
        </ul>
      </Container>

      <section className="users-page estimate-page">
        <Container>
          <Row xs="1" sm="1" lg="3" xl="3" className="justify-content-between">
            <Col xl="2" lg="2">
              <div className="sidebar">
                <img src={back} alt="back" onClick={toggleEstimate} />
                <div className="side-three-icons">
                  <button>
                    {" "}
                    <img src={sideIcon1} alt="sideIcon1" />
                  </button>
                  <button>
                    {" "}
                    <img src={sideIcon2} alt="sideIcon2" />
                  </button>
                  <button>
                    {" "}
                    <img src={sideIcon3} alt="sideIcon3" />
                  </button>
                </div>
              </div>
            </Col>
            <Col xl="5" lg="5">
              {renderLeftSection()}
            </Col>
            <Col xl="5" lg="4">
              {renderRightSection()}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Products;
