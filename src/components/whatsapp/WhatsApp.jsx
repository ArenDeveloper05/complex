import { Link } from "react-router-dom";
import whatsappIcon from "../../assets/images/icons/whatsappIcon.png";

import "./WhatsApp.scss";

const WhatsApp = () => {
  return (
    <div className="whatsapp">
      <Link to={"/"}>
        <img src={whatsappIcon} alt="whatsapp" title="Whats app" />
      </Link>
    </div>
  );
};

export default WhatsApp;
