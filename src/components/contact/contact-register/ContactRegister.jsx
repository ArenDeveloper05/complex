import { useParallax } from "react-scroll-parallax";
import { useState } from "react";
import { useSelector } from "react-redux";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import ContactRegisterForm from "./contact-register-form/ContactRegisterForm";

import "./ContactRegister.scss";

const ContactRegister = () => {
  const [selectedMap, setSelectedMap] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1149.0428190369068!2d44.567120000424936!3d40.18195873732741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcae005e23b3%3A0x2d57c7e8a020e1ec!2zNTAgR2Fsc2hveWFuIFN0LCDUtdaA1ofVodW2IDAwNzk!5e0!3m2!1shy!2sam!4v1705407984403!5m2!1shy!2sam"
  );
  const mapsData = useSelector((state) => state.contact.mapsData);

  const parallax = useParallax({
    speed: -10,
  });

  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };

  return (
    <div className="contact-register">
      <div className="contact-register-map" ref={parallax.ref}>
        <div className="contact-register-map-links">
          {mapsData &&
            mapsData.map(({ id, title, mapLink }) => {
              return (
                <p
                  key={id}
                  onClick={() => {
                    if (mapLink !== selectedMap) {
                      setSelectedMap(mapLink);
                    }
                  }}
                >
                  {title}
                </p>
              );
            })}
        </div>

        <div className="contact-register-map-parent">
          <YMaps>
            <Map defaultState={defaultState}>
              <Placemark geometry={[55.684758, 37.738521]} />
              <Placemark geometry={[50.684758, 37.738521]} />
            </Map>
          </YMaps>
          {/* <iframe
            src={selectedMap}
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe> */}
        </div>
      </div>
      <ContactRegisterForm />
    </div>
  );
};

export default ContactRegister;
