import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import * as React from 'react';
import Box from '@mui/material/Box';
import { columns } from './database';
let currentDate = new Date().toJSON().slice(0, 10);
const rows = [
  { id: 1, Date: currentDate,Temperature: 15 , Humidity: 0.56, Vibrationx:56 },
  { id: 2, Date: currentDate,Temperature: 17 , Humidity: 0.51, Vibration:92},
  { id: 3,Date: currentDate,Temperature: 18 , Humidity: 0.75, Vibration:20 },
  { id: 4, Date: currentDate,Temperature: 25 , Humidity: 0.56, Vibration:45 },
  { id: 5, Date: currentDate,Temperature: 12 , Humidity: 0.58, Vibration:25},
  { id: 6, Date: currentDate,Temperature: 17 , Humidity: 0.68, Vibration:47 },
  { id: 7, Date: currentDate,Temperature: 29 , Humidity: 0.49, Vibration: 54 },
  { id: 8, Date: currentDate,Temperature: 18 , Humidity: 0.67, Vibration:45 },
  { id: 9, Date: currentDate,Temperature: 15 , Humidity: 0.56, Vibration:52 },
];





const Data = () => {
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

export default Data;