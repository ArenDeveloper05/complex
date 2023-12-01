import { Link } from "react-router-dom";

const NavLinksLink = ({ item }) => {
  return (
    <li className="nav-bar-links-link">
      <Link to={item.link}>{item.title}</Link>
    </li>
  );
};

export default NavLinksLink;
