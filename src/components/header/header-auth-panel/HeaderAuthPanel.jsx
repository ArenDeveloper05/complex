import HeaderAuthPanelLang from "./header-auth-panel-lang/HeaderAuthPanelLang";
import HeaderAuthPanelSignIn from "./header-auth-panel-sign-in/HeaderAuthPanelSignIn";

const HeaderAuthPanel = () => {
  return (
    <div className="header-inner-auth-panel">
      <HeaderAuthPanelSignIn />

      <HeaderAuthPanelLang />
    </div>
  );
};

export default HeaderAuthPanel;
