import Container from "../common/container/Container";
import FooterBottom from "./footer-bottom/FooterBottom";
import FooterTop from "./footer-top/FooterTop";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer-inner">
          <FooterTop />
          <FooterBottom />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
