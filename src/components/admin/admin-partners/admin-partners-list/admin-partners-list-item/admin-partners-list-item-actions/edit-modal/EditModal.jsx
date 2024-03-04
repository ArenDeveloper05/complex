import { useContext } from "react";
import { editPartners } from "../../../../../../../api/api";
import { notifySuccess } from "../../../../../../../utils/helpers/toast/toast";
import { AdminPartnersContext } from "../../../../AdminPartners";

import InputsFormik from "../../../../../../common/inputs-formik/InputsFormik";

const EditModal = ({ item, closeFunction }) => {
  const { getPartnersData } = useContext(AdminPartnersContext);

  const editPartnersFunction = async ({
    icon,
    name,
    description,
    website_url,
  }) => {
    console.log(item.id);

    try {
      await editPartners(item.id, {
        icon: typeof icon === "string" ? null : icon,
        name,
        description,
        website_url,
      });
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
        initialValues={{
          name: item.name,
          description: item.description,
          website_url: item.website_url,
          icon: item.icon,
        }}
        formikFunction={editPartnersFunction}
        btnProps={{
          txt: "Փոխել",
          type: "submit",
        }}
        fieldsData={[
          {
            id: 1,
            name: "name",
            label: "Գործընկեր",
            type: "text",
          },
          {
            id: 2,
            name: "website_url",
            label: "Կայքի լինկ",
            type: "text",
          },
          {
            id: 3,
            name: "description",
            label: "Նկարագրություն",
            type: "text",
          },
          {
            id: 4,
            name: "icon",
            label: "",
            type: "file",
          },
        ]}
      />

      <button onClick={closeFunction}>close</button>
    </div>
  );
};

export default EditModal;
