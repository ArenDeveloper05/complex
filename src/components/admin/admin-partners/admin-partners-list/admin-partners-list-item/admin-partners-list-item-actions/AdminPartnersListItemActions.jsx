import { useState } from "react";

import AdminPartnersListItemBtn from "../admin-partners-list-item-btn/AdminPartnersListItemBtn";
import ActionsModal from "./actions-modal/ActionsModal";
import EditModal from "./edit-modal/EditModal";
import BaseModal from "../../../../../common/base-modal/BaseModal";

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
        <BaseModal
          onClick={() => {
            handleEditModal();
          }}
        >
          <EditModal item={item} closeFunction={handleEditModal} />
        </BaseModal>
      )}

      <AdminPartnersListItemBtn
        txt="delete"
        onClickFunction={handleDeleteModal}
      />

      {deleteModal && (
        <BaseModal
          onClick={() => {
            handleDeleteModal();
          }}
        >
          <ActionsModal item={item} handleDeleteModal={handleDeleteModal} />
        </BaseModal>
      )}
    </div>
  );
};

export default AdminPartnersListItemActions;
