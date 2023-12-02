import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeaderMobileNavLinksLink = ({ item }) => {
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <li className="header-mobile-nav-links-link">
      <Link to={item.link}>{item.title[language]}</Link>
    </li>
  );
};

export default HeaderMobileNavLinksLink;
