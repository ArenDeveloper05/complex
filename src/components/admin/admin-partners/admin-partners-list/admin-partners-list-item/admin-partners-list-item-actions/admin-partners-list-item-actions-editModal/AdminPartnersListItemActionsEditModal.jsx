import { editPartners } from "../../../../../../../api/api";
import InputsFormik from "../../../../../../common/inputs-formik/InputsFormik";

const AdminPartnersListItemActionsEditModal = ({ item, closeFunction }) => {
  const editPartnersFunction = async (partnerId, element) => {
    console.log(element, "in async");
    console.log(partnerId, "part id");
    try {
      const { data } = await editPartners(partnerId, element);
    } catch (error) {
      console.log(error.message);
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
          txt: "popoxel",
          type: "submit",
        }}
      />

      <button onClick={closeFunction}>close</button>
    </div>
  );
};

export default AdminPartnersListItemActionsEditModal;
