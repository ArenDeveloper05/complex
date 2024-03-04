import "./NavTree.scss";

const NavTree = ({ data }) => {
  return (
    <ul className="tree-list">
      {data &&
        data.length !== 0 &&
        data.map(({ id, title, children }) => {
          return (
            <li key={id} className="tree-list-item nested">
              {title}
              {children && children.length !== 0 && <NavTree data={children} />}
            </li>
          );
        })}
    </ul>
  );
};

export default NavTree;
