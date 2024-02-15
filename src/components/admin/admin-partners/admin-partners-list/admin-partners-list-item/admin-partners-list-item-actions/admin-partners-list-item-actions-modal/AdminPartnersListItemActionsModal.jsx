import { deletePartners } from "../../../../../../../api/api";
import AdminPartnersListItemBtn from "../../admin-partners-list-item-btn/AdminPartnersListItemBtn";

const AdminPartnersListItemActionsModal = ({
  item,
  getPartnersData,
  handleDeleteModal,
}) => {
  const deletePartner = async (partnerId) => {
    try {
      const { data } = await deletePartners(partnerId);
      getPartnersData();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="admin-content-partners-list-item-actions-modal">
      <div className="admin-content-partners-list-item-actions-modal-desc">
        <p>hamozvaceq vor cankanumeq jnjel "{item.name}" gorcynkerojy?</p>

        <div className="admin-content-partners-list-item-actions-modal-desc-btns">
          <AdminPartnersListItemBtn
            txt="Yes"
            onClickFunction={() => {
              deletePartner(item.id);
              handleDeleteModal();
            }}
          />

          <AdminPartnersListItemBtn
            txt="No"
            onClickFunction={handleDeleteModal}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPartnersListItemActionsModal;
