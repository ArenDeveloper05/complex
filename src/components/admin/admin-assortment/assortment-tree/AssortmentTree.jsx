import { useState } from "react";
import { MdPlayArrow } from "react-icons/md";

import "./AssortmentTree.scss";

const AssortmentTreeItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = children && children.length !== 0;

  return (
    <li
      className="assortment-tree-list-item"
      onClick={(e) => {
        e.stopPropagation();
        if (children.length !== 0) {
          setOpen((prev) => !prev);
        }
      }}
    >
      {hasChildren && (
        <MdPlayArrow
          style={{ transform: `rotate(${open ? "90deg" : "0deg"})` }}
        />
      )}

      {title}
      {open && hasChildren !== 0 && <AssortmentTree data={children} />}
    </li>
  );
};

const AssortmentTree = ({ data }) => {
  return (
    <ul className="assortment-tree-list">
      {data &&
        data.length !== 0 &&
        data.map(({ id, title, children }) => {
          return (
            <AssortmentTreeItem
              id={id}
              key={id}
              title={title}
              children={children}
            />
          );
        })}
    </ul>
  );
};

export default AssortmentTree;
