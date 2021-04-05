import { toast } from "react-toastify";

import "../../../node_modules/react-toastify/dist/ReactToastify.css";

toast.configure();

const Alert = (status, message) => {
  const options = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 1000,
    hideProgressBar: true,
  };

  if (status === 200) {
    toast.success(message, options);
  } else {
    toast.error(message, options);
  }
};
export default Alert;
