import Container from "../../common/container/Container";
import HomeServicesList from "./home-services-list/HomeServicesList";
import HomeServicesMore from "./home-services-more/HomeServicesMore";
import HomeServicesTitle from "./home-services-title/HomeServicesTitle";

import "./HomeServices.scss";

const HomeServices = () => {
  return (
    <div className="services">
      <Container>
        <div className="services-inner">
          <HomeServicesTitle />

          <HomeServicesList />

          <HomeServicesMore />
        </div>
      </Container>
    </div>
  );
};

export default HomeServices;
