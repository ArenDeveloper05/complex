import NavLinks from "./nav-links/NavLinks";

import "./Nav.scss";

const Nav = ({ width, showNav }) => {
  return (
    <nav className="nav-bar" style={{ width: width ? "60%" : "0%" }}>
      {showNav && <NavLinks />}
    </nav>
  );
};

export default Nav;
