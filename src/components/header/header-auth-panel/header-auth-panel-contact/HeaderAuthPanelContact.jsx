import { useTranslation } from "react-i18next";

import contactLogo from "../../../../assets/images/kap.png";

const HeaderAuthPanelContact = () => {
  const { t } = useTranslation();

  return (
    <div className="header-inner-auth-panel-contact">
      <div className="header-inner-auth-panel-contact-icon">
        <img src={contactLogo} alt="contact" />
      </div>
      <ul className="header-inner-auth-panel-contact-list"></ul>
    </div>
  );
};

export default HeaderAuthPanelContact;
