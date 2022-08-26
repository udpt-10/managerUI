import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from "react-bootstrap/Button";
import DialogRequest from "./DialogRequest";
const columnsDef = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "Name", width: 200, editable: true },
  { field: "date", headerName: "Date", width: 200, editable: true },
  { field: "period", headerName: "Period", width: 200, editable: true },
  { field: "status", headerName: "Status", width: 200, editable: true },
  {
    field: "request_reason",
    headerName: "Request Reason",
    width: 200,
    editable: true,
  },
  {
    field: "deny_reason",
    headerName: "Deny Reason",
    width: 200,
    editable: true,
  },
];

const rowsDataFake = [
  {
    id: "1",
    name: "Tran Bao Khanh",
    date: "07/30/2022",
    period: "3d",
    status: "sent",
    request_reason: "Khanh dep trai",
    deny_reason: "Null",
  },
  {
    id: "2",
    name: "Tran Bao Khanh",
    date: "07/30/2022",
    period: "3d",
    status: "sent",
    request_reason: "Khanh dep trai",
    deny_reason: "Null",
  },
  {
    id: "3",
    name: "Tran Bao Khanh",
    date: "07/30/2022",
    period: "3d",
    status: "sent",
    request_reason: "Khanh dep trai",
    deny_reason: "Null",
  },
  {
    id: "4",
    name: "Tran Bao Khanh",
    date: "07/30/2022",
    period: "3d",
    status: "sent",
    request_reason: "Khanh dep trai",
    deny_reason: "Null",
  },
  {
    id: "5",
    name: "Tran Bao Khanh",
    date: "07/30/2022",
    period: "3d",
    status: "sent",
    request_reason: "Khanh dep trai",
    deny_reason: "Null",
  },
  {
    id: "6",
    name: "Tran Bao Khanh",
    date: "07/30/2022",
    period: "3d",
    status: "sent",
    request_reason: "Khanh dep trai",
    deny_reason: "Null",
  },
  {
    id: "7",
    name: "Tran Bao Khanh",
    date: "07/30/2022",
    period: "3d",
    status: "sent",
    request_reason: "Khanh dep trai",
    deny_reason: "Null",
  },
];
const LeaveTable = (props) => {
  const [selectData, setSelecData] = useState();
  const [openDialog, setOpenDialog] = useState(false);

  const {data} = props;
  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) =>
    data.find((row) => row.id === id)
    );
    setSelecData(selectedRowsData);
    setOpenDialog(true);
    console.log(selectedRowsData);
  };

  const onSubmitClicked = () => {
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
            rows={rowsDataFake}
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
