import { useTranslation } from "react-i18next";
import { IoMdInformationCircle } from "react-icons/io";

const HomeSubscribeFormNote = () => {
  const { t } = useTranslation();

  return (
    <div className="subscribe-inner-form-note">
      <IoMdInformationCircle />

      <p>{t("main.main_subscribe.note")}</p>
    </div>
  );
};

export default HomeSubscribeFormNote;
