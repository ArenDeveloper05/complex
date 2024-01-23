import HeaderAuthPanelLang from "../header-auth-panel/header-auth-panel-lang/HeaderAuthPanelLang";
import HeaderAuthPanel from "../header-auth-panel/HeaderAuthPanel";
import HeaderMobileSearch from "../header-mobile-search/HeaderMobileSearch";
import HeaderMobileNavLinks from "./header-mobile-nav-links/HeaderMobileNavLinks";

import "./HeaderMobileNav.scss";

const HeaderMobileNav = ({ scroll }) => {
  return (
    <div
      className="header-mobile-nav"
      style={{ top: scroll ? "138px" : "168px" }}
    >
      {/* <HeaderMobileSearch /> */}
      <HeaderAuthPanel />
      <HeaderMobileNavLinks />
    </div>
  );
};

export default HeaderMobileNav;
