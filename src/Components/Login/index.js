import React, { useEffect, useState } from "react";
import { login } from "../APIs";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import {EmployeeListURL} from "../constans";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(undefined);
  let navigate = useNavigate();
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const checkedLogin = () => {
    login(username, password).then((res) => setData(res));
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    localStorage.setItem("data", JSON.stringify(data));
    navigate(EmployeeListURL, {replace: true});
  }, [data]);
  return (
    <div id="pageLogin">
      <div id="logindetail">
        <h2>Welcome Manager</h2>
        <fieldset>
          <ul>
            <li>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                required
                onChange={handleUsername}
              />
            </li>
            <li>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                required
                onChange={handlePassword}
              />
            </li>
          </ul>
        </fieldset>
        <button onClick={checkedLogin}>Login</button>
      </div>
    </div>
  );
};
export default Login;
