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
  formikFunction,
  initialValues,
  btnProps,
  validationSchema,
  fieldsData,
}) => {
  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          formikFunction(values);

          resetForm({ values: "" });
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched, values, handleChange, handleBlur }) => {
          return (
            <Form>
              {fieldsData &&
                fieldsData.map(({ id, name, label, type }) => {
                  return (
                    <div className="field" key={id}>
                      {type === "text" ? (
                        <>
                          <TextField
                            name={name}
                            label={label}
                            value={values[name]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            sx={inputStyles}
                          />
                          {errors[name] && touched[name] ? <p>wrong</p> : null}
                        </>
                      ) : (
                        <>
                          <Field
                            type="file"
                            name={name}
                            component={FileInputField}
                          />
                          {errors[name] && touched[name] ? <p>wrong</p> : null}
                        </>
                      )}
                    </div>
                  );
                })}

              <FormikBtn txt={btnProps.txt} type={btnProps.type} />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default InputsFormik;
