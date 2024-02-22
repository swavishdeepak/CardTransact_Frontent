import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "no", headerName: "No", width: 90 },
  {
    field: "employees_name",
    headerName: "Employees Name",
    width: 130,
    editable: true,
  },
  {
    field: "sale",
    headerName: "Sale",
    width: 100,
    editable: true,
  },
  {
    field: "company",
    headerName: "Company/Individual",
    type: "number",
    width: 100,
    editable: true,
  },
  {
    field: "success_rate",
    headerName: "Success Rate",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  {
    id: 1,
    employees_name: "Snow",
    sale: "26",
    company: 14,
    success_rate: "12",
  },
  {
    id: 2,
    employees_name: "Lannister",
    sale: "47",
    company: 31,
    success_rate: "12",
  },
  {
    id: 3,
    employees_name: "Lannister",
    sale: "68",
    company: 31,
    success_rate: "12",
  },
  {
    id: 4,
    employees_name: "Stark",
    sale: "78",
    company: 11,
    success_rate: "12",
  },
  {
    id: 5,
    employees_name: "Targaryen",
    sale: "78",
    company: null,
    success_rate: "12",
  },
  {
    id: 6,
    employees_name: "Melisandre",
    sale: null,
    company: 150,
    success_rate: "12",
  },
];

export default function BasicTable() {
  return (
    <Box
    >
      <DataGrid
        sx={{
          height: "100%",
          width: "100%",
          bgcolor: "#FCFAFA",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: 2,
          borderRadius: "6px",
          gap: 1,
        }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
