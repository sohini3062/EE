import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { BASE_URL, configToken } from "../../utils/api";
import { addToast } from "../../redux/features/toast/toastSlice";

const Datatable = () => {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn,token} = useSelector((state) => state.auth);

   useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      axios
        .get(`${BASE_URL}transformer_data/all`, configToken(token))
        .then((response) => {
          console.log(response.data);
          setData(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          dispatch(
            addToast({
              type: "error",
              message: "Could not load transformers!",
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
        Transformers Under Use
        <Link to="/newTransformer" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={Data}
        columns={userColumns}
        pageSize={15}
        rowsPerPageOptions={[9]}
       
      />
    </div>
  );
}
};

export default Datatable;
