import { useState } from "react";
import Container from "../common/container/Container";
import "./Header.scss";
import HeaderLogo from "./header-logo/HeaderLogo";
import HeaderSearch from "./header-search/HeaderSearch";
import Nav from "./nav/Nav";
import HeaderAuthPanel from "./header-auth-panel/HeaderAuthPanel";

const Header = () => {
  const [showNav, setShowNav] = useState(true);

  const handleChangeShowNav = () => {
    setShowNav((prev) => (prev = !prev));
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

          <HeaderAuthPanel />
        </div>
      </Container>
    </header>
  );
};

export default Header;
