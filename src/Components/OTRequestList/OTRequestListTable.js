import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from "react-bootstrap/Button";
import "./index.scss";
const columnsDef = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "Name", width: 300, editable: true },
  { field: "date", headerName: "Date", width: 250, editable: true },
  { field: "project", headerName: "Project", width: 250, editable: true },
];

const rowsDataFake = [
  { id: 1, name: "Tran Bao Khanh", date: "07/30/2022", project: "CA" },
  { id: 2, name: "Tran Bao Khanh", date: "07/30/2022", project: "CA" },
  { id: 3, name: "Tran Bao Khanh", date: "07/30/2022", project: "CA" },
];
const OTRequestListTable = () => {
  return (
    <>
      <div className="label">OT Request List</div>
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
            <div className="col searchlabelName">Position: </div>
            <div className="col">
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col searchlabelName">Project: </div>
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
            />
          </Box>
        </div>

        <div className="col OT-chart"></div>
      </div>
    </>
  );
};

export default OTRequestListTable;
