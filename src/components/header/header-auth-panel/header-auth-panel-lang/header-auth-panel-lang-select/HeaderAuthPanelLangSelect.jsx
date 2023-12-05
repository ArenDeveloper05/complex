import { changeLanguage } from "i18next";
import { langsConfig } from "../../../../../config";
// import { FaFlag } from "react-icons/fa6";

const HeaderAuthPanelLangSelect = ({ chooseLang }) => {
  return (
    <ul className="header-inner-auth-panel-lang-select">
      {langsConfig.map((item) => {
        return (
          <li
            key={item.id}
            onClick={() => {
              chooseLang(item.title);
              changeLanguage(item.type);
            }}
            className="header-inner-auth-panel-lang-select-option"
          >
            <div className="header-inner-auth-panel-lang-select-option-icon">
              <img src={item.icon} alt="img" />
            </div>

            <p className="header-inner-auth-panel-lang-select-option-title">
              {item.title}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderAuthPanelLangSelect;
