import HeaderSearchForm from "./header-search-form/HeaderSearchForm";
import HeaderSearchTitle from "./header-search-title/HeaderSearchTitle";

const HeaderSearch = ({ showNav, handleChangeShowNav }) => {
  return (
    <div
      className="header-inner-search"
      style={{ width: showNav ? "8%" : "60%" }}
    >
      {showNav && (
        <HeaderSearchTitle handleChangeShowNav={handleChangeShowNav} />
      )}

      {!showNav && (
        <HeaderSearchForm
          showNav={showNav}
          handleChangeShowNav={handleChangeShowNav}
        />
      )}
    </div>
  );
};

export default HeaderSearch;
