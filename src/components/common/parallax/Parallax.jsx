import "./Parallax.scss";

const Parallax = ({ bcg, title, txt, img }) => {
  return (
    <div
      className="parallax"
      style={{ backgroundImage: bcg ? `url(${bcg})` : "" }}
    >
      <div className="parallax-img">
        <img src={img || ""} alt="" />
      </div>
      <h1 className="parallax-title section-title">{title}</h1>

      <p className="parallax-desc-txt">{txt}</p>
    </div>
  );
};

export default Parallax;
