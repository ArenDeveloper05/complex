import { useParallax } from "react-scroll-parallax";
import { useSelector } from "react-redux";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import React, { useState } from "react";

import "./ContactRegister.scss";
import ContactRegisterForm from "./contact-register-form/ContactRegisterForm";

import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Button, TextField } from "@mui/material";

const inputStyles = {
  width: "100%",
  backgroundColor: "#f4f5f8",
  border: "none",
  outline: "none",
};

const ContactRegister = () => {
  // 1
  // const [zoom, setZoom] = React.useState(9);
  // const [center, setCenter] = useState([55.75, 37.57]);
  // 1

  // const mapState = React.useMemo(() => ({ center, zoom }), [zoom]); 1

  // 2
  const [same, setSame] = useState({
    zoom: 8,
    center: [40.179826, 44.513358],
  });

  const mapState = React.useMemo(
    () => ({ center: same.center, zoom: same.zoom }),
    [same]
  );
  // 2

  const mapsData = useSelector((state) => state.contact.mapsData);

  const parallax = useParallax({
    speed: -10,
  });

  const registerSchema = Yup.object().shape({
    name: Yup.string().required(),
    surname: Yup.string().required(),
    email: Yup.string().email().required(),
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
              <Placemark geometry={[40.179826, 44.513358]} />
              <Placemark geometry={[55.730357, 37.619115]} />
              <Placemark geometry={[38.853314, -77.052702]} />
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
                  <a
                    href={`tel:${phone}`}
                    className="contact-register-address-links-link-phone"
                  >
                    +374 {phone}
                  </a>

                  <button
                    onClick={() => {
                      // setCenter(mapCode); 1
                      // setZoom(zoom); 1

                      // 2
                      setSame({
                        zoom: zoom,
                        center: mapCode,
                      });
                      // 2
                    }}
                    className="contact-register-address-links-link-btn"
                  >
                    <span className="contact-register-address-links-link-btn-box">
                      {title}
                    </span>
                  </button>
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
            }}
            validationSchema={registerSchema}
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
