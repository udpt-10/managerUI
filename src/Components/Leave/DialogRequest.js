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
            <div className="col">Name: </div>
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
            <div className="col">Hour: </div>
            <div className="col">
              <input value={dataState[0].hour} readOnly />
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
