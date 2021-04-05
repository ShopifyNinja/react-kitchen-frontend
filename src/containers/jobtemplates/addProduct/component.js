import React from "react";
import { Row, Col, Container } from "reactstrap";
import { back } from "../../../assets/images/index";
import NewEstimate from "./newEstimate";

function AddProduct({ toggleAddProduct, title }) {
  return (
    <section className="users-page estimate-page">
      <Container>
        <Row xs="1" sm="1" lg="2" xl="2" className="justify-content-between ">
          <Col xl="6">
            <div className="right-shadow">
              <div className="Cabinet-withback">
                <button className="back-btn" onClick={toggleAddProduct}>
                  <img src={back} alt="back" />
                </button>
                <h1 className="menu-title">{title} </h1>
              </div>

              <div className="estimate-cost">
                <h5 className="list-head"> TOTALS </h5>
                <div className="estimate-cost-list">
                  <h6> Subtotal cost </h6> <label> $0.0</label>
                </div>
                <div className="estimate-cost-list">
                  <h6> Discount </h6> <label> $0.0</label>
                </div>
                <div className="estimate-cost-list discount-total">
                  <h6>Total with Discounts</h6>
                  <label> $0.0</label>
                </div>

                <button className="view-doc-btn"> View Document</button>
              </div>
            </div>
          </Col>
          <Col xl="6">
            <NewEstimate />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AddProduct;
