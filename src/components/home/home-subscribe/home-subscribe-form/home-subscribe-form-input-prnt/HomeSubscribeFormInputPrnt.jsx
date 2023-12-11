import { useState } from "react";
import { useTranslation } from "react-i18next";

const HomeSubscribeFormInputPrnt = () => {
  const [subscribeInputVal, setSubscribeInputVal] = useState("");

  const { t } = useTranslation();

  return (
    <div className="subscribe-inner-form-input-prnt">
      <input
        type="text"
        placeholder={t("main.main_subscribe.input_placeholder")}
        value={subscribeInputVal}
        onChange={(evt) => {
          setSubscribeInputVal(evt.target.value);
        }}
      />
      <button>{t("main.main_subscribe.form_button")}</button>
    </div>
  );
};

export default HomeSubscribeFormInputPrnt;
