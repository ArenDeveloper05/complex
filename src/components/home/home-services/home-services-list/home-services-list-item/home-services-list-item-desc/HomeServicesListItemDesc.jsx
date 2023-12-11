import { useTranslation } from "react-i18next";

const HomeServicesListItemDesc = ({ item }) => {
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <div className="services-inner-list-item-desc">
      <item.icon className="services-inner-list-item-desc-icon" />

      <p className="services-inner-list-item-desc-title">
        {item.title[language]}
      </p>

      <p className="services-inner-list-item-desc-txt">{item.text[language]}</p>
    </div>
  );
};

export default HomeServicesListItemDesc;
