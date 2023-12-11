import { TfiLocationPin } from "react-icons/tfi";
import { CiPhone, CiMail } from "react-icons/ci";
import { useTranslation } from "react-i18next";

const FooterTopContactLinks = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-inner-top-contact-links">
      <div className="footer-inner-top-contact-links-address">
        <TfiLocationPin />

        <p>{t("footer.footer_contact.address")}</p>
      </div>

      <div className="footer-inner-top-contact-links-phone">
        <CiPhone />

        <a href="tel:666888000">666 888 000</a>
      </div>

      <div className="footer-inner-top-contact-links-email">
        <CiMail />

        <a href="/" target="_blank">
          someEmail@gmail.com
        </a>
      </div>
    </div>
  );
};

export default FooterTopContactLinks;
