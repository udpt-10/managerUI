import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

const DialogRequest = (props) => {
  const { open, data, onSubmitClicked, onCancelClicked } = props;
  const [dataState, setDataState] = useState();

  useEffect(() => {
    if (dataState) {
      return;
    }
    setDataState(data);
  }, [data]);

  const changeMoney = (e) => {
    let newDataState = [...dataState];
    newDataState[0].managerId = e.target.value;
    setDataState(newDataState);
  }

  const changeMoney1 = (e) => {
    let newDataState = [...dataState];
    newDataState[0].note = e.target.value;
    setDataState(newDataState);
  }


  

  if (!dataState) {
    return;
  }
  const changeStatus = (e) => {
    let newDataState = [...dataState];
    if(e.target.value === "approve"){
      newDataState[0].isApproved = 1;
    }
    if(e.target.value === "no_approve"){
      newDataState[0].isApproved = 1;
    }
    setDataState(newDataState);
  }


  const changeApproveReason =(e) =>{
    let newDataState = [...dataState];
    newDataState[0].approveReason = e.target.value;
    setDataState(newDataState);
  }

  const changeApproveDate = (e) =>{
    let newDataState = [...dataState];
    newDataState[0].approveDate = e.target.value;
    setDataState(newDataState);
  }
  return (
    <>
      <Dialog open={open} className="dialog-request">
        <DialogTitle>{dataState[0].employeeId}</DialogTitle>
        <DialogContent>
          <div className="row">
            <div className="col">Employee ID: </div>
            <div className="col">
              <input value={dataState[0].employeeId} readOnly />
            </div>
          </div>
          <div className="row">
            <div className="col">Date: </div>
            <div className="col">
              <input value={dataState[0].date} readOnly />
            </div>
          </div>
          <div className="row">
            <div className="col">Approve Date: </div>
            <div className="col">
              <input  type="datetime-local" onChange={changeApproveDate} />
            </div>
          </div>
          <div className="row">
            <div className="col">Leaving Type: </div>
            <div className="col">
              <input value={dataState[0].leavingType} readOnly />
            </div>
          </div>
          <div className="row">
            <div className="col">Number of Days: </div>
            <div className="col">
              <input value={dataState[0].numberDays} readOnly />
            </div>
          </div>
          <div className="row">
            <div className="col">Manager ID: </div>
            <div className="col">
              <input value={dataState[0].managerId} type="number" onChange={changeMoney}/>
            </div>
          </div>
          <div className="row">
            <div className="col">Status: </div>
            <div className="col">
              <select id="status" name="Status" onChange={changeStatus}>
                <option value="approve">Approve</option>
                <option value="no_approve">Don't Approve</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col">Reason: </div>
            <div className="col">
              <input value={dataState[0].reason} type="text" readOnly/>
            </div>
          </div>

          <div className="row">
            <div className="col">Deny Reason: </div>
            <div className="col">
              <input value={dataState[0].approveReason} type="text" onChange={changeApproveReason} />
            </div>
          </div>

          <div className="row">
            <div className="col">Note: </div>
            <div className="col">
              <input value={dataState[0].note} type="text" onChange={changeMoney1}/>
            </div>
          </div>


          <div className="row">
            <button onClick={() => onSubmitClicked(dataState)} className="col-btn submit">
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
