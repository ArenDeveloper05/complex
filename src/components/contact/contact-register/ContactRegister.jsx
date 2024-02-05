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

  const mapsData = useSelector((state) => state.contact.mapsData);

  return (
    <div className="contact-register">
      <ContactRegisterMap mapsData={mapsData} same={same} />

      <ContactRegisterAddress
        same={same}
        setSame={setSame}
        mapsData={mapsData}
      />
    </div>
  );
};

export default ContactRegister;
