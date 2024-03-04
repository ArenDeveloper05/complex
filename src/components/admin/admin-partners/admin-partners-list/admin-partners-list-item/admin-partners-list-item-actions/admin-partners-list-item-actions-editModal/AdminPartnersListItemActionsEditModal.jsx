import { useContext } from "react";
import { editPartners } from "../../../../../../../api/api";
import { notifySuccess } from "../../../../../../../utils/helpers/toast/toast";
import { AdminPartnersContext } from "../../../../AdminPartners";

import InputsFormik from "../../../../../../common/inputs-formik/InputsFormik";

const AdminPartnersListItemActionsEditModal = ({ item, closeFunction }) => {
  const { getPartnersData } = useContext(AdminPartnersContext);

  const editPartnersFunction = async (element) => {
    console.log(item.id);
    console.log(element);
    try {
      await editPartners(item.id, element);
      closeFunction();
      getPartnersData();
      notifySuccess("Փոփոխությունը հաջողությամբ կատարվեց");
    } catch (error) {
      console.log(error.message);
      notifySuccess("Սխալ կատարվեց");
    }
  };

  return (
    <div className="admin-content-partners-list-item-actions-editModal">
      <InputsFormik
        item={item}
        inputsValues={{
          name: item.name,
          desc: item.description,
          website_url: item.website_url,
          icon: item.icon,
        }}
        functionArgument={item.id}
        formikFunction={editPartnersFunction}
        btnProps={{
          txt: "Փոխել",
          type: "submit",
        }}
      />

      <button onClick={closeFunction}>close</button>
    </div>
  );
};

export default AdminPartnersListItemActionsEditModal;
