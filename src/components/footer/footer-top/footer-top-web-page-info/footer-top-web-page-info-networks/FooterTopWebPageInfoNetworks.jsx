import { footerNetworksConfig } from "../../../../../config";
import FooterTopWebPageInfoNetworksNetwork from "./footer-top-web-page-info-networks-network/FooterTopWebPageInfoNetworksNetwork";

const FooterTopWebPageInfoNetworks = () => {
  return (
    <div className="footer-inner-top-webPage-info-networks">
      {footerNetworksConfig.map((item) => {
        return (
          <FooterTopWebPageInfoNetworksNetwork key={item.id} item={item} />
        );
      })}
    </div>
  );
};

export default FooterTopWebPageInfoNetworks;
