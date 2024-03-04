import BaseImage from "../../../../../common/base-image/BaseImage";

const AdminPartnersListItemDesc = ({ item: { id, name, icon } }) => {
  return (
    <div className="admin-content-partners-list-item-desc">
      <p>{id}</p>
      <p>{name}</p>
      <BaseImage src={icon} />
    </div>
  );
};

export default AdminPartnersListItemDesc;
