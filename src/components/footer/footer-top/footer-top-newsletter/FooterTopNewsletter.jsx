import { useTranslation } from "react-i18next";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";

const inputStyles = {
  width: "100%",
  backgroundColor: "#f4f5f8",
  border: "none",
  outline: "none",
};

const FooterTopNewsletter = () => {
  const { t } = useTranslation();

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
  });

  const registerFunction = async (userData) => {
    console.log(userData);
  };

  return (
    <div className="footer-inner-top-newsletter">
      <p className="footer-inner-top-title">
        {t("footer.footer_newsletter.title")}
      </p>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
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
  );
};

export default FooterTopNewsletter;
