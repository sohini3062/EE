import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { BASE_URL, configToken } from "../utils/api";
import { addToast } from "../redux/features/toast/toastSlice";

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
    field: 'vibx',
    headerName: 'Vibration-X',
    width: 250,
    editable: false,
  },
  {
    field: 'viby',
    headerName: 'Vibration-Y',
    width: 150,
    editable: false,
  },
   {
    field: 'vibz',
    headerName: 'Vibration-z',
    width: 150,
    editable: false,
  },
   
];



const TempDataV = () => {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn,token} = useSelector((state) => state.auth);

   useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      axios
        .get(`${BASE_URL}nodemcu-data/all`, configToken(token))
        .then((response) => {
          console.log(response.data);
          setData(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          dispatch(
            addToast({
              type: "error",
              message: "Could not load data!",
            })
          );
          setIsLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, token]);

  if (isLoading) {
    return (
      <Grid container spacing={1} justifyContent="center" sx={{ marginTop: 50 }}>
        <CircularProgress color="primary" size={40} />
      </Grid>
    );
  } else {
    
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Vibration
      </div>
      <DataGrid
        className="datagrid"
        rows={Data}
        columns={columns}
        pageSize={20}
        components={{ Toolbar: GridToolbar }}
       
      />
    </div>
  );
  }
};

export default TempDataV;