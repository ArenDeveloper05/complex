import HeaderMobileNavLinks from "./header-mobile-nav-links/HeaderMobileNavLinks";

import "./HeaderMobileNav.scss";

const HeaderMobileNav = ({ scroll }) => {
  return (
    <div
      className="header-mobile-nav"
      style={{ top: scroll > 100 ? "70px" : "100px" }}
    >
      <HeaderMobileNavLinks />
    </div>
  );
};

export default HeaderMobileNav;
