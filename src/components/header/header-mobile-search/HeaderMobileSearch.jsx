import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

import "./HeaderMobileSearch.scss";
import { useTranslation } from "react-i18next";

const HeaderMobileSearch = () => {
  const [mobileInputVal, setMobileInputVal] = useState("");

  const { t } = useTranslation();

  const handleMobileInputOnChange = (evt) => {
    setMobileInputVal(evt.target.value);
  };

  return (
    <div className="header-mobile-search">
      <form>
        <button>
          <IoIosSearch />
        </button>

        <input
          type="text"
          placeholder={t("header.header_mobile_search.input_placeholder")}
          value={mobileInputVal}
          onChange={handleMobileInputOnChange}
        />
      </form>
    </div>
  );
};

export default HeaderMobileSearch;
