import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from "react-bootstrap/Button";
import "./index.scss";
import DialogRequest from "./DialogRequest";
const columnsDef = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "Name", width: 300, editable: true },
  { field: "date", headerName: "Date", width: 300, editable: true },
  { field: "status", headerName: "Status", width: 300, editable: true },
  {
    field: "request_reason",
    headerName: "Request Reason",
    width: 300,
    editable: true,
  },
  {
    field: "deny_reason",
    headerName: "Deny Reason",
    width: 300,
    editable: true,
  },
];

const rowsDataFake = [
  {
    id: 1,
    name: "Tran Bao Khanh",
    date: "07/30/2022",
    status: "dont approve",
    request_reason: "khanh dep trai",
    deny_reason: "khanh dep trai qua",
  },
  {
    id: 2,
    name: "Tran Bao Khanh",
    date: "07/30/2022",
    status: "dont approve",
    request_reason: "khanh dep trai",
    deny_reason: "khanh dep trai qua",
  },
  {
    id: 3,
    name: "Tran Bao Khanh",
    date: "07/30/2022",
    status: "dont approve",
    request_reason: "khanh dep trai",
    deny_reason: "khanh dep trai qua",
  },
  {
    id: 4,
    name: "Tran Bao Khanh",
    date: "07/30/2022",
    status: "dont approve",
    request_reason: "khanh dep trai",
    deny_reason: "khanh dep trai qua",
  },
  {
    id: 5,
    name: "Tran Bao Khanh",
    date: "07/30/2022",
    status: "dont approve",
    request_reason: "khanh dep trai",
    deny_reason: "khanh dep trai qua",
  },
  {
    id: 6,
    name: "Tran Bao Khanh",
    date: "07/30/2022",
    status: "dont approve",
    request_reason: "khanh dep trai",
    deny_reason: "khanh dep trai qua",
  },
  {
    id: 7,
    name: "Tran Bao Khanh",
    date: "07/30/2022",
    status: "dont approve",
    request_reason: "khanh dep trai",
    deny_reason: "khanh dep trai qua",
  },
];

const SupportRequestListTable = () => {
  const [selectData, setSelecData] = useState();
  const [openDialog, setOpenDialog] = useState(false);

  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) =>
      rowsDataFake.find((row) => row.id === id)
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
        <div className="col OT-table">
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
