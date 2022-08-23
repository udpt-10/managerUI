import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
const NewDialogRequest = (props) => {
  const { open, onSubmitClicked, onCancelClicked } = props;
  return (
    <>
      <Dialog open={open}>
        <DialogTitle>Add New Employee</DialogTitle>
        <DialogContent>
            <div className="row">
                <div className="col label">
                    Name: 
                </div>
                <div className="col input">
                    <input type="text"/>
                </div>
            </div>
            <div className="row">
                <div className="col label">
                    Username: 
                </div>
                <div className="col input">
                    <input type="text"/>
                </div>
            </div>

            <div className="row">
                <div className="col label">
                    Position: 
                </div>
                <div className="col input">
                    <input type="text"/>
                </div>
            </div>


            
            <div className="row">
                <div className="col label">
                    Salary: 
                </div>
                <div className="col input">
                    <input type="number"/>
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
export default NewDialogRequest;
