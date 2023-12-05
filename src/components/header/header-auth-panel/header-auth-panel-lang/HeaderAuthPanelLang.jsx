import { useRef, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

import HeaderAuthPanelLangSelect from "./header-auth-panel-lang-select/HeaderAuthPanelLangSelect";
import useOutsideClick from "../../../../utils/hooks/useOutsideClick";
import { langsConfig } from "../../../../config";

const HeaderAuthPanelLang = () => {
  const [lang, setLang] = useState(langsConfig[2].title);
  const [showLangs, setShowLangs] = useState(false);

  const chooseLang = (title) => {
    setLang(title);
    setShowLangs(false);
  };

  const handleShowLangs = () => {
    setShowLangs((prev) => !prev);
  };

  const handleOutsideClick = () => {
    setShowLangs(false);
  };

  const languageRef = useRef(null);
  useOutsideClick(languageRef, handleOutsideClick);

  return (
    <div className="header-inner-auth-panel-lang" ref={languageRef}>
      <div
        className="header-inner-auth-panel-lang-title"
        onClick={handleShowLangs}
      >
        <p className="header-inner-auth-panel-lang-title-txt">{lang}</p>
        <p className="header-inner-auth-panel-lang-title-icon">
          {showLangs ? <FaCaretUp /> : <FaCaretDown />}
        </p>
      </div>

      {showLangs && <HeaderAuthPanelLangSelect chooseLang={chooseLang} />}
    </div>
  );
};

export default HeaderAuthPanelLang;
