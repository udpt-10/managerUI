import React, {useState} from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
const NewDialogRequest = (props) => {
  const { open, onAddNewSubmitClicked, onCancelClicked } = props;
  
  const [data, setData] = useState({
    employeeName: "",
    userName: "",
    password: "",
    position: "manager",
    email: "",
    sex: "male",
    leavingDayBalance: 0,
    dateOfBirth: "",
    phone: "",
    informationSummary: "",
    director: 1,
    manager: 1
  });

  const changeName = (e) => {
    let newData = {...data};
    newData.employeeName = e.target.value;
    setData(newData);
  }

  const changeUserName = (e) => {
    let newData = {...data};
    newData.userName = e.target.value;
    setData(newData);
  }

  const changePosition = (e) => {
    let newData = {...data};
    newData.position = e.target.value;
    setData(newData);
  }

  const changeEmail = (e) => {
    let newData = {...data};
    newData.email = e.target.value;
    setData(newData);
  }

  const changeSex = (e) => {
    let newData = {...data};
    newData.sex = e.target.value;
    setData(newData);
  }

  const changeLeavingDays = (e) => {
    let newData = {...data};
    newData.leavingDayBalance = e.target.value;
    setData(newData);
  }

  const changeBirthday = (e) => {
    let newData = {...data};
    newData.dateOfBirth = e.target.value;
    setData(newData);
  }

  const changePhone = (e) => {
    let newData = {...data};
    newData.phone = e.target.value;
    setData(newData);
  }

  const changePassword = (e) => {
    let newData = {...data};
    newData.password = e.target.value;
    setData(newData);
  }
  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Add New Employee</DialogTitle>
        <DialogContent>
          <div className="row">
            <div className="col label">Name:</div>
            <div className="col input">
              <input type="text" onChange={changeName}/>
            </div>
          </div>
          <div className="row">
            <div className="col label">Username:</div>
            <div className="col input">
              <input type="text" onChange={changeUserName}/>
            </div>
          </div>
          <div className="row">
            <div className="col label">Password:</div>
            <div className="col input">
              <input type="password" onChange={changePassword}/>
            </div>
          </div>
          <div className="row">
            <div className="col label">Position:</div>
            <div className="col input">
              <select id="position" name="Position" onChange={changePosition}>
                <option value="engineer">Engineer</option>
                <option value="manager">Manager</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col label">Email:</div>
            <div className="col input">
              <input type="text" onChange={changeEmail}/>
            </div>
          </div>
          <div className="row">
            <div className="col label">Phone:</div>
            <div className="col input">
              <input type="text" onChange={changePhone}/>
            </div>
          </div>

          <div className="row">
            <div className="col label">Salary:</div>
            <div className="col input">
              <input type="number" />
            </div>
          </div>

          <div className="row">
            <div className="col label">Sex:</div>
            <div className="col input">
              <select id="sex" name="Sex" onChange={changeSex}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col label">Leaving Day:</div>
            <div className="col input">
              <input type="number" onChange={changeLeavingDays}/>
            </div>
          </div>
          <div className="row">
            <div className="col label">Birth Day:</div>
            <div className="col input">
              <input type="datetime-local" onChange={changeBirthday}/>
            </div>
          </div>

          <div className="row">
            <button onClick={()=> onAddNewSubmitClicked(data)} className="col-btn submit">
              Submit
            </button>
            <button onClick={onCancelClicked} className="col-btn cancel">
              Cancel
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default NewDialogRequest;
