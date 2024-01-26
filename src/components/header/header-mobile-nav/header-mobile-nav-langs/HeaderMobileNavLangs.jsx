import { langsConfig } from "../../../../config";
import HeaderMobileNavLangsLang from "./header-mobile-nav-langs-lang/HeaderMobileNavLangsLang";

const HeaderMobileNavLangs = () => {
  return (
    <ul className="header-mobile-nav-langs">
      {langsConfig.map((item) => {
        return <HeaderMobileNavLangsLang key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default HeaderMobileNavLangs;
