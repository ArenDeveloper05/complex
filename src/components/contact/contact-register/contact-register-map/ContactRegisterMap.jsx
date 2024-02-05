import { useMemo } from "react";
import { useParallax } from "react-scroll-parallax";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

import logo from "../../../../assets/images/logo.png";

const ContactRegisterMap = ({ mapsData, same }) => {
  const mapState = useMemo(
    () => ({ center: same.center, zoom: same.zoom }),
    [same]
  );

  const parallax = useParallax({
    speed: -10,
  });

  return (
    <div className="contact-register-map" ref={parallax.ref}>
      <div className="contact-register-map-parent">
        <YMaps className="contact-register-map-parent-ymaps">
          <Map
            state={mapState}
            className="contact-register-map-parent-ymaps-map"
          >
            {mapsData &&
              mapsData.map(({ id, mapCode, zoom }) => {
                return (
                  <Placemark
                    geometry={mapCode}
                    key={id}
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: logo,
                      iconImageSize: [110, 60],
                      iconImageOffset: [-17, -41],
                    }}
                  />
                );
              })}
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default ContactRegisterMap;
