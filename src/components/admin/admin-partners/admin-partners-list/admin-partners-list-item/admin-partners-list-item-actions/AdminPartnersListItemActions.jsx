import { useState } from "react";

import AdminPartnersListItemBtn from "../admin-partners-list-item-btn/AdminPartnersListItemBtn";
import AdminPartnersListItemActionsModal from "./admin-partners-list-item-actions-modal/AdminPartnersListItemActionsModal";
import AdminPartnersListItemActionsEditModal from "./admin-partners-list-item-actions-editModal/AdminPartnersListItemActionsEditModal";

const AdminPartnersListItemActions = ({ item }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const handleDeleteModal = () => {
    setDeleteModal((prev) => !prev);
  };

  const handleEditModal = () => {
    setEditModal((prev) => !prev);
  };

  return (
    <div className="admin-content-partners-list-item-actions">
      <AdminPartnersListItemBtn
        txt={"edit"}
        onClickFunction={handleEditModal}
      />

      {editModal && (
        <AdminPartnersListItemActionsEditModal
          item={item}
          closeFunction={handleEditModal}
        />
      )}

      <AdminPartnersListItemBtn
        txt="delete"
        onClickFunction={handleDeleteModal}
      />

      {deleteModal && (
        <AdminPartnersListItemActionsModal
          item={item}
          handleDeleteModal={handleDeleteModal}
        />
      )}
    </div>
  );
};

export default AdminPartnersListItemActions;
