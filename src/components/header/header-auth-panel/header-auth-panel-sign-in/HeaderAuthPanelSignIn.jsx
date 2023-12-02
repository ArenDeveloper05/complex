import { PiSignIn } from "react-icons/pi";
import { Link } from "react-router-dom";

const HeaderAuthPanelSignIn = () => {
  return (
    <div className="header-inner-auth-panel-signIn">
      <Link to={"/"}>
        <p>Sign In</p>

        <PiSignIn />
      </Link>
    </div>
  );
};

export default HeaderAuthPanelSignIn;
