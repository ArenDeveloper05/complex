import { useRef, useState } from "react";
import { Field, Form, Formik } from "formik";
import { TextField } from "@mui/material";

import FormikBtn from "../formik-btn/FormikBtn";
import BaseImage from "../base-image/BaseImage";

import "./InputsFormik.scss";
import SelectImage from "../select-image/SelectImage";

const inputStyles = {
  width: "100%",
  backgroundColor: "#f4f5f8",
};

const InputsFormik = ({
  formikFunction,
  initialValues,
  btnProps,
  validationSchema,
  fieldsData,
  oldImageSrc,
}) => {
  const [selectedImage, setSelectedImage] = useState({
    src: oldImageSrc,
    title: "Yntreq nkary",
  });
  const imageHasChanged = useRef(false);

  const FileInputField = ({ field, form: { setFieldValue }, ...props }) => {
    const handleChange = (event) => {
      const file = event.target.files[0];
      setFieldValue(field.name, file); // Update Formik's form state with the selected file

      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          setSelectedImage((prev) => {
            return {
              title: file.name,
              src: reader.result,
            };
          });
          if (!imageHasChanged.current) {
            imageHasChanged.current = true;
          }
        };
        reader.readAsDataURL(file);
      }
    };

    return (
      <input
        type="file"
        onChange={handleChange}
        accept=".jpg,.jpeg,.png,.gif"
        {...props}
      />
    );
  };

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
                          <BaseImage
                            src={selectedImage.src}
                            normal={imageHasChanged.current ? true : false}
                          />
                          <SelectImage text={selectedImage.title}>
                            <Field
                              type="file"
                              name={name}
                              component={FileInputField}
                            />
                          </SelectImage>
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
