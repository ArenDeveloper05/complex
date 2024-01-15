import "./HomeOffer.scss";

const HomeOffer = () => {
  return (
    <div className="home-offer">
      <div className="home-offer-desc">
        <p className="home-offer-desc-title">МИССИЯ</p>

        <p className="home-offer-desc-txt">
          Климат – незаметная и неотъемлемая часть жизни человека. Используя
          современные материалы, энергосберегающие и информационные технологии,
          Ballu создает собственную экосистему, в которой человек становится
          главным по климату
        </p>
      </div>

      <div className="home-offer-image">
        <div className="home-offer-image-mainImg">
          <img
            src="https://www.ballu.ru/local/templates/ballu/images/circle-image-4.jpg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeOffer;
