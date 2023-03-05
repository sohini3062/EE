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
    field: 'Vibrationx',
    headerName: 'Vibration-X',
    width: 250,
    editable: false,
  },
  {
    field: 'Vibrationy',
    headerName: 'Vibration-Y',
    width: 150,
    editable: false,
  },
   {
    field: 'Vibrationz',
    headerName: 'Vibration-z',
    width: 150,
    editable: false,
  },
   
];

let currentDate = new Date().toJSON().slice(0, 10);
const rows = [
  { id: 1, Date: currentDate, Vibrationx:5,Vibrationy:7,Vibrationz:8},
 
];

const TempDataV = () => {
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

export default TempDataV;