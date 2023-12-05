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

  const [width, setWidth] = useState(true);

  const [second, setSecond] = useState(0);

  const handleWidth = () => {
    setWidth((prev) => !prev);
  };

  const handleChangeShowNav = () => {
    if (width) {
      setSecond(400);
    } else {
      setSecond(0);
    }

    setTimeout(() => {
      setShowNav((prev) => !prev);
    }, second);
  };

  const handleShowMobileNav = () => {
    setShowMobileNav((prev) => !prev);
  };

  const handleShowMobileSearch = () => {
    setShowMobileSearch((prev) => !prev);
  };

  return (
    <header>
      <div className="header-inner">
        <HeaderLogo />

        <Nav width={width} showNav={showNav} />

        <HeaderSearch
          showNav={showNav}
          handleChangeShowNav={handleChangeShowNav}
          width={width}
          handleWidth={handleWidth}
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
    </header>
  );
};

export default Header;
