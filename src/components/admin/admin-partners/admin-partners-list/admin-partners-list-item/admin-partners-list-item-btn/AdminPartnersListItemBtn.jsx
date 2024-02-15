import "./AdminPartnersListItemBtn.scss";

const AdminPartnersListItemBtn = ({ txt, onClickFunction }) => {
  return (
    <button
      className="btn"
      onClick={() => {
        onClickFunction && onClickFunction();
      }}
    >
      <p>{txt}</p>
    </button>
  );
};

export default AdminPartnersListItemBtn;
