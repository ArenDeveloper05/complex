import { useTranslation } from "react-i18next";
import FooterTopExploreLinks from "./footer-top-explore-links/FooterTopExploreLinks";

const FooterTopExplore = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-inner-top-explore">
      <p className="footer-inner-top-explore-title">
        {t("footer.footer_explore.title")}
      </p>

      <FooterTopExploreLinks />
    </div>
  );
};

export default FooterTopExplore;
