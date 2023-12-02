import { IoIosSearch } from "react-icons/io";

const HeaderSearchTitle = ({ handleChangeShowNav }) => {
  return (
    <div className="header-inner-search-title" onClick={handleChangeShowNav}>
      <IoIosSearch className="header-inner-search-title-icon" />

      <p className="header-inner-search-title-txt">НАЙТИ</p>
    </div>
  );
};

export default HeaderSearchTitle;
