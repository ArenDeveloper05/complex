import Container from "../../common/container/Container";
import "./HomeOffer.scss";
import HomeOfferInner from "./home-offer-inner/HomeOfferInner";

const HomeOffer = () => {
  return (
    <div className="home-offer">
      <Container>
        <HomeOfferInner />
      </Container>
    </div>
  );
};

export default HomeOffer;
