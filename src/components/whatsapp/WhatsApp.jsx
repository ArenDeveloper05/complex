import logo from "../../assets/images/logo.png";

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

import "./WhatsApp.scss";

const WhatsApp = () => {
  return (
    <WhatsAppWidget
      headerTitle="Toon Complex"
      placeholder="Ձեր հաղորդագրությունը"
      btnTxt="Ուղարկել"
      phoneNo="37491298089"
      messageBox={true}
      chatPersonName="Toon Complex"
      chatMessage="Բարև ձեզ և շնորհակալություն մեզ հետ կապնվելու համար: Ինչո՞վ կարող ենք ձեզ օգնել?"
      headerIcon={logo}
    />
  );
};

export default WhatsApp;
