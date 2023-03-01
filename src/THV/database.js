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
  {
    field: 'Vibrationx',
    headerName: 'Vibration-X',
    width: 160,
  },
  {
    field: 'Vibrationy',
    headerName: 'Vibration-Y',
    width: 160,
  },
  {
    field: 'Vibrationz',
    headerName: 'Vibration-Z',
    width: 160,
  }
   
];
let currentDate = new Date().toJSON().slice(0, 10);
