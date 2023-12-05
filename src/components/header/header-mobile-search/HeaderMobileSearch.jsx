import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

import "./HeaderMobileSearch.scss";

const HeaderMobileSearch = ({ scroll }) => {
  const [mobileInputVal, setMobileInputVal] = useState("");

  const handleMobileInputOnChange = (evt) => {
    setMobileInputVal(evt.target.value);
  };

  return (
    <div
      className="header-mobile-search"
      style={{ top: scroll > 100 ? "70px" : "100px" }}
    >
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
