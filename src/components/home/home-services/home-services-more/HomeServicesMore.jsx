import { useTranslation } from "react-i18next";

const HomeServicesMore = () => {
  const { t } = useTranslation();

  return (
    <div className="services-inner-more">
      <p>{t("main.main_services.more")}</p>

      <a href="/">
        {t("main.main_services.more_link")} {"> >"}
      </a>
    </div>
  );
};

export default HomeServicesMore;
