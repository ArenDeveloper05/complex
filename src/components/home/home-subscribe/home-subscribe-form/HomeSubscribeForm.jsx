import HomeSubscribeFormInputPrnt from "./home-subscribe-form-input-prnt/HomeSubscribeFormInputPrnt";
import HomeSubscribeFormNote from "./home-subscribe-form-note/HomeSubscribeFormNote";

const HomeSubscribeForm = () => {
  return (
    <div className="subscribe-inner-form">
      <HomeSubscribeFormInputPrnt />

      <HomeSubscribeFormNote />
    </div>
  );
};

export default HomeSubscribeForm;
