import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { Button, TextField } from "@mui/material";

import { AiOutlinePlus } from "react-icons/ai";
import { addPartner } from "../../../../api/api";
import { generateFormData } from "../../../../utils/helpers/helpers";

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
    try {
      await addPartner(item);
      getPartnersData();
    } catch (error) {
      console.log(error.message);
    }
  };

  const partnersSchema = Yup.object().shape({
    name: Yup.string().required(),
    desc: Yup.string().required(),
    website_url: Yup.string().required(),
    icon: Yup.mixed().required(),
  });

  return (
    <div className="admin-content-partners-form">
      <Formik
        initialValues={{
          name: "",
          desc: "",
          website_url: "",
          icon: "",
        }}
        onSubmit={({ icon, name, desc, website_url }, { resetForm }) => {
          addPartnerFunction(
            generateFormData({ icon, name, description: desc, website_url })
          );
          resetForm();
        }}
        validationSchema={partnersSchema}
      >
        {({ errors, touched, values, handleChange, handleBlur }) => {
          return (
            <Form>
              <div className="field">
                <TextField
                  name="name"
                  label="gorcynker"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={inputStyles}
                />
                {errors.name && touched.name ? <p>wrong</p> : null}
              </div>

              <div className="field">
                <TextField
                  name="website_url"
                  label="kayqi link"
                  value={values.website_url}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={inputStyles}
                />
                {errors.website_url && touched.website_url ? (
                  <p>wrong</p>
                ) : null}
              </div>

              <div className="field">
                <TextField
                  name="desc"
                  label="nkaragrutyun"
                  value={values.desc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={inputStyles}
                />
                {errors.desc && touched.desc ? <p>wrong</p> : null}
              </div>

              <div className="field">
                <Field type="file" name="icon" component={FileInputField} />
                {errors.icon && touched.icon ? <p>wrong</p> : null}
              </div>

              <Button className="formik-btn" type="submit">
                <p className="formik-btn-text">Avelacnel</p>
                <span className="formik-btn-icon">
                  <AiOutlinePlus className="svg" />
                </span>
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AdminPartnersForm;
