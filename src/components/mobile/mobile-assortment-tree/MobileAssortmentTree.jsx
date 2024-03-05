import "./MobileAssortmentTree.scss";

import { useState } from "react";
import { MdPlayArrow } from "react-icons/md";

const MobileAssortmentTreeItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = children && children.length !== 0;

  return (
    <li
      className="mobile-assortment-tree-list-item"
      style={{ paddingBottom: hasChildren && open ? "0px" : "16px" }}
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
      {open && hasChildren !== 0 && <MobileAssortmentTree data={children} />}
    </li>
  );
};

const MobileAssortmentTree = ({ data }) => {
  return (
    <ul
      className="mobile-assortment-tree-list"
      style={{ paddingBottom: 10 > 8 ? "0" : "16px" }}
    >
      {data &&
        data.length !== 0 &&
        data.map(({ id, title, children }) => {
          return (
            <MobileAssortmentTreeItem
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

export default MobileAssortmentTree;
