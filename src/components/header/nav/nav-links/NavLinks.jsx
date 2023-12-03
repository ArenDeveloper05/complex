import { navConfig } from "../../../../config";

import NavLinksLink from "./nav-links-link/NavLinksLink";

const NavLinks = () => {
  return (
    <ul className="nav-bar-links">
      {navConfig.map((item) => {
        return <NavLinksLink key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default NavLinks;
