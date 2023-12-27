import "./Parallax.scss";

const Parallax = ({ bcg, title, txt }) => {
  return (
    <div
      className="parallax"
      style={{ backgroundImage: bcg ? `url(${bcg})` : "" }}
    >
      <p className="parallax-title">{title}</p>

      <div className="parallax-desc">
        <p className="parallax-desc-txt">{txt}</p>
      </div>
    </div>
  );
};

export default Parallax;
