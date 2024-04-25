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
import { Box } from "@mui/material";
import { Height } from "@mui/icons-material";

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
  hideSearch?: boolean;
  hideSelect?: boolean;
}

const TableWithDatePic: React.FC<BasicTableProps> = ({
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
  hideSearch = true,
  hideSelect = true,
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
            marginTop: "0px",
          },

          "& .MuiDataGrid-columnHeaderTitle": {
            color: "#202020",
            fontWeight: "600",
            fontSize: "15px",
          },
          "& .even": {
            bgcolor: '#D1FDD1'
          },
          "& .odd": {
            bgcolor: '#fff'
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
            hideSearch,
            hideSelect,
          },
        }}
        slots={includeSlots ? { toolbar: CustomToolbar } : {}}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
      />
    </CustomBox>
  );
};

const CustomToolbar: React.FC<{
  title?: string;
  hideSearch?: boolean;
  hideSelect?: boolean;
  customButtons?: React.ReactNode;
}> = ({ title, customButtons, hideSearch, hideSelect }) => {
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
    <GridToolbarContainer sx={{ marginBottom: "1rem" }}>
      <Box sx={{width: "100%"}}>
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
          {/* <Typography>{customButtons}</Typography> */}
        </Box>
        <Grid container rowSpacing={2} columnSpacing={3} mt={1}>
          {hideSelect && (
            <Grid item xs={6} sm={3} md={2}>
              {" "}
              <BasicSelect
                placeholderStyle={{ fontSize: "13px" }}
                labelStyle={{ marginTop: "0rem" }}
                sx={{
                  borderRadius: 1,
                  backgroundColor: "#FCFAFA",
                  boxShadow: "0.94px 0.94px 2.81px 0px #00000026",
                  padding: "4px 10px",
                }}
                name={"selectedValue"}
                value={selectedValue}
                handleChange={handleChange}
                size="small"
                items={switchAquirer}
              />
            </Grid>
          )}
          <Grid item xs={6} sm={3} md={2}>
            {" "}
            <CustomDatePickerInput />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            {" "}
            <CustomDatePickerInput style={{width: "100%"}} />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <LoadButton
              type="submit"
              style={{
                width: "100%",
                
              }}
            >
              Apply
            </LoadButton>
          </Grid>

          {hideSearch && (
            <Grid item xs={6} sm={4} md={4}>
              <GridToolbarQuickFilter variant="outlined" size="small" />
            </Grid>
          )}
        </Grid>
      </Box>
    </GridToolbarContainer>
  );
};

export default TableWithDatePic;
