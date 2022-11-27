export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Transformer",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "manufacturer",
    headerName: "Manufacturer Name",
    width: 230,
  },

  {
    field: "age",
    headerName: "Yrs active",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
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
