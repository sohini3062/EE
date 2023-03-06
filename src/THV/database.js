export const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'timeStamp',
    headerName: 'Date',
    value: Date,
    width: 250,
    editable: false,
  },
  {
    field: 'temp',
    headerName: 'Temperature(Celsius)',
    width: 250,
    editable: false,
  },
  {
    field: 'humidity',
    headerName: 'Humidity',
    width: 150,
    editable: false,
  },
  {
    field: 'vibx',
    headerName: 'Vibration-X',
    width: 160,
  },
  {
    field: 'viby',
    headerName: 'Vibration-Y',
    width: 160,
  },
  {
    field: 'vibz',
    headerName: 'Vibration-Z',
    width: 160,
  }
   
];

