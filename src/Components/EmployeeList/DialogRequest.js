import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
const DialogRequest = (props) => {
  const { open, data, onSubmitClicked, onCancelClicked } = props;
  if (!data) {
    return;
  }
  return (
    <>
      <Dialog open={open} className="dialog-request">
        <DialogTitle>{data[0].name}</DialogTitle>
        <DialogContent>
          <div className="row">
            <div className="col">Name: </div>
            <div className="col">
              <input value={data[0].name} />
            </div>
          </div>
          <div className="row">
            <div className="col">UserName: </div>
            <div className="col">
              <input value={data[0].username} />
            </div>
          </div>
          <div className="row">
            <div className="col">Position: </div>
            <div className="col">
              <input value={data[0].position} />
            </div>
          </div>
          <div className="row">
            <div className="col">Salary: </div>
            <div className="col">
              <input value={data[0].salary} />
            </div>
          </div>
          <div className="row">
            <div className="col">Project: </div>
            <div className="col">
              <select id="projectID">
                <option value="CA">CA</option>
                <option value="React">React</option>
                <option value="Php">Php</option>
                <option value="Java">Java</option>
              </select>
            </div>
          </div>

          <div className="row">
            <button onClick={onSubmitClicked} className="col-btn submit">
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
