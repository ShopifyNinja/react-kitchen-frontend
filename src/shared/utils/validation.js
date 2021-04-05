/**
 * @method validateEmail : Method to validate email, if email contains characters, not according to given email format, false is returned.
 * @param {string} value : email value to be tested.
 */
export const validateEmail = (value) => {
  // eslint-disable-next-line
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(value);
};

/**
 * @method validatePhone : Method to validate phone
 * @param {string} value : phone value to be tested.
 */
export const validatePhone = (value) => {
  if (!value || value.length < 10 || value.length > 10) {
    return false;
  }
  const regex = /^\d{10}$/;
  if (!regex.test(value)) {
    return false;
  }

  return true;
};
