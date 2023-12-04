import { Link } from "react-router-dom";

const FooterTopExploreLinksLink = ({ item }) => {
  return (
    <li className="footer-inner-top-explore-links-link">
      <Link to={item.link}>{item.title}</Link>
    </li>
  );
};

export default FooterTopExploreLinksLink;
