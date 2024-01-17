import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const FooterTopContactLinksItem = ({ item }) => {
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <div className="footer-inner-top-contact-links-item">
      <Link to={item.Link} className="footer-inner-top-contact-links-item-link">
        <div className="footer-inner-top-contact-links-item-link-icon">
          <item.icon />
        </div>

        <p className="footer-inner-top-contact-links-item-link-txt">
          {item.title[language]}
        </p>
      </Link>
    </div>
  );
};

export default FooterTopContactLinksItem;
