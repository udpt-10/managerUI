import axios from "axios";

const config = { headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true'
    } };

export const login = (username, password) => {
  const data = { userName: username, password: password };
  const url = "http://localhost:8080/employee/login";
  return axios.post(url, data, config);
};

export const getEmployeeList = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  const url = "http://localhost:8080/employee/all";
  return axios.get(url, config);
};

export const addNewEmployee = (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  const url = "http://localhost:8080/employee/addNewEmployee";
  if (data.sex === "male") {
    data.sex = true;
  }
  if (data.sex === "female") {
    data.sex = false;
  }
  return axios.post(url, data, config);
};

export const editEmployee = (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  delete data[0].id;
  delete data[0].employeeId;
  if (data[0].sex === "Male") {
    data[0].sex = true;
  }
  if (data[0].sex === "Female") {
    data[0].sex = false;
  }

  const url = "http://localhost:8080/employee/editEmployee";
  return axios.post(url, data[0], config);
};

export const getAllOTRequest = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  const url = "http://localhost:8080/OTRequest/all";
  return axios.get(url, config);
};

export const getAllLeaveRequest = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  const url = "http://localhost:8080/LeaveRequest/all";
  return axios.get(url, config);
};

export const editLeaveRequest = (data) => {
    const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      };

    const url ="http://localhost:8080/LeaveRequest/edit";
    delete data[0].id;
    return axios.post(url, data[0], config);
}

export const getAllSupportRequest = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  const url = "http://localhost:8080/SupportRequest/all";
  return axios.get(url, config);
};

export const editSuportRequest = (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  const url = "http://localhost:8080/SupportRequest/edit";
  delete data[0].id;
  return axios.post(url, data[0], config);
};
