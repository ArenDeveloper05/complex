import { useRef, useState } from "react";
import { langsConfig } from "../../../../config";

import arrowIcon from "../../../../assets/images/icons/arrow-up.png";

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
        <div className="header-inner-auth-panel-lang-title-icon">
          <img
            src={arrowIcon}
            alt="arrow"
            style={{
<<<<<<< HEAD
              transform: showLangs ? "rotate(0deg)" : "rotate(180deg)",
=======
              transform: showLangs ? "rotate(0)" : "rotate(180deg)",
>>>>>>> 4ded82a9c73bd98f6964ff793ea46ea979fe3ffa
            }}
          />
        </div>
      </div>

      {showLangs && <HeaderAuthPanelLangSelect chooseLang={chooseLang} />}
    </div>
  );
};

export default HeaderAuthPanelLang;
