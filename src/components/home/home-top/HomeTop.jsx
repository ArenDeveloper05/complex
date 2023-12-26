import { useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

//IMAGES

import product1 from "../../../assets/images/homeTopProduct1.png";
import product2 from "../../../assets/images/homeTopProduct2.png";
import product3 from "../../../assets/images/homeTopProduct3.jpg";
import product4 from "../../../assets/images/homeTopProduct4.png";
import product5 from "../../../assets/images/homeTopProduct5.jpg";

//SCSS
import "./HomeTop.scss";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import HomeTopPartners from "../home-partners/HomePartners";
import Lines from "../../common/lines/Lines";

const HomeTop = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: product1,
      title: "Կոնդենսացիոն գազի կաթսա Immergas VICTRIX TERA 24",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eligendi asperiores totam voluptates temporibus in veniam, facere dolorem obcaecati eos nisi aut, nihil illo maiores nostrum nemo perferendis officiis ipsum!",
    },
    {
      id: 2,
      img: product2,
      title: "Էլ կոնվեկցիոն տաքացուցիչ Ballu Enzo BEC/EZMR-1500",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eligendi asperiores totam voluptates temporibus in veniam, facere dolorem obcaecati eos nisi aut, nihil illo maiores nostrum nemo perferendis officiis ipsum!",
    },
    {
      id: 3,
      img: product4,
      title: "Գազի կաթսա Beretta CIAO S 24 CSI",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eligendi asperiores totam voluptates temporibus in veniam, facere dolorem obcaecati eos nisi aut, nihil illo maiores nostrum nemo perferendis officiis ipsum!",
    },
  ]);

  return (
    <div className="home-top">
      <h1 className="home-top-title">top products</h1>
      <Lines bcg={"green"} />
      <div className="home-top-container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={-50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            900: {
              slidesPerView: 2,
            },
          }}
        >
          {products &&
            products.map(({ id, info, img, title }) => {
              return (
                <SwiperSlide key={id}>
                  <div className="swiper-slide-productsContainer">
                    <h1>{title}</h1>
                    <img src={img} alt="" />
                    <p>{info}</p>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeTop;
