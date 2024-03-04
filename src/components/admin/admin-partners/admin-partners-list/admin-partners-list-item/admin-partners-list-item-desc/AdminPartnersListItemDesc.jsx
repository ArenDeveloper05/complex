import GenerateImg from "../../../../../common/generate-img/GenerateImg";

const AdminPartnersListItemDesc = ({ item: { id, name, icon } }) => {
  return (
    <div className="admin-content-partners-list-item-desc">
      <p>{id}</p>
      <p>{name}</p>
      <GenerateImg src={icon} />
    </div>
  );
};

export default AdminPartnersListItemDesc;
