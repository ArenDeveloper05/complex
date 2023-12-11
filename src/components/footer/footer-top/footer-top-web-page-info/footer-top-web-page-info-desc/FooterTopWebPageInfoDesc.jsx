import { useTranslation } from "react-i18next";

const FooterTopWebPageInfoDesc = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-inner-top-webPage-info-desc">
      <p>{t("footer.footer_logo.text")}</p>
    </div>
  );
};

export default FooterTopWebPageInfoDesc;
