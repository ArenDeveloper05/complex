import HeaderSearchForm from "./header-search-form/HeaderSearchForm";
import HeaderSearchTitle from "./header-search-title/HeaderSearchTitle";

const HeaderSearch = ({ showNav, handleChangeShowNav, handleWidth, width }) => {
  return (
    <div
      className="header-inner-search"
      style={{ width: width ? "8%" : "60%" }}
    >
      {showNav ? (
        <HeaderSearchTitle
          handleChangeShowNav={handleChangeShowNav}
          handleWidth={handleWidth}
        />
      ) : (
        <HeaderSearchForm
          handleChangeShowNav={handleChangeShowNav}
          handleWidth={handleWidth}
        />
      )}
    </div>
  );
};

export default HeaderSearch;
