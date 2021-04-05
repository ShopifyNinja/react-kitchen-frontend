import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../shared/constants";
import Login from "./component";
import { validateLoginForm } from "./utils";
import { LOGIN_QUERY } from "../../graphql";
import Alert from "../../shared/utils/alerts";

const userDetail = {
  email: "",
  password: "",
};

function LoginContainer(props) {
  const [fields, setFields] = useState(userDetail);
  const [validEmail, setValidEmail] = useState(false);
  const [isVerifying, setVerifying] = useState(false);
  const history = useHistory();

  const [loginUser, { loading, data, error }] = useLazyQuery(LOGIN_QUERY, {
    variables: { email: fields.email, password: fields.password },
    fetchPolicy: "cache-and-network",
  });

  const handleChange = (event) => {
    event.preventDefault();
    const key = event.target.id;

    const value = event.target.value;
    if (
      key === "email" &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ) {
      setValidEmail(true);
    }

    if (
      key === "email" &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ) {
      setValidEmail(false);
    }

    setFields((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const validationResponse = validateLoginForm(fields);

    if (!!validationResponse) {
      Alert(400, validationResponse);
      return;
    }

    setVerifying(true);
    loginUser();
  };

  useEffect(() => {
    if (isVerifying && error && !loading) {
      Alert(400, "Something went wrong");
      setFields(userDetail);
      setVerifying(false);
    }
  }, [error]);

  useEffect(() => {
    if (isVerifying && data && !loading) {
      Alert(data.response.status, data.response.message);
      if (data.response.status === 200) {
        debugger;
        localStorage.setItem("role", data.response.role);
        history.push(ROUTES.dashboard);
      }
      setFields(userDetail);
      setVerifying(false);
    }
  }, [data, isVerifying]);

  return (
    <Login
      values={fields}
      onChange={handleChange}
      onLogin={handleLogin}
      validEmail={validEmail}
    />
  );
}

export default LoginContainer;
