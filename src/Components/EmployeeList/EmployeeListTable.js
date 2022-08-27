import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { DataGrid } from "@mui/x-data-grid";
import "./index.scss";
import DialogRequest from "./DialogRequest";
import NewDialogRequest from "./NewDialogRequest";
import Button from 'react-bootstrap/Button';
import { addNewEmployee, editEmployee } from "../APIs";

const columnsDef = [
  { field: "id", headerName: "STT", width: 50, hide: true},
  { field: "employeeName", headerName: "Name", width: 200, editable: true },
  { field: "userName", headerName: "UserName", width: 200, editable: true },
  { field: "position", headerName: "Position", width: 200, editable: true },
  { field: "email", headerName: "Email", width: 200, editable: true },
  { field: "salary", headerName: "Salary", width: 200, editable: true },
  { field: "sex", headerName: "Sex", width: 200, editable: true },
  { field: "leavingDayBalance", headerName: "Leaving Days", width: 200, editable: true },
  { field: "dateOfBirth", headerName: "Birth Days", width: 200, editable: true },
];



const EmployeeListTable = (props) => {
  const [selectData, setSelecData] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogNewRequest, setOpenDialogNewRequest] = useState(false);

  const {data} = props;
  console.log(data);
  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) =>
    data.find((row) => row.id === id)
    );
    setSelecData(selectedRowsData);
    setOpenDialog(true);
    console.log(selectedRowsData);
  };

  const onSubmitClicked = (data) => {
    console.log('data employeelist');
    editEmployee(data);
    console.log(data);
    setOpenDialog(false);
    setOpenDialogNewRequest(false);
  };

  const onCancelClicked = () => {
    setOpenDialog(false);
    setOpenDialogNewRequest(false);
  };

  const clickedAddNewRequest = () => {
    setOpenDialogNewRequest(true);
  };

  const onAddNewSubmitClicked = (data) => {
    addNewEmployee(data);
    console.log('add new Data');
    console.log(data);
    setOpenDialog(false);
    setOpenDialogNewRequest(false);
  }
  return (
    <>
      <div className="label">Employee List</div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col searchlabelName">Name: </div>
            <div className="col">
              <input type="text"/>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col searchlabelName">Position: </div>
            <div className="col">
              <input type="text"/>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col searchlabelName">Project: </div>
            <div className="col">
              <input type="text"/>
            </div>
          </div>
        </div>
        <div className="col btnSearch">
          <Button variant="primary">Search</Button>
        </div>
        <div className="col iconAdd">
          <PlaylistAddIcon onClick={clickedAddNewRequest} />
        </div>
      </div>

      <div className="Employee-Table">
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={data}
            columns={columnsDef}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick={false}
            experimentalFeatures={{ newEditingApi: true }}
            onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
          />
        </Box>
      </div>
      <DialogRequest
        data={selectData}
        open={openDialog}
        onSubmitClicked={onSubmitClicked}
        onCancelClicked={onCancelClicked}
      />

      <NewDialogRequest
        open={openDialogNewRequest}
        onAddNewSubmitClicked={onAddNewSubmitClicked}
        onCancelClicked={onCancelClicked}
      />
    </>
  );
};

export default EmployeeListTable;
