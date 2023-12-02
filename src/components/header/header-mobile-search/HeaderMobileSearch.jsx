import { useState } from "react";
import "./HeaderMobileSearch.scss";
import { IoIosSearch } from "react-icons/io";

const HeaderMobileSearch = () => {
  const [mobileInputVal, setMobileInputVal] = useState("");

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
          placeholder="Поиск по сайту"
          value={mobileInputVal}
          onChange={handleMobileInputOnChange}
        />
      </form>
    </div>
  );
};

export default HeaderMobileSearch;
