import { useTranslation } from "react-i18next";
import FooterTopContactLinks from "./footer-top-contact-links/FooterTopContactLinks";

const FooterTopContact = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-inner-top-contact">
      <p className="footer-inner-top-contact-title">
        {t("footer.footer_contact.title")}
      </p>

      <FooterTopContactLinks />
    </div>
  );
};

export default FooterTopContact;
