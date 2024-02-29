import "./NavTree.scss";

const NavTree = ({ data }) => {
  return (
    <ul className="tree-list">
      {data &&
        data.map(({ id, title, children }) => {
          return (
            <li key={id} className="tree-list-item nested">
              {title}
              {children.length !== 0 && <NavTree data={children} />}
            </li>
          );
        })}
    </ul>
  );
};

export default NavTree;
