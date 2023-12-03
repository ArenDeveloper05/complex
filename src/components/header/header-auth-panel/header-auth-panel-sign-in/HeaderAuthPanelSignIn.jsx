import { useTranslation } from "react-i18next";
import { PiSignIn } from "react-icons/pi";
import { Link } from "react-router-dom";

const HeaderAuthPanelSignIn = () => {
  const { t } = useTranslation();

  return (
    <div className="header-inner-auth-panel-signIn">
      <Link to={"/"} className="header-inner-auth-panel-signIn-link">
        <PiSignIn className="header-inner-auth-panel-signIn-link-mobile-icon" />

        <p>{t("header.sign-in")}</p>

        <PiSignIn className="header-inner-auth-panel-signIn-link-icon" />
      </Link>
    </div>
  );
};

export default HeaderAuthPanelSignIn;
