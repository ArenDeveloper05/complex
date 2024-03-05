import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const BaseButton = ({ iconType, onClick }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {iconType === "plus" ? (
        <FaPlus />
      ) : iconType === "delete" ? (
        <MdDelete />
      ) : iconType === "edit" ? (
        <FaEdit />
      ) : (
        ""
      )}
    </button>
  );
};

export default BaseButton;
