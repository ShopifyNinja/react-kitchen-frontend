import { validateEmail } from "../../shared/utils/validation";

export const validateLoginForm = (values) => {
  const { email, password } = values;

  if (!email || !password) {
    return "*All fields are required!!";
  }

  // if (!validateEmail(email)) {
  //   return "*Please enter valid email address!!";
  // }

  return "";
};
