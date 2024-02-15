import AdminPartnersListItemDesc from "./admin-partners-list-item-desc/AdminPartnersListItemDesc";
import AdminPartnersListItemActions from "./admin-partners-list-item-actions/AdminPartnersListItemActions";

const AdminPartnersListItem = ({ item, getPartnersData }) => {
  return (
    <div className="admin-content-partners-list-item">
      <AdminPartnersListItemDesc item={item} />

      <AdminPartnersListItemActions
        getPartnersData={getPartnersData}
        item={item}
      />
    </div>
  );
};

export default AdminPartnersListItem;
