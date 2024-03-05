import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import MobileAssortmentTree from "../../../../mobile/mobile-assortment-tree/MobileAssortmentTree";

const HeaderMobileNavLinksLink = ({ item }) => {
  const {
    i18n: { language },
  } = useTranslation();
  const [open, setOpen] = useState(false);
  const data = useSelector((state) => state.navigation.assortment);

  return (
    <li
      className="header-mobile-nav-links-link"
      onClick={() => {
        if (item.hasChildren) {
          setOpen((prev) => !prev);
        }
      }}
    >
      <Link to={item.link}>{item.title[language]}</Link>
      {open && item.hasChildren && <MobileAssortmentTree data={data} />}
    </li>
  );
};

export default HeaderMobileNavLinksLink;
