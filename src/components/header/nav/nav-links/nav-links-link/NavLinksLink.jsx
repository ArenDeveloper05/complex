import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavTree from "./nav-tree/NavTree";
import { useSelector } from "react-redux";

const NavLinksLink = ({ item }) => {
  const {
    i18n: { language },
  } = useTranslation();

  const data = useSelector((state) => state.navigation.assortment);

  return (
    <>
      <li className="nav-bar-links-link">
        <Link
          to={item.link}
          // style={{
          //   fontSize: language === "am" ? "16px" : "21px",
          // }}
        >
          {item.title[language]}
        </Link>
        {item.hasChildren && (
          <div className="tree-background">
            <NavTree data={data} />
          </div>
        )}
      </li>
    </>
  );
};

export default NavLinksLink;
