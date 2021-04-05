import React from "react";
import { Row, Col, Container } from "reactstrap";
import {
  edit,
  plus,
  deleteIcon,
  logokitchen,
} from "../../assets/images/index.js";
import { CompanyProfileData } from "./utils";
import Input from "../../components/Input";

function CompanyProfile({
  profilePic,
  handleFileUpload,
  companyName,
  editCompanyName,
  isEdit,
  setIsEdit,
  handleEdit,
}) {
  return (
    <section className="users-page companyProfile-page">
      <Container>
        <div className="user-list">
          <div className="user-name top-edit-icon">
            {!isEdit ? (
              <h2 className="menu-title">{companyName}</h2>
            ) : (
              <Input onChange={editCompanyName} handleEdit={handleEdit} />
            )}

            <div className="edit-icons ">
              <button
                onClick={() => {
                  setIsEdit(true);
                }}
              >
                <img src={edit} alt="edit" />
              </button>
            </div>
          </div>
          <Row xs="1" sm="1" lg="3" xl="3" className="">
            <Col xl="3" lg="3">
              <div className="logokitchen">
                <div className="logokitchen-img">
                  <div className="upload-btn-wrapper ">
                    <button className="btn">
                      <img
                        src={profilePic || logokitchen}
                        alt="kitchenProfile"
                      />
                    </button>
                    <input
                      type="file"
                      name="myfile"
                      accept=".jpg, .jpeg, .png"
                      onChange={(event) => handleFileUpload(event)}
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col xl="4" lg="4" className="pr-lg-5">
              <ul className="user-detail-list list-unstyled ">
                {Object.keys(CompanyProfileData.section1).map((item, index) => {
                  const field = CompanyProfileData.section1[item];
                  return (
                    <li className="user-detail-list-item" key={`key_${item}`}>
                      <div className="estimate-head">
                        <h5 className="sub-title">{field.title}</h5>
                        <div className="estimate-btn">
                          <button>
                            <img src={deleteIcon} alt="delete" />
                          </button>
                          {!(item === "address") && (
                            <button>
                              <img src={plus} alt="plus" />
                            </button>
                          )}
                        </div>
                      </div>

                      <h4>{field.value}</h4>
                      <p>{field.label}</p>
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col lg="4" xl="4" className="pl-lg-5">
              <ul className="user-detail-list list-unstyled ">
                {Object.keys(CompanyProfileData.section2).map((item, index) => {
                  const field = CompanyProfileData.section2[item];

                  return (
                    <li className="user-detail-list-item" key={`key_${item}`}>
                      <div className="estimate-head">
                        <h5 className="sub-title">{field.title}</h5>
                        <div className="estimate-btn">
                          <button>
                            <img src={deleteIcon} alt="delete" />
                          </button>
                        </div>
                      </div>

                      <h4>{field.value}</h4>
                      <p>{field.label}</p>
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default CompanyProfile;
