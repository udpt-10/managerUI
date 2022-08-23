import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "./index.scss";
import Button from "react-bootstrap/Button";

const columnsDef = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "Name", width: 200, editable: true },
  { field: "date", headerName: "Date", width: 200, editable: true },
  { field: "checkin", headerName: "CheckIn", width: 200, editable: true },
  { field: "checkout", headerName: "checkout", width: 200, editable: true },
  { field: "total", headerName: "Total", width: 200, editable: true },
];

const rowsDataFake = [
  {
    id: 1,
    name: "Tran Bao Khanh",
    date: "07/30/2022",
    checkin: "12:00",
    checkout: "17:45",
    total: "4.25h",
  },
  {
    id: 2,
    name: "Tran Bao Khanh",
    date: "07/30/2022",
    checkin: "12:00",
    checkout: "17:45",
    total: "4.25h",
  },
  {
    id: 3,
    name: "Tran Bao Khanh",
    date: "07/30/2022",
    checkin: "12:00",
    checkout: "17:45",
    total: "4.25h",
  },
  {
    id: 4,
    name: "Tran Bao Khanh",
    date: "07/30/2022",
    checkin: "12:00",
    checkout: "17:45",
    total: "4.25h",
  },
  {
    id: 5,
    name: "Tran Bao Khanh",
    date: "07/30/2022",
    checkin: "12:00",
    checkout: "17:45",
    total: "4.25h",
  },
  {
    id: 6,
    name: "Tran Bao Khanh",
    date: "07/30/2022",
    checkin: "12:00",
    checkout: "17:45",
    total: "4.25h",
  },
];
const CheckingListTable = () => {
  return (<>
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
            <div className="col searchlabelName">CheckIn: </div>
            <div className="col">
              <input type="text"/>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col searchlabelName">CheckOut: </div>
            <div className="col">
              <input type="text"/>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col searchlabelName">Date: </div>
            <div className="col">
              <input type="datetime-local"/>
            </div>
          </div>
        </div>
        <div className="col btnSearch">
          <Button variant="primary">Search</Button>
        </div>
      </div>
      <div className="Checking-Table">
        <Box sx={{ height: 360, width: "100%" }}>
          <DataGrid
            rows={rowsDataFake}
            columns={columnsDef}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick={false}
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </div>
  </>);
};
export default CheckingListTable;
