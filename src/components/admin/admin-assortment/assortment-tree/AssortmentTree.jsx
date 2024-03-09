import { useState } from "react";
import { MdPlayArrow } from "react-icons/md";

import BaseButton from "../../../common/base-button/BaseButton";

import "./AssortmentTree.scss";

const AssortmentTreeItem = ({ id, title, children, setModalsOpen }) => {
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
      <div className="assortment-tree-list-item-actions">
        <BaseButton
          onClick={() => {
            console.log("edit");
            setModalsOpen((prev) => {
              return {
                ...prev,
                edit: {
                  text: title,
                  id: id,
                  bool: true,
                },
              };
            });
          }}
          iconType={"edit"}
        />
        {hasChildren ? (
          <BaseButton
            onClick={() => {
              console.log("plus");
              setModalsOpen((prev) => {
                return {
                  ...prev,
                  add: {
                    id: id,
                    bool: true,
                  },
                };
              });
            }}
            iconType={"plus"}
          />
        ) : (
          <BaseButton
            onClick={() => {
              console.log("delete");
            }}
            iconType={"delete"}
          />
        )}
      </div>
      {open && hasChildren !== 0 && (
        <AssortmentTree data={children} setModalsOpen={setModalsOpen} />
      )}
    </li>
  );
};

const AssortmentTree = ({ data, setModalsOpen }) => {
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
              setModalsOpen={setModalsOpen}
            />
          );
        })}
    </ul>
  );
};

export default AssortmentTree;
