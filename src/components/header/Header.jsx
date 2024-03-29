import { useCallback, useEffect, useState } from "react";
import { LuMenu, LuSearch } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";

import Container from "../common/container/Container";
import HeaderLogo from "./header-logo/HeaderLogo";
import HeaderSearch from "./header-search/HeaderSearch";
import Nav from "./nav/Nav";
import HeaderAuthPanel from "./header-auth-panel/HeaderAuthPanel";
import HeaderMobileNav from "./header-mobile-nav/HeaderMobileNav";

import "./Header.scss";
import HeaderMobileSearch from "./header-mobile-search/HeaderMobileSearch";

const Header = () => {
  const [showNav, setShowNav] = useState(true);

  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(true);

  const [width, setWidth] = useState(true);

  const [second, setSecond] = useState(0);

  const [scroll, setScroll] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY >= 100) {
      if (!scroll) {
        setScroll(true);
      }
    } else {
      if (scroll) {
        setScroll(false);
      }
    }
  }, [scroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

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

  return (
    <header className={scroll || showMobileNav ? "header-scrolled" : ""}>
      <Container>
        <div
          className={
            scroll ? "header-inner header-inner-scrolled" : "header-inner"
          }
        >
          <HeaderLogo scroll={scroll} />
          <Nav width={width} showNav={showNav} />
          <HeaderSearch
            showNav={showNav}
            handleChangeShowNav={handleChangeShowNav}
            width={width}
            handleWidth={handleWidth}
          />
          <div
            style={{
              display: "flex",
              order: "1",
              gap: "10px",
            }}
          >
            {showMobileSearch ? (
              <LuSearch
                className="header-inner-mobile-icon"
                onClick={() => {
                  setShowMobileSearch(false);
                }}
              />
            ) : (
              <>
                <AiOutlineClose
                  className="header-inner-mobile-icon"
                  onClick={() => {
                    setShowMobileSearch(true);
                  }}
                />

                <HeaderMobileSearch scroll={scroll} />
              </>
            )}
            {showMobileNav ? (
              <>
                <AiOutlineClose
                  className="header-inner-mobile-icon"
                  onClick={handleShowMobileNav}
                />

                <HeaderMobileNav scroll={scroll} />
              </>
            ) : (
              <div style={{ display: "flex" }}>
                <LuMenu
                  className="header-inner-mobile-icon"
                  onClick={handleShowMobileNav}
                />
              </div>
            )}
          </div>

          <HeaderAuthPanel />
        </div>
      </Container>
    </header>
  );
};

export default Header;
