import "./newValuesStyle.scss";
import { userColumns, userRows } from "../../FinalData.js";
import { DataGrid, GridToolbar} from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { BASE_URL, configToken } from "../../utils/api";
import { addToast } from "../../redux/features/toast/toastSlice";


const Historical_current = () => {
  
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn,token} = useSelector((state) => state.auth);

   useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      axios
        .get(`${BASE_URL}transformer_data/properties/8513b674-2a56-463e-8dc1-2f20804ebe60`, configToken(token))
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

var sample=new Array();

const updatedArray = Data.map((element) => ({
  ...element,
  date: new Date(element.timeStamp)
}));

updatedArray.sort((a, b) => {
  const dateComparison = b.date.getTime() - a.date.getTime();
  if (dateComparison !== 0) {
    return dateComparison;
  } else {
    return (b.date.getSeconds() + (b.date.getMilliseconds() / 1000)) - 
           (a.date.getSeconds() + (a.date.getMilliseconds() / 1000));
  }
});

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
        Observation Table 
      </div>
     
      <DataGrid
        className="datagrid"
        
          rows={updatedArray}
          
        columns={userColumns}
        pageSize={20}
        components={{ Toolbar: GridToolbar }}
       
      />
    </div>
  );
  }
};

export default Historical_current;
