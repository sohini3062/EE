export const userColumns = [
 
  
  {
    field: "transformerName",
    headerName: "Transformer Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          
          {params.row.transformerName}
        </div>
      );
    },
  },
  {
    field: "Rating",
    headerName: "Rating",
    width: 230,
  },

  {
    field: "Details",
    headerName: "Details",
    width: 250,
  },
  {
    field:"transformerOwner",
    headerName: "Transformer Owner",
    width:170,

  }
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Transformer 1",
    status: "active",
    manufacturer:"Siemens",
    age: 3,
  },
  {
    id: 2,
    username: "Transformer 2",
    manufacturer: "ABB",
    status: "passive",
    age: 1,
  },
  {
    id: 3,
    username: "Transformer 3",
    manufacturer: "General Electric",
    status: "maintenance",
    age: 1,
  },
  
];
