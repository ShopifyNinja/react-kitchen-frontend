import React from "react";
import { Row, Col } from "reactstrap";
import { adminTabs } from "./adminTabs";
import MenuItem from "../../../../components/MenuItem";

function AdminBlock({ onClick }) {
  return (
    <>
      <Row xs="1" sm="1" lg="2">
        {adminTabs.map((item) => {
          return (
            <Col
              xl="6"
              className="p-0"
              onClick={() => {
                onClick(item);
              }}
              key={item.id}
            >
              <MenuItem
                title={item.title}
                subTitle={item.subTitle}
                icon={item.icon}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default AdminBlock;
