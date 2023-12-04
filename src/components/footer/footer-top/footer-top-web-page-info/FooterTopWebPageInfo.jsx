import FooterTopWebPageInfoLogo from "./footer-top-web-page-info-logo/FooterTopWebPageInfoLogo";
import FooterTopWebPageInfoDesc from "./footer-top-web-page-info-desc/FooterTopWebPageInfoDesc";
import FooterTopWebPageInfoNetworks from "./footer-top-web-page-info-networks/FooterTopWebPageInfoNetworks";

const FooterTopWebPageInfo = () => {
  return (
    <div className="footer-inner-top-webPage-info">
      <FooterTopWebPageInfoLogo />

      <FooterTopWebPageInfoDesc />

      <FooterTopWebPageInfoNetworks />
    </div>
  );
};

export default FooterTopWebPageInfo;
