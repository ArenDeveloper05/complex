import { changeLanguage } from "i18next";

const HeaderMobileNavLangsLang = ({ item }) => {
  return (
    <li
      key={item.id}
      onClick={() => {
        changeLanguage(item.type);
      }}
      className="header-mobile-nav-langs-lang"
    >
      <div className="header-mobile-nav-langs-lang-icon">
        <img src={item.icon} alt="img" />
      </div>

      <p className="header-mobile-nav-langs-lang-title">{item.title}</p>
    </li>
  );
};

export default HeaderMobileNavLangsLang;
