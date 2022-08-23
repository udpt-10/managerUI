import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { DataGrid } from "@mui/x-data-grid";
import "./index.scss";
import DialogRequest from "./DialogRequest";
import NewDialogRequest from "./NewDialogRequest";

const columnsDef = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "Name", width: 200, editable: true },
  { field: "username", headerName: "UserName", width: 200, editable: true },
  { field: "position", headerName: "Position", width: 200, editable: true },
  { field: "leaving", headerName: "Leaving", width: 200, editable: true },
  { field: "salary", headerName: "Salary", width: 200, editable: true },
  { field: "project", headerName: "Project", width: 200, editable: true },
];

const rowsDataFake = [
  {
    id: 1,
    name: "Tran Bao Khanh",
    username: "TBKhanh",
    position: "Engineer",
    leaving: 0,
    salary: 100000000,
    project: "CA",
  },
  {
    id: 2,
    name: "Tran Bao Khanh",
    username: "TBKhanh",
    position: "Engineer",
    leaving: 0,
    salary: 100000000,
    project: "CA",
  },
  {
    id: 3,
    name: "Tran Bao Khanh",
    username: "TBKhanh",
    position: "Engineer",
    leaving: 0,
    salary: 100000000,
    project: "CA",
  },
  {
    id: 4,
    name: "Tran Bao Khanh",
    username: "TBKhanh",
    position: "Engineer",
    leaving: 0,
    salary: 100000000,
    project: "CA",
  },
  {
    id: 5,
    name: "Tran Bao Khanh",
    username: "TBKhanh",
    position: "Engineer",
    leaving: 0,
    salary: 100000000,
    project: "CA",
  },
  {
    id: 6,
    name: "Tran Bao Khanh",
    username: "TBKhanh",
    position: "Engineer",
    leaving: 0,
    salary: 100000000,
    project: "CA",
  },
  {
    id: 7,
    name: "Tran Bao Khanh",
    username: "TBKhanh",
    position: "Engineer",
    leaving: 0,
    salary: 100000000,
    project: "CA",
  },
  {
    id: 8,
    name: "Tran Bao Khanh",
    username: "TBKhanh",
    position: "Engineer",
    leaving: 0,
    salary: 100000000,
    project: "CA",
  },
  {
    id: 9,
    name: "Tran Bao Khanh",
    username: "TBKhanh",
    position: "Engineer",
    leaving: 0,
    salary: 100000000,
    project: "CA",
  },
  {
    id: 10,
    name: "Tran Bao Khanh",
    username: "TBKhanh",
    position: "Engineer",
    leaving: 0,
    salary: 100000000,
    project: "CA",
  },
];

const EmployeeListTable = () => {
  const [selectData, setSelecData] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogNewRequest, setOpenDialogNewRequest] = useState(false);

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
    setOpenDialogNewRequest(false);
  };

  const onCancelClicked = () => {
    setOpenDialog(false);
    setOpenDialogNewRequest(false);
  };

  const clickedAddNewRequest = () => {
    setOpenDialogNewRequest(true);
  };
  return (
    <>
      <div className="row">
        <div className="col label">Employee List</div>
        <div className="col iconAdd">
          <PlaylistAddIcon onClick={clickedAddNewRequest} />
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
        onSubmitClicked={onSubmitClicked}
        onCancelClicked={onCancelClicked}
      />
    </>
  );
};

export default EmployeeListTable;
