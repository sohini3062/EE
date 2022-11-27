export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {field: "transformer_id",headerName: "TRANSFORMER", width:230},
  
  {
    
    headerName: "DATE",
    width: 160,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.date}
        </div>
      );
    },
  },
  {
    field: "value_top_oil",
    headerName: "TOP OIL TEMPERATURE",
    width: 230,
  },
  {
    field: "value_bottom_oil",
    headerName: "BOTTOM OIL TEMPERATURE",
    width: 230,
  },
  {
    field: "unit",
    headerName: "Units",
    width: 230,
  },
  {
    field: "humidity",
    headerName: "HUMIDITY(%)",
    width: 230,
  },
];

//temporary data
export const userRows = [
  {
    date: "15/05/2022",
    id: 1,
    transformer_id: "1",
    value_top_oil: 75,
    value_bottom_oil: 62,
    humidity: 60,
    unit: "Celsius",
  },
  
   {
    date: "19/06/2022",
    transformer_id:"2",
    id: 2,
    value_top_oil: 72,
    value_bottom_oil: 60,
    humidity: 50,
    unit: "Celsius",
  },

   {
    date: "15/05/2022",
    id: 3,
    transformer_id:'2',
    value_top_oil: 81,
    value_bottom_oil: 70,
     humidity: 40,
    unit: "Celsius",
  },
  {
    date: "20/9/2022",
    id: 4,
    value_top_oil: 74,
    value_bottom_oil: 67,
     humidity: 50,
    transformer_id:'3',
   unit: "Celsius",
  },
    {
    date: "4/5/2022",
    id: 5,
    value_top_oil: 79,
    value_bottom_oil: 68,
     humidity: 90,
    transformer_id:'3',
    unit: "Celsius",
  },

  
];
