import { useSelector } from "react-redux";
import HomeServicesListItem from "./home-services-list-item/HomeServicesListItem";

const HomeServicesList = () => {
  const servicesList = useSelector((state) => state.services.services);

  return (
    <div className="services-inner-list">
      {servicesList &&
        servicesList.length !== 0 &&
        servicesList.map((item) => {
          return <HomeServicesListItem key={item.id} item={item} />;
        })}
    </div>
  );
};
export default HomeServicesList;
