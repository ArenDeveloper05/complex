import { useState } from "react";
import AdminPartnersListItemBtn from "../admin-partners-list-item-btn/AdminPartnersListItemBtn";
import AdminPartnersListItemActionsModal from "./admin-partners-list-item-actions-modal/AdminPartnersListItemActionsModal";

const AdminPartnersListItemActions = ({ getPartnersData, item }) => {
  const [deleteModal, setDeleteModal] = useState(false);

  const handleDeleteModal = () => {
    setDeleteModal((prev) => !prev);
  };

  return (
    <div className="admin-content-partners-list-item-actions">
      <AdminPartnersListItemBtn txt={"edit"} />

      <AdminPartnersListItemBtn
        txt="delete"
        onClickFunction={handleDeleteModal}
      />

      {deleteModal && (
        <AdminPartnersListItemActionsModal
          item={item}
          getPartnersData={getPartnersData}
          handleDeleteModal={handleDeleteModal}
        />
      )}
    </div>
  );
};

export default AdminPartnersListItemActions;
