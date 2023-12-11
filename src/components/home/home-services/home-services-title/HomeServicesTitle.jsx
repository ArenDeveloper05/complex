import { useTranslation } from "react-i18next";
import Lines from "../../../common/lines/Lines";

const HomeServicesTitle = () => {
  const { t } = useTranslation();

  return (
    <div className="services-inner-title">
      <p className="services-inner-title-light">
        {t("main.main_services.minor_title")}
      </p>

      <p className="services-inner-title-bold">
        {t("main.main_services.primary_title")}
      </p>

      <Lines bcg={"orange"} />
    </div>
  );
};

export default HomeServicesTitle;
