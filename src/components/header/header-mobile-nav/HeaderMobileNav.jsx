import HeaderMobileNavLangs from "./header-mobile-nav-langs/HeaderMobileNavLangs";
import HeaderMobileNavLinks from "./header-mobile-nav-links/HeaderMobileNavLinks";

import "./HeaderMobileNav.scss";

const HeaderMobileNav = ({ scroll }) => {
  return (
    <div
      className="header-mobile-nav"
      style={{ top: scroll ? "138px" : "192px" }}
    >
      <HeaderMobileNavLinks />

      <HeaderMobileNavLangs />
    </div>
  );
};

export default HeaderMobileNav;
