import { gql } from "@apollo/client";

export const LOGIN_QUERY = gql`
  query userLogin($email: String!, $password: String!) {
    response: userLogin(email: $email, password: $password) {
      id
      name
      email
      role
      status
      message
    }
  }
`;
