import HeaderAuthPanelContact from "./header-auth-panel-contact/HeaderAuthPanelContact";
import HeaderAuthPanelLang from "./header-auth-panel-lang/HeaderAuthPanelLang";

const HeaderAuthPanel = () => {
  return (
    <div className="header-inner-auth-panel">
      <HeaderAuthPanelContact />

      <HeaderAuthPanelLang />
    </div>
  );
};

export default HeaderAuthPanel;
