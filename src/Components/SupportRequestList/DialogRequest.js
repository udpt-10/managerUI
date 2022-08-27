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
    if(e.target.value === "Approve"){
      newDataState[0].approved = true;
    }
    if(e.target.value === "Don't Approve"){
      newDataState[0].approved = false;
    }
    setDataState(newDataState);
  }

  const changeMoney = (e) => {
    let newDataState = [...dataState];
    newDataState[0].money = e.target.value;
    setDataState(newDataState);
  }

  const changeMoney1 = (e) => {
    let newDataState = [...dataState];
    newDataState[0].approver = e.target.value;
    setDataState(newDataState);
  }

  const changeMoney2 = (e) => {
    let newDataState = [...dataState];
    newDataState[0].directorId = e.target.value;
    setDataState(newDataState);
  }

  const changeMoney3 = (e) => {
    let newDataState = [...dataState];
    newDataState[0].describe = e.target.value;
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
            <div className="col">Department: </div>
            <div className="col">
              <input value={dataState[0].department} readOnly />
            </div>
          </div>

          <div className="row">
            <div className="col">Reason: </div>
            <div className="col">
              <input value={dataState[0].reason} type="text" readOnly/>
            </div>
          </div>



          <div className="row">
            <div className="col"> Approve Date: </div>
            <div className="col">
              <input value={dataState[0].approveDate} type="datetime-local" onChange={changeApproveDate}/>
            </div>
          </div>

          <div className="row">
            <div className="col">Approve Status: </div>
            <div className="col">
              <select id="status" name="Status" onChange={changeStatus}>
                <option value="Approve">Approve</option>
                <option value="Don't Approve">Don't Approve</option>
              </select>
            </div>
          </div>

          

          <div className="row">
            <div className="col">Money: </div>
            <div className="col">
              <input value={dataState[0].money} type="number" onChange={changeMoney}/>
            </div>
          </div>

          <div className="row">
            <div className="col">Approver: </div>
            <div className="col">
              <input value={dataState[0].approver} type="number" onChange={changeMoney1}/>
            </div>
          </div>

          <div className="row">
            <div className="col">Director ID: </div>
            <div className="col">
              <input value={dataState[0].directorId} type="number" onChange={changeMoney2}/>
            </div>
          </div>

          <div className="row">
            <div className="col">Describe: </div>
            <div className="col">
              <input value={dataState[0].describe} type="text" onChange={changeMoney3}/>
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
