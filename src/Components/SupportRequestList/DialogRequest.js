import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
const DialogRequest = (props) => {
  const { open, data, onSubmitClicked, onCancelClicked } = props;
  console.log(onSubmitClicked);
  console.log(open);
  const [dataState, setDataState] = useState();
  useEffect(() => {
    if(dataState){
      return;
    }
    setDataState(data);
  }, [data]);



  console.log(data);

  const changeApproveDate = (e) => {
    let newDataState = [...dataState];
    newDataState[0].approveDate = e.target.value;
    setDataState(newDataState);
  }


  const changeStatus = (e) => {
    let newDataState = [...dataState];
    newDataState[0].status = e.target.value;
    if(e.target.value === "approve"){
      newDataState[0].approved = true;
    }
    if(e.target.value === "no_approve"){
      newDataState[0].approved = false;
    }
    setDataState(newDataState);
  }

  const changeMoney = (e) => {
    let newDataState = [...dataState];
    newDataState[0].money = e.target.value;
    setDataState(newDataState);
  }
  
  if (!dataState) {
    return;
  }
  //change id to name
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
            <div className="col"> Approve Date: </div>
            <div className="col">
              <input value={dataState[0].approveDate} type="datetime-local" onChange={changeApproveDate}/>
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
            <div className="col">Money: </div>
            <div className="col">
              <input value={dataState[0].money} type="number" onChange={changeMoney}/>
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
