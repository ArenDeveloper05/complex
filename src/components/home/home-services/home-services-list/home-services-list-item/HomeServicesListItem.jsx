import HomeServicesListItemDesc from "./home-services-list-item-desc/HomeServicesListItemDesc";
import HomeServicesListItemImg from "./home-services-list-item-img/HomeServicesListItemImg";

const HomeServicesListItem = ({ item }) => {
  return (
    <div className="services-inner-list-item" key={item.id}>
      <HomeServicesListItemImg item={item} />

      <HomeServicesListItemDesc item={item} />
    </div>
  );
};

export default HomeServicesListItem;
