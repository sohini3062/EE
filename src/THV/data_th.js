import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import * as React from 'react';
import Box from '@mui/material/Box';

export const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Date',
    headerName: 'Date',
    value: Date,
    width: 250,
    editable: false,
  },
  {
    field: 'Temperature',
    headerName: 'Temperature(Celsius)',
    width: 250,
    editable: false,
  },
  {
    field: 'Humidity',
    headerName: 'Humidity',
    width: 150,
    editable: false,
  },
   
];

let currentDate = new Date().toJSON().slice(0, 10);
const rows = [
  { id: 1, Date: currentDate,Temperature: 15 , Humidity: 0.56},
 
];

const TempData = () => {
  return (
   
  <Box sx={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        components={{ Toolbar: GridToolbar }}
      />
    </Box>
    
  );
};

export default TempData;