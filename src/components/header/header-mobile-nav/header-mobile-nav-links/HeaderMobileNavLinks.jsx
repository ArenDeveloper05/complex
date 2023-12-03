import { navConfig } from "../../../../config";

import HeaderMobileNavLinksLink from "./header-mobile-nav-links-link/HeaderMobileNavLinksLink";

const HeaderMobileNavLinks = () => {
  return (
    <ul className="header-mobile-nav-links">
      {navConfig.map((item) => {
        return <HeaderMobileNavLinksLink key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default HeaderMobileNavLinks;
