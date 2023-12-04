import FooterTopContact from "./footer-top-contact/FooterTopContact";
import FooterTopExplore from "./footer-top-explore/FooterTopExplore";
import FooterTopNewsletter from "./footer-top-newsletter/FooterTopNewsletter";
import FooterTopWebPageInfo from "./footer-top-web-page-info/FooterTopWebPageInfo";

const FooterTop = () => {
  return (
    <div className="footer-inner-top">
      <FooterTopWebPageInfo />

      <FooterTopExplore />

      <FooterTopContact />

      <FooterTopNewsletter />
    </div>
  );
};

export default FooterTop;
