import { ToastContainer } from "react-toastify";
import ContactRegister from "./contact-register/ContactRegister";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <ContactRegister />
      <ToastContainer />
    </div>
  );
};

export default Contact;
