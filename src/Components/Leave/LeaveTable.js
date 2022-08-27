import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from "react-bootstrap/Button";
import DialogRequest from "./DialogRequest";
import { editLeaveRequest } from "../APIs";
const columnsDef = [
  { field: "id", headerName: "ID", width: 50, hide: true},
  { field: "employeeName", headerName: "Name", width: 200, editable: true },
  { field: "date", headerName: "Date", width: 200, editable: true },
  {
    field: "approveDate",
    headerName: "Approve Date",
    width: 200,
    editable: true,
  },
  { field: "hour", headerName: "Hour", width: 200, editable: true },
  { field: "isApproved", headerName: "Status", width: 200, editable: true },
  {
    field: "reason",
    headerName: "Request Reason",
    width: 200,
    editable: true,
  },
  {
    field: "approveReason",
    headerName: "Deny Reason",
    width: 200,
    editable: true,
  },
];

const LeaveTable = (props) => {
  const [selectData, setSelecData] = useState();
  const [openDialog, setOpenDialog] = useState(false);

  const { data } = props;
  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) => data.find((row) => row.id === id));
    setSelecData(selectedRowsData);
    setOpenDialog(true);
    console.log(selectedRowsData);
  };

  const onSubmitClicked = (dataState) => {
    console.log(dataState);
    editLeaveRequest(dataState);
    setOpenDialog(false);
  };

  const onCancelClicked = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <div className="label">Leave</div>
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
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col searchlabelName">Period: </div>
            <div className="col">
              <input type="text" />
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
      <div className="Leave-table">
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
    </>
  );
};

export default LeaveTable;
