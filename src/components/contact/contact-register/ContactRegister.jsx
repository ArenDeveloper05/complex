import { Formik, Form } from "formik";
import * as Yup from "yup";
// import { login, register } from "../../../../api/api";
import { useTranslation } from "react-i18next";

import { Button, NativeSelect, TextField } from "@mui/material";
import { useParallax } from "react-scroll-parallax";

import "./ContactRegister.scss";
import { useState } from "react";

const ContactRegister = () => {
  const { t } = useTranslation();

  const [selectedMap, setSelectedMap] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1149.0428190369068!2d44.567120000424936!3d40.18195873732741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcae005e23b3%3A0x2d57c7e8a020e1ec!2zNTAgR2Fsc2hveWFuIFN0LCDUtdaA1ofVodW2IDAwNzk!5e0!3m2!1shy!2sam!4v1705407984403!5m2!1shy!2sam"
  );
  const [state, setState] = useState([
    {
      id: 1,
      title: "mek",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1149.0428190369068!2d44.567120000424936!3d40.18195873732741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcae005e23b3%3A0x2d57c7e8a020e1ec!2zNTAgR2Fsc2hveWFuIFN0LCDUtdaA1ofVodW2IDAwNzk!5e0!3m2!1shy!2sam!4v1705407984403!5m2!1shy!2sam",
    },
    {
      id: 2,
      title: "erku",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.8496117746936!2d44.54348797654462!3d40.16790197074532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc9b1545f85d%3A0x4613b3bd8f45d778!2sToon%20Complex!5e0!3m2!1sru!2sam!4v1702719467255!5m2!1sru!2sam",
    },
    {
      id: 3,
      title: "ereq",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2761.6259572912663!2d44.5642046956986!3d40.19900674909549!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shy!2sam!4v1705408255911!5m2!1shy!2sam",
    },
  ]);

  const registerSchema = Yup.object().shape({
    first_name: Yup.string()
      .min(4, t("validations.short"))
      .required(t("validations.required")),
    last_name: Yup.string()
      .min(4, t("validations.short"))
      .required(t("validations.required")),
    email: Yup.string()
      .email(t("validations.email"))
      .required(t("validations.required")),
    phone: Yup.string()
      .min(8, t("validations.short"))
      .required(t("validations.required")),
    password: Yup.string()
      .min(8, t("validations.short"))
      .required(t("validations.required")),
    password_confirmation: Yup.string()
      .min(8, t("validations.short"))
      .required(t("validations.required")),
  });

  const registerFunction = async (userData) => {
    console.log(userData);
    // try {
    //   const { data } = await register({
    //     ...userData,
    //     role: "user",
    //     phone: userData.phone.toString(),
    //   });
    // if (data.status === 200) {
    // const loginResponse = await login({
    //   email: userData.email,
    //   password: userData.password,
    //   });
    // console.log(loginResponse.data);
    //   console.log(data);
    //   // }
    //   if (data.errors && Object.keys(data.errors) !== 0) {
    //     setErrors(data.errors);
    //   }
    // } catch (error) {
    //   console.log(error, "error");
    //   setErrors(error.response.data);
    // }
  };

  const inputStyles = {
    width: "100%",
    backgroundColor: "#f4f5f8",
    border: "none",
    outline: "none",
  };

  const parallax = useParallax({
    speed: -10,
  });

  return (
    <div className="contact-register">
      <div className="contact-register-map" ref={parallax.ref}>
        <div className="contact-register-map-links">
          {state.map((item) => {
            return (
              <p
                key={item.id}
                onClick={() => {
                  setSelectedMap(item.mapLink);
                }}
              >
                {item.title}
              </p>
            );
          })}
        </div>

        <div className="contact-register-map-parent">
          <iframe
            src={selectedMap}
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </div>
      <div className="contact-register-form">
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            phone_code: "+374",
            password: "",
            password_confirmation: "",
          }}
          validationSchema={registerSchema}
          onSubmit={(values) => {
            if (values.password === values.password_confirmation) {
              registerFunction(values);
            }
          }}
        >
          {({ errors, touched, values, handleChange, handleBlur }) => {
            return (
              <Form>
                <h1>{t("main.main_register.title")}</h1>
                <div className="contact-register-form-row">
                  <TextField
                    name="first_name"
                    label={t("main.main_register.name_placeholder")}
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={inputStyles}
                  />
                  {errors.first_name && touched.first_name ? (
                    <div className="form-error">{errors.first_name}</div>
                  ) : null}
                </div>
                <div className="contact-register-form-row">
                  <TextField
                    name="last_name"
                    id="lname"
                    label={t("main.main_register.surname_placeholder")}
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={inputStyles}
                  />
                  {errors.last_name && touched.last_name ? (
                    <div className="form-error">{errors.last_name}</div>
                  ) : null}
                </div>
                <div className="contact-register-form-row phone-row">
                  <div className="contact-register-form-row-phone">
                    <NativeSelect
                      className="phone_code_select"
                      name="phone_code"
                      value={values.phone_code}
                      style={{
                        height: "56px",
                        color: "#e77818",
                        marginRight: "2px",
                        backgroundColor: "#f4f5f8",
                      }}
                      onChange={(e) => {
                        handleChange(e);
                        values.phone_code = e.target.value;
                      }}
                    >
                      <option value="+374">+374</option>
                      <option value="+7">+7</option>
                    </NativeSelect>
                    <TextField
                      name="phone"
                      type="number"
                      id="reg-phone"
                      label={t("main.main_register.phone_placeholder")}
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={inputStyles}
                    />
                  </div>
                  {errors.phone && touched.phone ? (
                    <div className="form-error">{errors.phone}</div>
                  ) : null}
                </div>
                <div className="contact-register-form-row">
                  <TextField
                    name="email"
                    type="email"
                    id="reg-email"
                    label={t("main.main_register.email_placeholder")}
                    sx={inputStyles}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <div className="form-error">{errors.email}</div>
                  ) : null}
                </div>
                <div className="contact-register-form-row">
                  <TextField
                    name="password"
                    type="password"
                    id="reg-pass"
                    label={t("main.main_register.password_placeholder")}
                    sx={inputStyles}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password ? (
                    <div className="form-error">{errors.password}</div>
                  ) : null}
                </div>
                <div className="contact-register-form-row">
                  <TextField
                    name="password_confirmation"
                    type="password"
                    id="reg-pass-confirm"
                    label={t("main.main_register.repeat_password_placeholder")}
                    sx={inputStyles}
                    value={values.password_confirmation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password_confirmation &&
                  touched.password_confirmation ? (
                    <div className="form-error">
                      {errors.password_confirmation}
                    </div>
                  ) : null}
                  {values.password !== values.password_confirmation && (
                    <div className="form-error--confirmation">
                      {t("validations.password_confirmation")}
                    </div>
                  )}
                </div>

                <Button
                  className="register-button"
                  type="submit"
                  variant="outlined"
                >
                  {t("main.main_register.button")}
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default ContactRegister;
