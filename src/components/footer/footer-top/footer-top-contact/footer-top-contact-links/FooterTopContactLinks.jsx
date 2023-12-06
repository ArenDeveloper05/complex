import { TfiLocationPin } from "react-icons/tfi";
import { CiPhone, CiMail } from "react-icons/ci";

const FooterTopContactLinks = () => {
  return (
    <div className="footer-inner-top-contact-links">
      <div className="footer-inner-top-contact-links-address">
        <TfiLocationPin />

        <p>66 Broklyn Street, New York United States of America</p>
      </div>

      <div className="footer-inner-top-contact-links-phone">
        <CiPhone />

        <a href="tel:666888000">666 888 000</a>
      </div>

      <div className="footer-inner-top-contact-links-email">
        <CiMail />

        <a href="/" target="_blank">
          needhelp@linoor.com
        </a>
      </div>
    </div>
  );
};

export default FooterTopContactLinks;
