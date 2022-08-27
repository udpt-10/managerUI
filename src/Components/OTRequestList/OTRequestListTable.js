import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Button from "react-bootstrap/Button";
import "./index.scss";
const columnsDef = [
  { field: "id", headerName: "ID", width: 50, hide: true},

  { field: "employeeName", headerName: "Name", width: 250, editable: true },
  { field: "date", headerName: "Date", width: 400, editable: true },
  { field: "hour", headerName: "Hour", width: 250, editable: true },
];

const OTRequestListTable = (props) => {
  const { data } = props;

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
              rows={data}
              columns={columnsDef}
              pageSize={5}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick={false}
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>
        </div>
      </div>
    </>
  );
};

export default OTRequestListTable;
