import "./Parallax.scss";

const Parallax = ({ bcg, title, txt, img, side }) => {
  return (
    <div
      className="parallax"
      style={{
        backgroundImage: bcg ? `url(${bcg})` : "",
        justifyContent: side ? "start" : "right",
      }}
    >
      <div className="parallax-img">
        <img src={img || ""} alt="" />
      </div>

      <div className="parallax-desc">
        <h1 className="parallax-desc-title section-title">{title}</h1>
        <p className="parallax-desc-txt">{txt}</p>
      </div>
    </div>
  );
};

export default Parallax;
