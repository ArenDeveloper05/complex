import { useState } from "react";
import Container from "../common/container/Container";
import "./Header.scss";
import HeaderLogo from "./header-logo/HeaderLogo";
import HeaderSearch from "./header-search/HeaderSearch";
import Nav from "./nav/Nav";
import HeaderAuthPanel from "./header-auth-panel/HeaderAuthPanel";
import { LuMenu } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import HeaderMobileNav from "./header-mobile-nav/HeaderMobileNav";
import { AiOutlineClose } from "react-icons/ai";
import HeaderMobileSearch from "./header-mobile-search/HeaderMobileSearch";

const Header = () => {
  const [showNav, setShowNav] = useState(true);

  const [showMobileNav, setShowMobileNav] = useState(false);

  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const handleChangeShowNav = () => {
    setShowNav((prev) => (prev = !prev));
  };

  const handleShowMobileNav = () => {
    setShowMobileNav((prev) => (prev = !prev));
  };

  const handleShowMobileSearch = () => {
    setShowMobileSearch((prev) => (prev = !prev));
  };

  return (
    <header>
      <Container>
        <div className="header-inner">
          <HeaderLogo />

          {showNav && <Nav />}

          <HeaderSearch
            showNav={showNav}
            handleChangeShowNav={handleChangeShowNav}
          />

          {!showMobileNav && (
            <LuMenu
              className="header-inner-mobile-menu-icon"
              onClick={handleShowMobileNav}
            />
          )}

          {showMobileNav && (
            <AiOutlineClose
              className="header-inner-mobile-close-menu-icon"
              onClick={handleShowMobileNav}
            />
          )}

          {showMobileNav && <HeaderMobileNav />}

          {!showMobileSearch && (
            <IoIosSearch
              className="header-inner-mobile-search-icon"
              onClick={handleShowMobileSearch}
            />
          )}

          {showMobileSearch && (
            <AiOutlineClose
              className="header-inner-mobile-close-search-icon"
              onClick={handleShowMobileSearch}
            />
          )}

          {showMobileSearch && <HeaderMobileSearch />}

          <HeaderAuthPanel />
        </div>
      </Container>
    </header>
  );
};

export default Header;
