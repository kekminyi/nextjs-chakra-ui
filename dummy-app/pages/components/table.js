import { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Heading } from "@chakra-ui/react";

export default function ExerciseTable({ exerciseDay, rowData }) {
  const gridRef = useRef();

  const defaultColDef = {
    resizable: true,
    sortable: true,
    editable: true,
  };

  const [columnDefs] = useState([
    { headerName: "ID", field: "id", flex: 2, minWidth: 60, maxWidth: 70 },
    {
      headerName: "Exercise",
      field: "exercise",
      flex: 2,
      maxWidth: 180,
    },
    {
      headerName: "Set * Reps",
      field: "setReps",
      flex: 2,
      maxWidth: 100,
    },
    {
      headerName: "Weight (Kg)",
      field: "weight",
      flex: 2,
      minWidth: 100,
      maxWidth: 110,
    },
    {
      headerName: "Avg Reps 1",
      field: "avgReps1",
      flex: 2,
      maxWidth: 120,
    },
    {
      headerName: "Avg Reps 2",
      field: "avgReps2",
      flex: 1,
    },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ width: "100%" }}>
      <Heading mb={15} fontSize="3xl">
        {exerciseDay}
      </Heading>
      <AgGridReact
        id="staff_grid"
        ref={gridRef}
        defaultColDef={defaultColDef}
        rowData={rowData}
        columnDefs={columnDefs}
        domLayout={"autoHeight"}
      ></AgGridReact>
    </div>
  );
}
