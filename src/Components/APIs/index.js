import axios from "axios";

export const login = (username, password) => {
  const config = { headers: { "Content-Type": "application/json" } };
  const data = { userName: username, password: password };
  const url = "http://localhost:8001/employee/login";
  return axios.post(url, data, config);
};
