const HomeServicesListItemDesc = ({ item }) => {
  return (
    <div className="services-inner-list-item-desc">
      <item.icon className="services-inner-list-item-desc-icon" />

      <p className="services-inner-list-item-desc-title">{item.title}</p>

      <p className="services-inner-list-item-desc-txt">{item.text}</p>
    </div>
  );
};

export default HomeServicesListItemDesc;
