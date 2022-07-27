import { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Heading } from "@chakra-ui/react";

const rowData = [
  {
    id: 1,
    Exercise: "Inclined Bench Press",
    "Set * Rep": "4x8-12",
    Weight: 10,
    "Set 1": 5,
    "Set 2": 5,
    "Set 3": 5,
    "Set 4": 5,
    "Set 5": 5,
  },
  {
    id: 2,
    Exercise: "Bench Press",
    "Set * Rep": "4x8-12",
    Weight: 22,
    "Set 1": 5,
    "Set 2": 5,
    "Set 3": 5,
    "Set 4": 5,
    "Set 5": 5,
  },
  {
    id: 3,
    Exercise: "Overhead Press",
    "Set * Rep": "5x5",
    Weight: 11,
    "Set 1": 5,
    "Set 2": 5,
    "Set 3": 5,
    "Set 4": 5,
    "Set 5": 5,
  },
  {
    id: 4,
    Exercise: "Overhead Press",
    "Set * Rep": "4x8-12",
    Weight: 18,
    "Set 1": 5,
    "Set 2": 5,
    "Set 3": 5,
    "Set 4": 5,
    "Set 5": 5,
  },
  {
    id: 5,
    Exercise: "Inclined Dumbbell",
    "Set * Rep": "5x5",
    Weight: 23,
    "Set 1": 5,
    "Set 2": 5,
    "Set 3": 5,
    "Set 4": 5,
    "Set 5": 5,
  },
  {
    id: 6,
    Exercise: "Inclined Bench Press",
    "Set * Rep": "4x8-12",
    Weight: 26,
    "Set 1": 5,
    "Set 2": 5,
    "Set 3": 5,
    "Set 4": 5,
    "Set 5": 5,
  },
  {
    id: 7,
    Exercise: "Inclined Dumbbell",
    "Set * Rep": "4x8-12",
    Weight: 30,
    "Set 1": 5,
    "Set 2": 5,
    "Set 3": 5,
    "Set 4": 5,
    "Set 5": 5,
  },
  {
    id: 8,
    Exercise: "Overhead Press",
    "Set * Rep": "4x8-12",
    Weight: 22,
    "Set 1": 5,
    "Set 2": 5,
    "Set 3": 5,
    "Set 4": 5,
    "Set 5": 5,
  },
  {
    id: 9,
    Exercise: "Inclined Dumbbell",
    "Set * Rep": "4x8-12",
    Weight: 17,
    "Set 1": 5,
    "Set 2": 5,
    "Set 3": 5,
    "Set 4": 5,
    "Set 5": 5,
  },
  {
    id: 10,
    Exercise: "Inclined Dumbbell",
    "Set * Rep": "5x5",
    Weight: 12,
    "Set 1": 5,
    "Set 2": 5,
    "Set 3": 5,
    "Set 4": 5,
    "Set 5": 5,
  },
];

export default function ExerciseTable({ exerciseDay }) {
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
      field: "Exercise",
      flex: 2,
      maxWidth: 180,
    },
    {
      headerName: "Set * Reps",
      field: "Set * Rep",
      flex: 2,
      maxWidth: 100,
    },
    {
      headerName: "Weight (Kg)",
      field: "Weight",
      flex: 2,
      minWidth: 100,
      maxWidth: 110,
    },
    {
      headerName: "Avg Reps 1",
      field: "Set 1",
      flex: 2,
      maxWidth: 120,
    },
    {
      headerName: "Avg Reps 2",
      field: "Set 2",
      flex: 2,
      maxWidth: 120,
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
