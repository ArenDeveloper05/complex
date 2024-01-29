import { useParallax } from "react-scroll-parallax";
import { useSelector } from "react-redux";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useMemo, useState } from "react";

import "./ContactRegister.scss";

import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { Button, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

const inputStyles = {
  width: "100%",
};

const ContactRegister = () => {
  const [same, setSame] = useState({
    zoom: 12,
    center: [40.179826, 44.513358],
  });

  const mapState = useMemo(
    () => ({ center: same.center, zoom: same.zoom }),
    [same]
  );

  const mapsData = useSelector((state) => state.contact.mapsData);

  const parallax = useParallax({
    speed: -10,
  });

  const { t } = useTranslation();

  const messageSchema = Yup.object().shape({
    name: Yup.string().required(t("validations.required")),
    surname: Yup.string().required(t("validations.required")),
    email: Yup.string().email().required(t("validations.required")),
  });

  return (
    <div className="contact-register">
      <div className="contact-register-map" ref={parallax.ref}>
        <div className="contact-register-map-parent">
          <YMaps className="contact-register-map-parent-ymaps">
            <Map
              state={mapState}
              className="contact-register-map-parent-ymaps-map"
            >
              {mapsData &&
                mapsData.map(({ id, mapCode }) => {
                  return <Placemark geometry={mapCode} key={id} />;
                })}
            </Map>
          </YMaps>
        </div>
      </div>
      {/* <ContactRegisterForm /> */}
      <div className="contact-register-address">
        <div className="contact-register-address-links">
          {mapsData &&
            mapsData.map(({ id, title, mapCode, zoom, phone }) => {
              return (
                <div className="contact-register-address-links-link" key={id}>
                  <button
                    onClick={() => {
                      setSame({
                        zoom: zoom,
                        center: mapCode,
                      });
                    }}
                    className="contact-register-address-links-link-btn"
                  >
                    <span className="contact-register-address-links-link-btn-box">
                      {title}
                    </span>
                  </button>
                  <a
                    href={`tel:${phone}`}
                    className="contact-register-address-links-link-phone"
                  >
                    +374 {phone}
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
              email: "",
              file: null,
            }}
            validationSchema={messageSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, values, handleChange, handleBlur }) => {
              return (
                <Form>
                  <div className="contact-register-message-input-prnt">
                    <TextField
                      name="name"
                      label="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={inputStyles}
                    />
                    {errors.name ? <p>{errors.name}</p> : null}
                  </div>

                  <div className="contact-register-message-input-prnt">
                    <TextField
                      name="surname"
                      label="surname"
                      value={values.surname}
                      onChange={handleChange}
                      sx={inputStyles}
                    />

                    {errors.surname ? <p>{errors.surname}</p> : null}
                  </div>

                  <div className="contact-register-message-input-prnt">
                    <TextField
                      name="email"
                      label="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={inputStyles}
                    />

                    {errors.email ? <p>{errors.email}</p> : null}
                  </div>

                  <div className="contact-register-message-input-prnt">
                    <Field
                      name="file"
                      type="file"
                      value={values.file}
                      onChange={handleChange}
                    />
                    {errors.file ? <p>{errors.file}</p> : null}
                  </div>

                  <Button
                    type="submit"
                    variant="outlined"
                    className="contact-register-message-btn"
                  >
                    send
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactRegister;
