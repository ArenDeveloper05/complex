import { Link } from "react-router-dom";

const FooterTopWebPageInfoNetworksNetwork = ({ item }) => {
  return (
    <div className="footer-inner-top-webPage-info-networks-network">
      <Link
        to={item.link}
        className="footer-inner-top-webPage-info-networks-network-link"
      >
        <item.icon className="footer-inner-top-webPage-info-networks-network-link-icon" />
      </Link>
    </div>
  );
};

export default FooterTopWebPageInfoNetworksNetwork;
