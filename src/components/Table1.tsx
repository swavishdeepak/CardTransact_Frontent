import { Typography } from "@mui/material";
import { GridToolbarContainer, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { CustomBox } from "./MyCustom/CustomBox";
import { LoadButton } from "./LoadButton";
import { Grid } from "@mui/material";
import { Colors } from "../utils/Colors";
import CustomDatePickerInput from "./CustomDatePickerInput";
import BasicSelect from "./BasicSelect";
import CustomButton from "./CustomButton";
import { Box } from "@mui/material";

interface Column {
  field: string;
  headerName: string;
}

interface Row {
  id: string | number;
  [key: string]: any;
}

interface BasicTableProps {
  columns?: Column[];
  rows?: Row[];
  children?: React.ReactNode;
  customBotton?: React.ReactNode;
  pageSize?: number;
  sx?: object;
  title?: string;
  exportHide?: boolean;
  customButtons?: React.ReactNode;
  getRowId?: (row: Row) => string | number;
  includeSlots?: boolean;
  includesPagination?: boolean;
}

const Table1: React.FC<BasicTableProps> = ({
  columns = [],
  rows = [],
  pageSize,
  children,
  sx,
  title,
  exportHide,
  customButtons,
  getRowId,
  customBotton,
  includeSlots = true,
  includesPagination = true,
}) => {
  return (
    <CustomBox
      style={{
        marginTop: "1.5rem",
        
       
      }}
    >
      {children}
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        getRowId={getRowId}
        sx={{
         
          border: "none",
          "& .MuiDataGrid-root": {
            border: `1px solid ${Colors.LinkColor}`,
          },

          "& .MuiDataGrid-columnHeaderTitle": {
            color: "#202020",
            fontWeight: "500",
            fontSize: "15px",
          },

          ...sx,
        }}
        disableColumnMenu
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pageSize || 5,
            },
          },
        }}
        pageSizeOptions={[pageSize || 5]}
        slotProps={{
          baseButton: {
            sx: {},
          },
          toolbar: {
            title,
            customButtons,
            exportHide,
          },
        }}
        slots={includeSlots ? { toolbar: CustomToolbar } : {}}
      />
    </CustomBox>
  );
};

const CustomToolbar: React.FC<{
  title?: string;
  customButtons?: React.ReactNode;
}> = ({ title, customButtons }) => {
  const [selectedValue, setSelectedValue] = useState<string>("Aquirer");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const switchAquirer = [
    { value: "Aquirer", label: "Aquirer" },
    { value: "Aquirer", label: "Aquirer" },
    { value: "Aquirer", label: "Aquirer" },
  ];

  return (
    <GridToolbarContainer sx={{ marginBottom: "2rem" }}>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              color: "#202020",
              fontSize: "20px",
              fontWeight: "600",
              borderBottom: `1px solid ${Colors.LinkColor}`,
            }}
          >
            {title}
          </Typography>
          <Typography>{customButtons}</Typography>
        </Box>
        <Grid container rowSpacing={2} columnSpacing={2} mt={1}>
          <Grid item xs={6} sm={3} md={2}>
            {" "}
            <BasicSelect
              placeholderStyle={{ fontSize: "13px" }}
              labelStyle={{ marginTop: "0rem" }}
              sx={{
                borderRadius: 1,
                backgroundColor: "#FCFAFA",

                border: "1px solid #898989",
                padding: "4px 10px",
                marginTop: "0px",
              }}
              name={"selectedValue"}
              value={selectedValue}
              handleChange={handleChange}
              size="small"
              items={switchAquirer}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            {" "}
            <CustomDatePickerInput />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            {" "}
            <CustomDatePickerInput />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <LoadButton
              style={{
                height: "75%",
                fontSize: "13px",
              }}
            >
              Apply
            </LoadButton>
          </Grid>

          <Grid item xs={6} sm={4} md={4}>
            <GridToolbarQuickFilter variant="outlined" size="small" />
          </Grid>
        </Grid>
      </Box>
    </GridToolbarContainer>
  );
};

export default Table1;
