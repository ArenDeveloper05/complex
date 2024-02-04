import img from "../../../../../assets/images/home-offer-img.jpg";
import rotateImg from "../../../../../assets/images/rotate-img.png";
import rotateImg1 from "../../../../../assets/images/Снимок экрана от 2024-01-29 17-56-29.png";
import rotateImg2 from "../../../../../assets/images/rotate-img-2.png";

const HomeOfferInnerImage = () => {
  return (
    <div className="home-offer-inner-image">
      <img src={img} alt="img" className="home-offer-inner-image-mainImg-img" />
      {/* <div className="home-offer-inner-image-mainImg">
        <img
          src={img}
          alt="img"
          className="home-offer-inner-image-mainImg-img"
        />
        <img
          src={rotateImg1}
          alt=""
          className="home-offer-inner-image-mainImg-rotateImg"
        />
        <img
          src={rotateImg2}
          alt=""
          className="home-offer-inner-image-mainImg-secondRotateImg"
        />
      </div> */}
    </div>
  );
};

export default HomeOfferInnerImage;
