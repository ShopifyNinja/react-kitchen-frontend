import React from "react";
import { Row, Col, Container } from "reactstrap";
import FrequentItems from "./components/frequentItems";
import RecentJobs from "./components/recentJobs";
import Sales from "./components/sales";
import AdminTabs from "./components/admin";

function Dashboard({ isShowMenu }) {
  const role = localStorage.getItem("role");
  return (
    <div>
      <section className={!isShowMenu ? "inner-sec" : ""}>
        <Container>
          <div>
            {!isShowMenu ? (
              <>
                <h1 className="menu-title">Hello, Ryan</h1>
                <h4 className="lets-get-estimating">Let’s get estimating!</h4>
                <Row xs="1" sm="1" md="1" lg="2">
                  <Col xl="6">
                    <h4 className="sub-title">Frequently Used</h4>
                    <div className="menu-bx">
                      <FrequentItems />
                    </div>
                  </Col>
                  <Col xl="6">
                    <h4 className="sub-title">RECENT JOBS</h4>
                    <div className="content-bx">
                      <RecentJobs />
                    </div>
                  </Col>
                </Row>
              </>
            ) : (
              <h1 className="menu-title mb-5">Menu</h1>
            )}
          </div>
        </Container>
      </section>
      <section className="sales-sec">
        <Container>
          <Row xs="1" sm="1" md="1" lg="2">
            {role === "sales" && (
              <Col xl="4" lg="4" className="sales-left pl-0">
                <h3 className="list-head">SALES</h3>
                <Sales isShowMenu={isShowMenu} />
              </Col>
            )}
            {role === "admin" && (
              <Col lg="8" xl="8" className="sales-right">
                <h3 className="list-head">ADMIN</h3>
                <AdminTabs />
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Dashboard;
