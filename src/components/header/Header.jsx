import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

import Container from "../common/container/Container";
import HeaderLogo from "./header-logo/HeaderLogo";
import HeaderSearch from "./header-search/HeaderSearch";
import Nav from "./nav/Nav";
import HeaderAuthPanel from "./header-auth-panel/HeaderAuthPanel";
import HeaderMobileNav from "./header-mobile-nav/HeaderMobileNav";
import HeaderMobileSearch from "./header-mobile-search/HeaderMobileSearch";

import "./Header.scss";
import HeaderMobileLogo from "./header-mobile-logo/HeaderMobileLogo";

const Header = () => {
  const [showNav, setShowNav] = useState(true);

  const [showMobileNav, setShowMobileNav] = useState(false);

  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const handleChangeShowNav = () => {
    setShowNav((prev) => !prev);
  };

  const handleShowMobileNav = () => {
    setShowMobileNav((prev) => !prev);
  };

  const handleShowMobileSearch = () => {
    setShowMobileSearch((prev) => !prev);
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
              className="header-inner-mobile-icon"
              onClick={handleShowMobileNav}
            />
          )}

          {showMobileNav && (
            <>
              <AiOutlineClose
                className="header-inner-mobile-icon"
                onClick={handleShowMobileNav}
              />

              <HeaderMobileNav />
            </>
          )}

          {!showMobileSearch && (
            <IoIosSearch
              className="header-inner-mobile-icon"
              onClick={handleShowMobileSearch}
            />
          )}

          {showMobileSearch && (
            <>
              <AiOutlineClose
                className="header-inner-mobile-icon"
                onClick={handleShowMobileSearch}
              />

              <HeaderMobileSearch />
            </>
          )}

          <HeaderMobileLogo />

          <HeaderAuthPanel />
        </div>
      </Container>
    </header>
  );
};

export default Header;
