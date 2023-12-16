import NavLinks from "./nav-links/NavLinks";

import "./Nav.scss";

const Nav = ({ width, showNav }) => {
  return <nav className="nav-bar">{showNav && <NavLinks />}</nav>;
};

export default Nav;
