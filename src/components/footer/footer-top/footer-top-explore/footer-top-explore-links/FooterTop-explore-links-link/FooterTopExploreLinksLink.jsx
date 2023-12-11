import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const FooterTopExploreLinksLink = ({ item }) => {
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <li className="footer-inner-top-explore-links-link">
      <Link to={item.link}>{item.title[language]}</Link>
    </li>
  );
};

export default FooterTopExploreLinksLink;
