import HeaderSearchForm from "./header-search-form/HeaderSearchForm";
import HeaderSearchTitle from "./header-search-title/HeaderSearchTitle";

const HeaderSearch = ({ showNav, setShowNav }) => {
  const handleShowNav = () => {
    setShowNav(false);
  };

  return (
    <div className="header-inner-search" onClick={handleShowNav}>
      {showNav && <HeaderSearchTitle />}

      {!showNav && (
        <HeaderSearchForm showNav={showNav} setShowNav={setShowNav} />
      )}
    </div>
  );
};

export default HeaderSearch;
