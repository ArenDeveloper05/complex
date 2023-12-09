const HomeServicesListItemImg = ({ item }) => {
  return (
    <div
      className="services-inner-list-item-img"
      style={{ backgroundImage: `url(${item.img})` }}
    ></div>
  );
};

export default HomeServicesListItemImg;
