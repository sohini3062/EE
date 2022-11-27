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
    field: "value_ryb",
    headerName: "RYB PHASE CURRENT",
    width: 230,
  },
  {
    field: "value_neutral",
    headerName: "NEUTRAL CURRENT",
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
