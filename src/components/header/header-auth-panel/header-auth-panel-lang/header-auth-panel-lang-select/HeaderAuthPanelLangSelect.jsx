import { changeLanguage } from "i18next";
import { langsConfig } from "../../../../../config";
import { FaFlag } from "react-icons/fa6";

const HeaderAuthPanelLangSelect = ({ chooseLang }) => {
  return (
    <ul className="header-inner-auth-panel-lang-select">
      {langsConfig.map((item) => {
        return (
          <li
            key={item.id}
            onClick={(evt) => {
              chooseLang(evt);
              changeLanguage(item.type);
            }}
            className="header-inner-auth-panel-lang-select-option"
          >
            <FaFlag />

            <p>{item.title}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderAuthPanelLangSelect;
