import { Link } from "react-router-dom";
import { ROUTER } from "../../../router/router";
import logo from "../../../assets/images/logo.png";

const HeaderLogo = ({ scroll }) => {
  return (
    <Link to={ROUTER.HOME_PAGE_ROUTE}>
      <div
        className="header-inner-logo"
        style={{ height: scroll ? "80px" : "100px" }}
      >
        <img src={logo} alt="Logo" />
      </div>
    </Link>
  );
};

export default HeaderLogo;
