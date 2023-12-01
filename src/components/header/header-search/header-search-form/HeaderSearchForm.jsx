import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const HeaderSearchForm = ({ showNav, setShowNav }) => {
  const [inputVal, setInputVal] = useState("");

  const handleInputOnChange = (evt) => {
    setInputVal(evt.target.value);
  };

  const closeSearchForm = () => {
    console.log("closeButtonClicked");
    setShowNav(true);
  };

  return (
    <div className="header-inner-search-form">
      <form>
        <IoIosSearch />

        <input
          type="text"
          placeholder="Поиск по сайту"
          value={inputVal}
          onChange={handleInputOnChange}
        />
      </form>

      <button onClick={closeSearchForm}>
        <IoCloseOutline />
      </button>
    </div>
  );
};

export default HeaderSearchForm;
