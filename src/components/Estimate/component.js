import React from "react";
import { Row, Col, Container } from "reactstrap";
import GenerateBill from "../GenerateBill";
import EstimateInfo from "./EstimateInfo";
import Signature from "./Signature";
import Photos from "../Photos";
import Discounts from "../Discounts";
import DrawSchedule from "../DrawSchedule";
import { SECTION } from "./util";
import { back } from "../../assets/images/index";

function Estimate({
  toggleEstimate,
  selectedEstimate,
  selectedJob,
  selectSignature,
  selectedSignature,
  selectProduct,
  togglePhotos,
  selectedSection,
  setSelectedSection,
}) {
  const { name } = selectedJob;
  const { bill, signatures, title, data } = selectedEstimate;
  const { photos, drawSchedule } = data;

  const renderView = () => {
    switch (selectedSection) {
      case SECTION.photos:
        return (
          <Photos setSelectedSection={setSelectedSection} photos={photos} />
        );
      case SECTION.signature:
        return (
          <Signature
            setSelectedSection={setSelectedSection}
            selectedSignature={selectedSignature}
          />
        );
      case SECTION.discounts:
        return <Discounts setSelectedSection={setSelectedSection} />;
      case SECTION.drawSchedule:
        return (
          <DrawSchedule
            setSelectedSection={setSelectedSection}
            data={drawSchedule}
          />
        );
      default:
        return (
          <EstimateInfo
            title={title}
            data={data}
            selectProduct={selectProduct}
            togglePhotos={togglePhotos}
            setSelectedSection={setSelectedSection}
          />
        );
    }
  };

  return (
    <section className="users-page estimate-page ">
      <Container>
        <Row xs="1" sm="1" lg="2" xl="2" className="justify-content-between">
          <Col xl="6">
            <div className="right-shadow">
              <div className="user-list">
                <div className="Cabinet-withback">
                  <button className="back-btn" onClick={toggleEstimate}>
                    <img src={back} alt="back" />
                  </button>
                  <h1 className="menu-title">{name} </h1>
                </div>
                <div className="estimate-cost">
                  <GenerateBill billData={bill} />
                  <ul className="user-detail-list list-unstyled signature-list">
                    <h4 className="sub-title">SIGNATURES</h4>
                    {Object.keys(signatures).map((item, index) => {
                      const field = signatures[item];
                      const label = field && field.label && field.label;
                      return (
                        <li
                          className="user-detail-list-item"
                          key={index}
                          onClick={() => {
                            if (field.signature) {
                              selectSignature(field);
                            }
                          }}
                        >
                          <h4>
                            {label.charAt(0).toUpperCase() + label.slice(1)}
                          </h4>
                          <p
                            className={
                              field && field.signature
                                ? "signature-list-clr"
                                : ""
                            }
                          >
                            {(field && field.signature) || "Not Signed"}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                  <button className="view-doc-btn"> View Document</button>
                </div>
              </div>
            </div>
          </Col>
          <Col xl="5">{renderView()}</Col>
        </Row>
      </Container>
    </section>
  );
}

export default Estimate;
