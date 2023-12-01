import { useState } from "react";
import Container from "../common/container/Container";
import "./Header.scss";
import HeaderLogo from "./header-logo/HeaderLogo";
import HeaderSearch from "./header-search/HeaderSearch";
import Nav from "./nav/Nav";

const Header = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <header>
      <Container>
        <div className="header-inner">
          <HeaderLogo />

          {showNav && <Nav />}

          <HeaderSearch showNav={showNav} setShowNav={setShowNav} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
