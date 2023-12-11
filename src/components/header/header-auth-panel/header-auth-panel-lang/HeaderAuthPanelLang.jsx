import { useRef, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { langsConfig } from "../../../../config";

import HeaderAuthPanelLangSelect from "./header-auth-panel-lang-select/HeaderAuthPanelLangSelect";
import useOutsideClick from "../../../../utils/hooks/useOutsideClick";

const HeaderAuthPanelLang = () => {
  const [lang, setLang] = useState(langsConfig[2].title);
  const [showLangs, setShowLangs] = useState(false);

  const chooseLang = (title) => {
    if (lang !== title) {
      setLang(title);
      setShowLangs(false);
    }
  };

  const handleShowLangs = () => {
    setShowLangs((prev) => !prev);
  };

  const languageRef = useRef(null);
  useOutsideClick(languageRef, () => {
    setShowLangs(false);
  });

  return (
    <div
      className="header-inner-auth-panel-lang"
      ref={languageRef}
      onClick={handleShowLangs}
    >
      <div className="header-inner-auth-panel-lang-title">
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
