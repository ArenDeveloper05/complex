import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { Button, TextField } from "@mui/material";

import { useTranslation } from "react-i18next";

const inputStyles = {
  width: "100%",
  color: "#002421",
  backgroundColor: "#f4f5f8",
};

const ContactRegisterAddress = ({ same, setSame, mapsData }) => {
  const { t } = useTranslation();

  const messageSchema = Yup.object().shape({
    name: Yup.string().required(t("validations.required")),
    surname: Yup.string().required(t("validations.required")),
    message: Yup.string().required(t("validations.required")),
    email: Yup.string().email().required(t("validations.required")),
  });

  return (
    <div className="contact-register-address">
      <div className="contact-register-address-links">
        {mapsData &&
          mapsData.map(({ id, title, mapCode, zoom, phone }) => {
            return (
              <div className="contact-register-address-links-link" key={id}>
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    if (id !== same.id) {
                      setSame({
                        id: id,
                        zoom: zoom,
                        center: mapCode,
                      });
                    }
                  }}
                  className="contact-register-address-links-link-btn"
                >
                  <FaLocationDot />
                  <span className="contact-register-address-links-link-btn-box">
                    {title}
                  </span>
                </button>
                <a
                  href={`tel:${phone}`}
                  className="contact-register-address-links-link-phone"
                >
                  <BsFillTelephoneInboundFill />
                  <span>+374 {phone}</span>
                </a>
              </div>
            );
          })}
      </div>

      <div className="contact-register-message">
        <Formik
          initialValues={{
            name: "",
            surname: "",
            message: "",
            email: "",
            file: "",
          }}
          validationSchema={messageSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, values, touched, handleChange, handleBlur }) => {
            return (
              <Form>
                <div className="contact-register-message-input-prnt">
                  <TextField
                    name="name"
                    label={t("main.main_contact.message_name_placeholder")}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={inputStyles}
                  />
                  {errors.name && touched.name ? <p>{errors.name}</p> : null}
                </div>

                <div className="contact-register-message-input-prnt">
                  <TextField
                    name="surname"
                    label={t("main.main_contact.message_surname_placeholder")}
                    value={values.surname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={inputStyles}
                  />

                  {errors.surname && touched.surname ? (
                    <p>{errors.surname}</p>
                  ) : null}
                </div>

                <div className="contact-register-message-input-prnt">
                  <TextField
                    name="email"
                    label={t("main.main_contact.message_email_placeholder")}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={inputStyles}
                  />

                  {errors.email && touched.email ? <p>{errors.email}</p> : null}
                </div>
                <div className="contact-register-message-input-prnt">
                  <TextField
                    name="message"
                    label={t("main.main_contact.message_message_placeholder")}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={inputStyles}
                  />

                  {errors.message && touched.message ? (
                    <p>{errors.message}</p>
                  ) : null}
                </div>

                <div className="contact-register-message-input-prnt">
                  <Field
                    name="file"
                    label="barev"
                    type="file"
                    value={values.file}
                    onChange={handleChange}
                  />
                  {errors.file && touched.file ? <p>{errors.file}</p> : null}
                </div>

                <Button
                  type="submit"
                  variant="outlined"
                  className="contact-register-message-btn"
                >
                  {t("main.main_contact.message_btn")}
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default ContactRegisterAddress;
