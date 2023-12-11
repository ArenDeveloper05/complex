import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineMail } from "react-icons/hi";

const FooterTopNewsletter = () => {
  const [footerInputVal, setFooterInputVal] = useState("");

  const handleFooterInputOnChange = (evt) => {
    setFooterInputVal(evt.target.value);
  };

  const { t } = useTranslation();

  return (
    <div className="footer-inner-top-newsletter">
      <p className="footer-inner-top-newsletter-title">
        {t("footer.footer_newsletter.title")}
      </p>

      <form>
        <input
          type="text"
          placeholder={t("footer.footer_newsletter.input_placeholder")}
          value={footerInputVal}
          onChange={handleFooterInputOnChange}
        />

        <button>
          <HiOutlineMail />
        </button>
      </form>

      <p className="footer-inner-top-newsletter-txt">
        {t("footer.footer_newsletter.text")}
      </p>
    </div>
  );
};

export default FooterTopNewsletter;
