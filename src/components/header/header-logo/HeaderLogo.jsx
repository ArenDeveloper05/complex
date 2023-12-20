import logo from "../../../assets/images/logo.png";

const HeaderLogo = ({ scroll }) => {
  return (
    <div
      className="header-inner-logo"
      style={{ height: scroll ? "80px" : "100px" }}
    >
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default HeaderLogo;
