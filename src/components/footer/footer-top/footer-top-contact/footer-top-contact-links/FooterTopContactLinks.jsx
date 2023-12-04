import { IoLocationOutline } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";

const FooterTopContactLinks = () => {
  return (
    <div className="footer-inner-top-contact-links">
      <div className="footer-inner-top-contact-links-address">
        <IoLocationOutline />

        <p>66 Broklyn Street, New York United States of America</p>
      </div>

      <div className="footer-inner-top-contact-links-phone">
        <BiSolidPhoneCall />

        <a href="tel:666888000">666 888 000</a>
      </div>

      <div className="footer-inner-top-contact-links-email">
        <TfiEmail />

        <a href="/" target="_blank">
          needhelp@linoor.com
        </a>
      </div>
    </div>
  );
};

export default FooterTopContactLinks;
