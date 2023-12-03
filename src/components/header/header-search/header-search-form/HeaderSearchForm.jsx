import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const HeaderSearchForm = ({ showNav, handleChangeShowNav }) => {
  const [inputVal, setInputVal] = useState("");

  const handleInputOnChange = (evt) => {
    setInputVal(evt.target.value);
  };

  const { t } = useTranslation();

  return (
    <div className="header-inner-search-form">
      <form>
        <IoIosSearch />

        <input
          type="text"
          placeholder={t("header.search-placeholder")}
          value={inputVal}
          onChange={handleInputOnChange}
        />
      </form>

      <button onClick={handleChangeShowNav}>
        <IoCloseOutline />
      </button>
    </div>
  );
};

export default HeaderSearchForm;
