import { langsConfig } from "../../../../../config";

const HeaderAuthPanelLangSelect = ({ chooseLang }) => {
  return (
    <ul className="header-inner-auth-panel-lang-select">
      {langsConfig.map((item) => {
        return (
          <li
            key={item.id}
            onClick={chooseLang}
            className="header-inner-auth-panel-lang-select-option"
          >
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderAuthPanelLangSelect;
