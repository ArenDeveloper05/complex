import Container from "../../common/container/Container";
import "./HomeSubscribe.scss";
import HomeSubscribeForm from "./home-subscribe-form/HomeSubscribeForm";
import HomeSubscribeTitle from "./home-subscribe-title/HomeSubscribeTitle";

const HomeSubscribe = () => {
  return (
    <div className="subscribe">
      <Container>
        <div className="subscribe-inner">
          <HomeSubscribeTitle />

          <HomeSubscribeForm />
        </div>
      </Container>
    </div>
  );
};

export default HomeSubscribe;
