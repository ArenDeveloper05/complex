import "./Admin.scss";

import { useState } from "react";
import { adminConfig } from "./adminConfig";

const Admin = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="admin">
      <div className="admin-aside">
        {adminConfig &&
          adminConfig.map(({ id, title }) => {
            return (
              <div
                key={id}
                className="admin-aside-item"
                onClick={() => {
                  if (id !== active) {
                    setActive(id);
                  }
                }}
              >
                {title}
              </div>
            );
          })}
      </div>

      <div className="admin-content">{adminConfig[active - 1].component}</div>
    </div>
  );
};

export default Admin;
