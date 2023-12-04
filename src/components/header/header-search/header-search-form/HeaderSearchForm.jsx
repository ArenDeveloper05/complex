import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const HeaderSearchForm = ({ handleChangeShowNav, handleWidth }) => {
  const [inputVal, setInputVal] = useState("");

  const inputRef = useRef(null);

  const handleInputOnChange = (evt) => {
    setInputVal(evt.target.value);
  };

  const { t } = useTranslation();

  const searchFunc = () => {
    console.log("barev");
    setInputVal("");
  };

  const handleSearchBtn = () => {
    try {
      searchFunc();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="header-inner-search-form">
      <form>
        <IoIosSearch
          onClick={() => {
            if (inputVal.trim()) {
              inputRef.current.style.border = "none";
              handleSearchBtn();
            } else {
              inputRef.current.style.border = "solid 2px red";
            }
          }}
        />

        <input
          type="text"
          ref={inputRef}
          placeholder={t("header.search-placeholder")}
          value={inputVal}
          onChange={handleInputOnChange}
        />
      </form>

      <button
        onClick={() => {
          handleChangeShowNav();
          handleWidth();
        }}
      >
        <IoCloseOutline />
      </button>
    </div>
  );
};

export default HeaderSearchForm;
