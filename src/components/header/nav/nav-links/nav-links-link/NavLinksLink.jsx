import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavLinksLink = ({ item }) => {
  const {
    i18n: { language },
  } = useTranslation();
  return (
    <li className="nav-bar-links-link">
      <Link to={item.link}>{item.title[language]}</Link>
    </li>
  );
};

export default NavLinksLink;
