import { Field, Form, Formik } from "formik";
import { Button, TextField } from "@mui/material";
import { editPartners } from "../../../../../../../api/api";
import InputsFormik from "../../../../../../common/inputs-formik/InputsFormik";

import FormikBtn from "../../../../../../common/formik-btn/FormikBtn";
import { generateFormData } from "../../../../../../../utils/helpers/helpers";

const FileInputField = ({ field, form: { setFieldValue }, ...props }) => {
  const handleChange = (event) => {
    const file = event.target.files[0];
    setFieldValue(field.name, file); // Update Formik's form state with the selected file
  };

  return <input type="file" onChange={handleChange} {...props} />;
};

const inputStyles = {
  width: "100%",
  backgroundColor: "#f4f5f8",
};

const AdminPartnersListItemActionsEditModal = ({ item, closeFunction }) => {
  const editPartnersFunction = async (partnerId, element) => {
    console.log(element, "in async");
    try {
      const { data } = await editPartners(partnerId, element);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="admin-content-partners-list-item-actions-editModal">
      <div className="admin-content-partners-list-item-actions-editModal-form">
        <Formik
          initialValues={{
            name: item.name,
            description: item.description,
            website_url: item.website_url,
            icon: item.icon,
          }}
          onSubmit={(values) => {
            console.log("JKSDHFKJHASDFH");
            console.log(values.icon);
            editPartnersFunction(
              item.id,
              generateFormData({
                name: values.name,
                desc: values.description,
                website_url: values.website_url,
                icon: values.icon,
              })
            );
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => {
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
                    name="description"
                    label="nkaragrutyun"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={inputStyles}
                  />
                  {errors.description && touched.description ? (
                    <p>wrong</p>
                  ) : null}
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
                  <Field name="icon" type="file" component={FileInputField} />
                  {errors.icon && touched.icon ? <p>wrong</p> : null}
                </div>

                <FormikBtn txt="popoxel" type="submit" />
              </Form>
            );
          }}
        </Formik>
      </div>

      {/* <InputsFormik
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
      /> */}

      <button onClick={closeFunction}>close</button>
    </div>
  );
};

export default AdminPartnersListItemActionsEditModal;
