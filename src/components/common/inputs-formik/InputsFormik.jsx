import * as Yup from "yup";

import { Field, Form, Formik } from "formik";
import { TextField } from "@mui/material";
import { addPartner } from "../../../api/api";

import "./InputsFormik.scss";
import FormikBtn from "../formik-btn/FormikBtn";
import { generateFormData } from "../../../utils/helpers/helpers";

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

const InputsFormik = ({
  item,
  formikFunction,
  inputsValues,
  functionArgument,
  btnProps,
  validationSchema,
  fieldsData,
}) => {
  console.log(item);

  return (
    <div className="form">
      <Formik
        initialValues={{
          name: inputsValues.name,
          desc: inputsValues.desc,
          website_url: inputsValues.website_url,
          icon: inputsValues.icon,
        }}
        onSubmit={({ icon, name, desc, website_url }, { resetForm }) => {
          console.log({ icon, name, description: desc, website_url });

          formikFunction({
            icon: typeof icon === "string" ? null : icon,
            name,
            description: desc,
            website_url,
          });

          resetForm({ values: "" });
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched, values, handleChange, handleBlur }) => {
          return (
            <Form>
              {/* {fieldsData &&
                fieldsData.map(({ id, name, label, type }) => {
                  return (
                    <div className="field" key={id}>
                      <TextField
                        name={name}
                        label={label}
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        sx={inputStyles}
                      />
                      {errors.name && touched.name ? <p>wrong</p> : null}
                    </div>
                  );
                })} */}
              <div className="field">
                <TextField
                  name="name"
                  label="Գործընկեր"
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
                  label="Կայքի լինկ"
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
                  label="Նկարագրություն"
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

              <FormikBtn txt={btnProps.txt} type={btnProps.type} />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default InputsFormik;
