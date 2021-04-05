import React from "react";
import { Input, Row, Col, Container, Form, FormGroup } from "reactstrap";
import LoginBgImg from "../../assets/images/IpadLoginBg.jpg";
import logo from "../../assets/images/logo.png";
import { ROUTES } from "../../shared/constants";

const Login = ({ onChange, values, onLogin, validEmail }) => {
  return (
    <section className="login-section">
      <Container fluid>
        <Row xs="1" sm="1" md="2" className="align-items-end">
          <Col md="6" lg="7" className="p-0">
            <div className="login-image">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <img
                className="loginbgimg"
                src={LoginBgImg}
                alt="LoginBackgroundImage"
              />
            </div>
          </Col>
          <Col md="6" lg="5" className="p-0">
            <div className="login-right">
              <div className="login-form">
                <h2 className="login-title">
                  Kitchen Experts <br /> Estimator
                </h2>
                <h4 className="login-subtitle">LOGIN</h4>
                <Form>
                  <FormGroup>
                    <Input
                      value={values["email"]}
                      type="email"
                      onChange={onChange}
                      id="email"
                      placeholder="Email address"
                      className={validEmail ? "" : "error"}
                    />
                    <p className="error mt-2">
                      {!validEmail && values["email"]
                        ? "*Please enter valid email"
                        : " "}
                    </p>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      value={values["password"]}
                      type="password"
                      onChange={onChange}
                      id="password"
                      placeholder="password"
                      className={values["password"] !== "" ? "" : "error"}
                    />
                  </FormGroup>
                </Form>
              </div>
              <div className="login-forgot-box">
                <FormGroup>
                  <a href={ROUTES.login} className="forgot-txt">
                    Forgot password?
                  </a>
                </FormGroup>
                <button className="send-btn" onClick={onLogin}></button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
