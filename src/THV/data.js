import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import * as React from 'react';
import Box from '@mui/material/Box';
import { columns } from './database';
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { BASE_URL, configToken } from "../utils/api";
import { addToast } from "../redux/features/toast/toastSlice";

let currentDate = new Date().toJSON().slice(0, 10);
const rows = [
  { id: 1, Date: currentDate,Temperature: 15 , Humidity: 0.56, Vibrationx:5,Vibrationy:7,Vibrationz:8},
  { id: 2, Date: currentDate,Temperature: 17 , Humidity: 0.51, Vibrationx:1,Vibrationy:16,Vibrationz:12},
  { id: 3,Date: currentDate,Temperature: 18 , Humidity: 0.75, Vibrationx:4,Vibrationy:18,Vibrationz:9 },
  { id: 4, Date: currentDate,Temperature: 25 , Humidity: 0.56, Vibrationx:2,Vibrationy:7,Vibrationz:8 },
  { id: 5, Date: currentDate,Temperature: 12 , Humidity: 0.58, Vibrationx:3,Vibrationy:7,Vibrationz:8},
  { id: 6, Date: currentDate,Temperature: 17 , Humidity: 0.68, Vibrationx:3,Vibrationy:7,Vibrationz:6 },
  { id: 7, Date: currentDate,Temperature: 29 , Humidity: 0.49, Vibrationx:4,Vibrationy:7,Vibrationz:5 },
  { id: 8, Date: currentDate,Temperature: 18 , Humidity: 0.67, Vibrationx:5,Vibrationy:2,Vibrationz:5 },
  { id: 9, Date: currentDate,Temperature: 15 , Humidity: 0.56, Vibrationx:8,Vibrationy:7,Vibrationz:9 },
];





const Table_thv = () => {
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
   
  <Box sx={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={Data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        components={{ Toolbar: GridToolbar }} />
    </Box>
  );
}
};

export default Table_thv;