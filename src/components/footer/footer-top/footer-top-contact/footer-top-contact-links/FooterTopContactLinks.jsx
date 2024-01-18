import { footerContactConfig } from "../../../../../config";
import FooterTopContactLinksItem from "./footer-top-contact-links-item/FooterTopContactLinksItem";

const FooterTopContactLinks = () => {
  return (
    <div className="footer-inner-top-contact-links">
      {footerContactConfig.map((item) => {
        return <FooterTopContactLinksItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default FooterTopContactLinks;
