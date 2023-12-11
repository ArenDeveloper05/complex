import { useTranslation } from "react-i18next";

const FooterBottom = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-inner-bottom">
      <div className="footer-inner-bottom-desc">
        <p className="footer-inner-bottom-desc-txt">
          © {t("footer.footer_bottom_text")}
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
