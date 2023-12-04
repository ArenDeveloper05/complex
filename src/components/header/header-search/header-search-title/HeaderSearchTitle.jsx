import { useTranslation } from "react-i18next";
import { IoIosSearch } from "react-icons/io";

const HeaderSearchTitle = ({ handleChangeShowNav, handleWidth }) => {
  const { t } = useTranslation();

  return (
    <div
      className="header-inner-search-title"
      onClick={() => {
        handleChangeShowNav();
        handleWidth();
      }}
    >
      <IoIosSearch className="header-inner-search-title-icon" />

      <p className="header-inner-search-title-txt">{t("header.search")}</p>
    </div>
  );
};

export default HeaderSearchTitle;
