import { useContext } from "react";
import { deletePartners } from "../../../../../../../api/api";
import { AdminPartnersContext } from "../../../../AdminPartners";
import {
  notifyError,
  notifySuccess,
} from "../../../../../../../utils/helpers/toast/toast";

import AdminPartnersListItemBtn from "../../admin-partners-list-item-btn/AdminPartnersListItemBtn";

const AdminPartnersListItemActionsModal = ({ item, handleDeleteModal }) => {
  const { getPartnersData } = useContext(AdminPartnersContext);

  const deletePartner = async (partnerId) => {
    try {
      await deletePartners(partnerId);
      getPartnersData();
      notifySuccess("Գործընկերը հաջողությամբ ջնջվեց");
    } catch (error) {
      console.log(error.message);
      notifyError("Սխալ կատարվեց");
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
