import "./BaseModal.scss";

const BaseModal = ({ onClick, children }) => {
  return (
    <div className="base-modal" onClick={onClick}>
      {children}
    </div>
  );
};

export default BaseModal;
