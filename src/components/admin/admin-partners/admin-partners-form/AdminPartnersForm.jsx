import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { Button, TextField } from "@mui/material";

import { addPartner } from "../../../../api/api";
import { generateFormData } from "../../../../utils/helpers/helpers";
import FormikBtn from "../../../common/formik-btn/FormikBtn";
import InputsFormik from "../../../common/inputs-formik/InputsFormik";
import {
  notifyError,
  notifySuccess,
} from "../../../../utils/helpers/toast/toast";

const inputStyles = {
  width: "100%",
  backgroundColor: "#f4f5f8",
};

const FileInputField = ({ field, form: { setFieldValue }, ...props }) => {
  const handleChange = (event) => {
    const file = event.target.files[0];
    setFieldValue(field.name, file); // Update Formik's form state with the selected file
  };

  return <input type="file" onChange={handleChange} {...props} />;
};

const AdminPartnersForm = ({ getPartnersData }) => {
  const addPartnerFunction = async (item) => {
    console.log("item to add");
    console.log(item);
    try {
      await addPartner(item);
      getPartnersData();
      notifySuccess("Գործընկերը հաջողությամբ ավելացվեց");
    } catch (error) {
      console.log(error.message);
      notifyError("Սխալ կատարվեց");
    }
  };

  const partnersSchema = Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string().required(),
    website_url: Yup.string().required(),
    icon: Yup.mixed().required(),
  });

  return (
    <div className="admin-content-partners-form">
      <InputsFormik
        formikFunction={addPartnerFunction}
        validationSchema={partnersSchema}
        initialValues={{
          name: "",
          description: "",
          website_url: "",
          icon: "",
        }}
        btnProps={{
          txt: "Ավելացնել",
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
    </div>
  );
};

export default AdminPartnersForm;
