export const userColumns = [
 
  {field: "transformerId",headerName: "TRANSFORMER ID", width:230},
  
  {field: "timeStamp",headerName: "DATE", width:300},
 
  {
    field: "phaseCurR",
    headerName: "PHASE CURRENT(R) (A)",
    width: 230,
  },
  {
    field: "phaseCurY",
    headerName: "PHASE CURRENT(Y) (A)",
    width: 230,
  },
  {
    field: "phaseCurB",
    headerName: "PHASE CURRENT(B) (A)",
    width: 230,
  },
 
  {
    field: "phaseVolR",
    headerName: "PHASE VOLTAGE(R) (V)",
    width: 230,
  },
  {
    field: "phaseVolY",
    headerName: "PHASE VOLTAGE(Y) (V)",
    width: 230,
  },
  {
    field: "phaseVolB",
    headerName: "PHASE VOLTAGE(B) (V)",
    width: 230,
  },
  
  {
    field: "topOilTemperatureC",
    headerName: "Temperature",
    width: 290,
  },

];

//temporary data
export const userRows = [
  {
    date: "15/05/2022",
    id: 1,
    transformer_id: "1",
    value_ryb: 12.5,
    value_neutral: 11.5,
    unit: "A",
  },
  
   {
    date: "19/06/2022",
    transformer_id:"2",
    id: 2,
    value_ryb: 12,
    value_neutral: 12.1,
    unit: "A",
  },

   {
    date: "15/05/2022",
    id: 3,
    transformer_id:'2',
    value_ryb: 13.9,
    value_neutral:12.4,
    unit: "A",
  },
  {
    date: "20/9/2022",
    id: 4,
    value_ryb: 14.5,
    value_neutral: 14.2,
    transformer_id:'3',
    unit: "A",
  },
    {
    date: "4/5/2022",
    id: 5,
    value_ryb: 12.55,
    value_neutral: 11.56,
    transformer_id:'3',
    unit: "A",
  },

  
];
