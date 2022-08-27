import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from "react-bootstrap/Button";
import "./index.scss";
import DialogRequest from "./DialogRequest";
import { editSuportRequest } from "../APIs";
const columnsDef = [
  { field: "id", headerName: "ID", width: 20, hide: true},
  { field: "employeeId", headerName: "Employee ID", width: 150, editable: false }, //from employeeID = > employeeName
  { field: "date", headerName: "Date", width: 150, editable: false },
  { field: "department", headerName: "Department", width: 150, editable: false },
  { field: "approver", headerName: "Approver", width: 150, editable: true },
  { field: "approveDate", headerName: "Approve Date", width: 150, editable: true },
  { field: "reason", headerName: "Reason", width: 150, editable: false },
  { field: "directorId", headerName: "Director ID", width: 150, editable: true },
  { field: "money", headerName: "Money", width: 150, editable: true },
  { field: "status", headerName: "Status", width: 150, editable: true },
  { field: "describe", headerName: "Describe", width: 150, editable: true },
  { field: "approved", headerName: "Approve Status", width: 150, editable: true },
  // {
  //   field: "reason",
  //   headerName: "Request Reason",
  //   width: 300,
  //   editable: true,
  // },
  // {
  //   field: "approved",
  //   headerName: "Approved",
  //   width: 150,
  //   editable: true,
  // },
  // {
  //   field: "directorName",
  //   headerName: "DirectorName", //id to name
  //   width: 150,
  //   editable: true,
  // },

  // {
  //   field: "money",
  //   headerName: "Money", //id to name
  //   width: 150,
  //   editable: true,
  // },
  // {
  //   field: "describe",
  //   headerName: "Describe", //id to name
  //   width: 150,
  //   editable: true,
  // },
];

const SupportRequestListTable = (props) => {
  const [selectData, setSelecData] = useState();
  const [openDialog, setOpenDialog] = useState(false);

  const {data} = props;
  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) =>
      data.find((row) => row.id === id)
    );
    setSelecData(selectedRowsData);
    setOpenDialog(true);
  };

  const onSubmitClicked = (dataState) => {
    editSuportRequest(dataState);
    setOpenDialog(false);
  };

  const onCancelClicked = () => {
    setOpenDialog(false);
  };

  console.log('data request');
  console.log(data);
  return (
    <>
      <div className="label">Support Request List</div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col searchlabelName">Name: </div>
            <div className="col">
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col searchlabelName">Date: </div>
            <div className="col">
              <input type="datetime-local" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col searchlabelName">Status: </div>
            <div className="col">
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="col btnSearch">
          <Button variant="primary">Search</Button>
        </div>
      </div>
      <div className="row">
        <div className="col Support-table">
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
      </div>
      <DialogRequest
        data={selectData}
        open={openDialog}
        onSubmitClicked={onSubmitClicked}
        onCancelClicked={onCancelClicked}
      />
    </>
  );
};
export default SupportRequestListTable;
