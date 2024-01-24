import { useParallax } from "react-scroll-parallax";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import ContactRegisterForm from "./contact-register-form/ContactRegisterForm";

import "./ContactRegister.scss";

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

  return (
    <div className="contact-register">
      <div className="contact-register-map" ref={parallax.ref}>
        <div className="contact-register-map-links">
          {mapsData &&
            mapsData.map(({ id, title, mapLink, mapCode, zoom }) => {
              return (
                <p
                  key={id}
                  style={{ border: "solid red" }}
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
                >
                  {title}
                </p>
              );
            })}
        </div>

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
      <ContactRegisterForm />
    </div>
  );
};

export default ContactRegister;
