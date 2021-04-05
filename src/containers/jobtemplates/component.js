import React from "react";
import { Row, Col, Container } from "reactstrap";
import SearchBar from "../../components/Searchbar";
import UploadBox from "../../components/UploadBox";
import TemplateList from "./templateList";
import TemplateInfo from "./templateInfo";

function JobTemplates({
  isShowInfo,
  toggleShowInfo,
  onSearch,
  templateList,
  onSelectCharacter,
  alphabets,
  selectedCharacter,
  selectedTemplate,
  toggleAddProduct,
  onSelectTemplate,
}) {
  return (
    <section className="users-page">
      <Container>
        <Row xs="1" sm="1" lg="2" xl="2" className="justify-content-between">
          <Col xl="6">
            <div className="right-shadow">
              <h2 className="menu-title">Templates</h2>
              <div className="search-outer">
                <SearchBar
                  onSearch={onSearch}
                  placeholder="Search by job or customer info..."
                />
                <TemplateList
                  list={templateList}
                  onSelectTemplate={onSelectTemplate}
                  selectedCharacter={selectedCharacter}
                  onSelectCharacter={onSelectCharacter}
                  alphabets={alphabets}
                />
              </div>
              <UploadBox text="Import template data" />
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
              <TemplateInfo
                selectedTemplate={selectedTemplate}
                toggleAddProduct={toggleAddProduct}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default JobTemplates;
