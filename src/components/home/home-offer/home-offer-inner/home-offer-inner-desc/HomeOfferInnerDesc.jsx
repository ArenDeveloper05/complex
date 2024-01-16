import { useTranslation } from "react-i18next";

const HomeOfferInnerDesc = () => {
  const { t } = useTranslation();

  return (
    <div className="home-offer-inner-desc">
      <p className="home-offer-inner-desc-title section-title">
        {t("main.main_offer.title")}
      </p>

      <p className="home-offer-inner-desc-txt">{t("main.main_offer.text")}</p>
    </div>
  );
};

export default HomeOfferInnerDesc;
