import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
const DialogRequest = (props) => {
  const { open, data, onSubmitClicked, onCancelClicked } = props;
  const [dataState, setDataState] = useState();

  useEffect(() => {
    if(data){
      setDataState(data);
    }
  }, [data]);

// change Name, usename, position, sex, email
  const changeName = (e) => {
    let newDataState = [...dataState];
    newDataState[0].employeeName = e.target.value;
    setDataState(newDataState);
  }

  const changeUserName = (e) => {
    let newDataState = [...dataState];
    newDataState[0].userName = e.target.value;
    setDataState(newDataState);
  }

  const changePosition = (e) => {
    let newDataState = [...dataState];
    newDataState[0].position = e.target.value;
    setDataState(newDataState);
  }


  const changeSex = (e) => {
    let newDataState = [...dataState];
    newDataState[0].position = e.target.value;
    setDataState(newDataState);
  }

  const changeEmail = (e) => {
    let newDataState = [...dataState];
    newDataState[0].email = e.target.value;
    setDataState(newDataState);
  }


  if (!dataState) {
    return;
  }

  return (
    <>
      <Dialog open={open} className="dialog-request">
        <DialogTitle>{dataState[0].employeeName}</DialogTitle>
        <DialogContent>
          <div className="row">
            <div className="col">Name: </div>
            <div className="col">
              <input value={dataState[0].employeeName} onChange={changeName} type="text"/>
            </div>
          </div>
          <div className="row">
            <div className="col">UserName: </div>
            <div className="col">
              <input value={dataState[0].userName} onChange={changeUserName} type="text"/>
            </div>
          </div>
          <div className="row">
            <div className="col">Position: </div>
            <div className="col">
              <input value={dataState[0].position} onChange={changePosition} type="text"/>
            </div>
          </div>
          <div className="row">
            <div className="col">Salary: </div>
            <div className="col">
              <input value={dataState[0].salary} />
            </div>
          </div>

          <div className="row">
            <div className="col">Sex: </div>
            <div className="col">
              <input value={dataState[0].sex} onChange={changeSex} type="text"/>
            </div>
          </div>


          <div className="row">
            <div className="col">Email: </div>
            <div className="col">
              <input value={dataState[0].email} onChange={changeEmail} type="text"/>
            </div>
          </div>
          <div className="row">
            <button onClick={()=> onSubmitClicked(dataState)} className="col-btn submit">
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

export default DialogRequest;
