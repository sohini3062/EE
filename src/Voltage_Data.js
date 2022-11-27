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
    field: "value_ryb_voltage",
    headerName: "RYB PHASE VOLTAGE",
    width: 230,
  },
  {
    field: "value_neutral_voltage",
    headerName: "EARTH-NEUTRAL VOLTAGE",
    width: 230,
  },
  {
    field: "unit",
    headerName: "Units",
    width: 230,
  },
];

//temporary data
export const userRows = [
  {
    date: "15/05/2022",
    id: 1,
    transformer_id: "1",
    value_ryb_voltage: 412.5,
    value_neutral: 25,
    unit: "A",
  },
  
   {
    date: "19/06/2022",
    transformer_id:"2",
    id: 2,
    value_ryb_voltage: 412,
    value_neutral_voltage: 24,
    unit: "A",
  },

   {
    date: "15/05/2022",
    id: 3,
    transformer_id:'2',
    value_ryb_voltage: 413.9,
    value_neutral_voltage:22.4,
    unit: "A",
  },
  {
    date: "20/9/2022",
    id: 4,
    value_ryb_voltage: 414.5,
    value_neutral_voltage: 22.2,
    transformer_id:'3',
    unit: "A",
  },
    {
    date: "4/5/2022",
    id: 5,
    value_ryb_voltage: 412.55,
    value_neutral_voltage: 21.56,
    transformer_id:'3',
    unit: "A",
  },

  
];
