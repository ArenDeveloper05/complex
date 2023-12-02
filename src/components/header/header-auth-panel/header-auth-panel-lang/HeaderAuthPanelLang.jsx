import { useState } from "react";
import HeaderAuthPanelLangSelect from "./header-auth-panel-lang-select/HeaderAuthPanelLangSelect";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const HeaderAuthPanelLang = () => {
  const [lang, setLang] = useState("Eng");
  const [showLangs, setShowLangs] = useState(false);

  const chooseLang = (evt) => {
    setLang(evt.target.textContent);
  };

  const handleShowLangs = () => {
    setShowLangs((prev) => !prev);
  };

  return (
    <div className="header-inner-auth-panel-lang">
      <div
        className="header-inner-auth-panel-lang-title"
        onClick={handleShowLangs}
      >
        <p className="header-inner-auth-panel-lang-title-txt">{lang}</p>
        <p className="header-inner-auth-panel-lang-title-icon">
          {showLangs ? <FaCaretUp /> : <FaCaretDown />}
        </p>
        {showLangs && <HeaderAuthPanelLangSelect chooseLang={chooseLang} />}
      </div>
    </div>
  );
};

export default HeaderAuthPanelLang;
