import Container from "../common/container/Container";
import WhatsApp from "../whatsapp/WhatsApp";
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
      <WhatsApp />
    </footer>
  );
};

export default Footer;
