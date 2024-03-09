import { useState, useRef } from "react";
import { CiLock, CiUnlock, CiUser } from "react-icons/ci";

import "./AdminLogin.scss";
import SendButton from "../common/send-button/SendButton";
import { sendAdminValues } from "../../api/api";

const AdminLogin = () => {
  const [loginValues, setLoginValues] = useState({
    login: "",
    password: "",
  });

  const [choose, setChooseIcon] = useState(false);

  const loginInput = useRef(null);
  const passwordInput = useRef(null);

  const handleInputsOnChange = (evt) => {
    setLoginValues((prev) => {
      return {
        ...prev,
        [evt.target.name]: evt.target.value,
      };
    });
  };

  const clearInputVals = () => {
    setLoginValues({
      login: "",
      password: "",
    });
  };

  const sendValues = async () => {
    try {
      const response = await sendAdminValues(loginValues);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  const sendButtonClick = () => {
    if (loginValues.login.trim()) {
      loginInput.current.style.borderBottom = "solid 1px #002421";
    } else {
      loginInput.current.style.borderBottom = "solid 1px red";
    }
    if (loginValues.password.trim()) {
      passwordInput.current.style.borderBottom = "solid 1px #002421";
    } else {
      passwordInput.current.style.borderBottom = "solid 1px red";
    }

    if (loginValues.login.trim() && loginValues.password.trim()) {
      console.log(loginValues);
      sendValues();
      clearInputVals();
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-login-form">
        <p className="admin-login-form-title">Login</p>

        <div className="admin-login-form-prnt">
          <input
            type="text"
            name="login"
            ref={loginInput}
            placeholder="Login"
            value={loginValues.login}
            onChange={handleInputsOnChange}
          />
          <CiUser className="admin-login-form-prnt-icon" />
        </div>

        <div className="admin-login-form-prnt">
          <input
            type={choose ? "text" : "password"}
            name="password"
            ref={passwordInput}
            placeholder="Password"
            value={loginValues.password}
            onChange={handleInputsOnChange}
          />
          {choose ? (
            <CiUnlock
              onClick={() => {
                setChooseIcon((prev) => !prev);
              }}
              className="admin-login-form-prnt-icon"
            />
          ) : (
            <CiLock
              onClick={() => {
                setChooseIcon((prev) => !prev);
              }}
              className="admin-login-form-prnt-icon"
            />
          )}
        </div>

        <SendButton txt="send" click={sendButtonClick} />
      </div>
    </div>
  );
};

export default AdminLogin;
