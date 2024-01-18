import { Link } from "react-router-dom";
// import { ReactComponentElement as whatsappIcon } from "../../assets/images/icons/whatsappIcon.png";

import "./WhatsApp.scss";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const WhatsApp = () => {
  return (
    // <div className="whatsapp">
    //   <Link to={"/"}>
    //     <img src={whatsappIcon} alt="whatsapp" title="Whats app" />
    //   </Link>
    // </div>
    <WhatsAppWidget phoneNumber="37495656867" />
  );
};

export default WhatsApp;
