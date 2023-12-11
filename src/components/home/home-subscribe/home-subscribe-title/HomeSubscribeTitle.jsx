import { useTranslation } from "react-i18next";
import Lines from "../../../common/lines/Lines";

const HomeSubscribeTitle = () => {
  const { t } = useTranslation();

  return (
    <div className="subscribe-inner-title">
      <p className="subscribe-inner-title-light">
        {t("main.main_subscribe.minor_title")}
      </p>

      <p className="subscribe-inner-title-bold">
        {t("main.main_subscribe.primary_title")}
      </p>

      <Lines bcg={"orange"} />
    </div>
  );
};

export default HomeSubscribeTitle;
