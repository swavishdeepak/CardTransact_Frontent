import { Box, Divider } from "@mui/material";
import {
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { CustomBox } from "./MyCustom/CustomBox";
import { parse } from "path";

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
  getRowClassName?: React.CSSProperties;
  pageSize?: number;
  sx?: object;
  title?: string;
  exportHide?: boolean;
  customButtons?: React.ReactNode;
  getRowId?: (row: Row) => string | number;
  includeSlots?: boolean;
  loading?: boolean;
  paginationModel?: any;
  setPaginationModel?: any;
  rowCountState?: number;
  includesPagination?: boolean;
  includeSearch?: boolean;
  showDatePicker?: boolean
}

const TableServer: React.FC<BasicTableProps> = ({
  columns = [],
  rows = [],
  pageSize,
  children,
  sx,
  title,
  exportHide,
  customButtons,
  showDatePicker,
  getRowId,
  includeSlots = true,
  paginationModel,
  setPaginationModel,
  rowCountState,
  loading = false,
  includesPagination = true,
  includeSearch = true,
}) => {
  return (
    <CustomBox style={{ marginTop: "1rem" }}>
      {children}
      <DataGrid
        // checkboxSelection
        paginationMode="server"
        autoHeight
        rows={rows}
        rowCount={rowCountState}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        loading={loading}
        columns={columns}
        getRowId={getRowId}
        sx={{
          border: "none",
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
        initialState={
          includesPagination
            ? {
                pagination: {
                  paginationModel: {
                    pageSize: pageSize || 5,
                  },
                },
              }
            : {}
        }
        pageSizeOptions={[pageSize || 5]}
        slotProps={{
          baseButton: {
            sx: {},
          },
          toolbar: {
            title,
            customButtons,
            includeSearch,
            exportHide,
            showDatePicker
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

const CustomToolbar: React.FC<{ title?: string; includeSearch?: boolean }> = ({
  title,
  includeSearch = true,
}) => {
  return (
    <GridToolbarContainer
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: "2rem",
        "@media(max-width: 600px)":{
          justifyContent: "center",
          gap: 3
        }
      }}
    >
      <Box>
        {title && (
          <>
            <Box
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1rem", md: "1.4rem" },
              }}
            >
              {title}
            </Box>
            <Divider sx={{ border: "1px solid #77D177" }} />
          </>
        )}
      </Box>

      {includeSearch && (
        <Box sx={{ display: "flex", gap: 2 }}>
          
          <GridToolbarQuickFilter variant="outlined" size="small" />
        </Box>
      )}
    </GridToolbarContainer>
  );
};

export default TableServer;
