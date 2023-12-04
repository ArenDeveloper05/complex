import { footerExploreConfig } from "../../../../../config";
import FooterTopExploreLinksLink from "./FooterTop-explore-links-link/FooterTopExploreLinksLink";

const FooterTopExploreLinks = () => {
  return (
    <ul className="footer-inner-top-explore-links">
      {footerExploreConfig.map((item) => {
        return <FooterTopExploreLinksLink key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default FooterTopExploreLinks;
