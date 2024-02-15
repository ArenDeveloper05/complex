const AdminPartnersListItemDesc = ({ item: { id, name, icon } }) => {
  return (
    <div className="admin-content-partners-list-item-desc">
      <p>{id}</p>
      <p>{name}</p>
      <img src={icon} alt="img" />
    </div>
  );
};

export default AdminPartnersListItemDesc;
