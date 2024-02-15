import { useSelector } from "react-redux";
import { useState } from "react";

import "./ContactRegister.scss";
import ContactRegisterMap from "./contact-register-map/ContactRegisterMap";
import ContactRegisterAddress from "./contact-register-address/ContactRegisterAddress";

const ContactRegister = () => {
  const [same, setSame] = useState({
    id: 0,
    zoom: 12,
    center: [40.189829, 44.559399],
  });

  return (
    <div className="contact-register">
      <ContactRegisterMap same={same} setSame={setSame} />

      <ContactRegisterAddress same={same} setSame={setSame} />
    </div>
  );
};

export default ContactRegister;
