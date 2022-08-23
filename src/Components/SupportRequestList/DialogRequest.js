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
              <input value={data[0].name} readOnly />
            </div>
          </div>
          <div className="row">
            <div className="col">Date: </div>
            <div className="col">
              <input value={data[0].date} readOnly />
            </div>
          </div>

          <div className="row">
            <div className="col">Status: </div>
            <div className="col">
              <select id="status">
                <option value="approve">Approve</option>
                <option value="no_approve">Don't Approve</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col">Reason: </div>
            <div className="col">
              <input value={data[0].request_reason} type="text" />
            </div>
          </div>

          <div className="row">
            <div className="col">Deny: </div>
            <div className="col">
              <input value={data[0].deny_reason} type="text" />
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
